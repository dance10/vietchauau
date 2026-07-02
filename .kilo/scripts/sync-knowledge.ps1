<#
.SYNOPSIS
  Sync knowledge across the friend circle -- 6 EduPortal projects.
.DESCRIPTION
  Phat hien file moi/thay doi trong moi du an - tu dong copy sang cac du an khac.
  Dung manifest (.kilo/sync/manifest.json) de track version, tranh copy trung.
  Goi: .\.kilo\scripts\sync-knowledge.ps1
.NOTES
  Author: Kilo Agent
  Date:   2026-06-28
#>

param(
    [switch]$DryRun,
    [switch]$Force
)

$ErrorActionPreference = "Continue"

# Load friend circle config
$friendsFile = Join-Path $PSScriptRoot "..\sync\friends.json"
if (-not (Test-Path $friendsFile)) {
    Write-Host "ERROR: friends.json not found at $friendsFile" -ForegroundColor Red
    exit 1
}
$configRaw = Get-Content $friendsFile -Raw
$config = $configRaw | ConvertFrom-Json

# Manifest file
$manifestDir = Join-Path $PSScriptRoot "..\sync"
$manifestFile = Join-Path $manifestDir "manifest.json"
$manifest = @{}
if (Test-Path $manifestFile) {
    try { $manifest = Get-Content $manifestFile -Raw | ConvertFrom-Json -AsHashtable } catch { $manifest = @{} }
}
if (-not $manifest.ContainsKey('version')) { $manifest.version = 1 }
if (-not $manifest.ContainsKey('lastSync')) { $manifest.lastSync = '2000-01-01' }
if (-not $manifest.ContainsKey('entries')) { $manifest.entries = @{} }

# Helper: MD5 hash
function Get-Md5Hash($path) {
    if (-not (Test-Path $path)) { return $null }
    try {
        $hash = Get-FileHash $path -Algorithm MD5
        return $hash.Hash
    } catch { return $null }
}

# Helper: ignore check
$ignoreList = @(
    '.kilo/memory/project.md',
    '.kilo/memory/project-identity.md',
    '.kilo/memory/constitution.md',
    '.kilo/memory/reference.md',
    'kilo.jsonc',
    '.kilo/kilo.json',
    '.kilo/node_modules',
    'node_modules',
    'dist',
    '.git'
)
function Test-ShouldIgnore($relPath) {
    foreach ($p in $ignoreList) {
        if ($relPath -eq $p) { return $true }
        if ($relPath -like ($p + '/*')) { return $true }
        if ($relPath -like ($p + '\*')) { return $true }
    }
    return $false
}

# Collect projects
$projHash = @{}
$config.projects.PSObject.Properties | ForEach-Object { $projHash[$_.Name] = $_.Value }
$projectNames = $projHash.Keys

Write-Host "================================================="
Write-Host "  Friend Circle Sync - $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
Write-Host "  Circle: $($config.name)"
Write-Host "  Projects: $($projectNames -join ', ')"
if ($DryRun) { Write-Host "  [DRY RUN - no changes]" -ForegroundColor Yellow }
Write-Host "================================================="

$stats = @{ copied=0; skipped=0; errors=0; newFriends=0 }

# --- Sync directories (union) ---
$dirCfgs = @{}
$config.sync.directories.PSObject.Properties | ForEach-Object { $dirCfgs[$_.Name] = $_.Value }

foreach ($dirKey in $dirCfgs.Keys) {
    $strategy = $dirCfgs[$dirKey].strategy
    Write-Host "`nDir: $dirKey ($strategy)" -ForegroundColor Cyan

    # Collect all unique files from all projects
    $allFiles = @{}
    foreach ($pName in $projectNames) {
        $pDir = $projHash[$pName]
        $dirPath = Join-Path $pDir $dirKey
        if (-not (Test-Path $dirPath)) { continue }

        Get-ChildItem $dirPath -Recurse -File -ErrorAction SilentlyContinue | ForEach-Object {
            $fullPath = $_.FullName
            $rel = $fullPath.Substring((Resolve-Path $pDir).Path.Length + 1)
            if (Test-ShouldIgnore $rel) { return }

            $h = Get-Md5Hash $fullPath
            if (-not $allFiles.ContainsKey($rel)) { $allFiles[$rel] = @() }
            $allFiles[$rel] += @{
                source     = $pName
                path       = $fullPath
                hash       = $h
                lastWrite  = $_.LastWriteTime
            }
        }
    }

    foreach ($rel in $allFiles.Keys) {
        $versions = $allFiles[$rel] | Sort-Object -Property lastWrite -Descending
        $best = $versions[0]

        foreach ($pName in $projectNames) {
            $pDir = $projHash[$pName]
            $destPath = Join-Path $pDir $rel
            $destDir = Split-Path $destPath -Parent

            if ($pName -eq $best.source) { continue }

            if (Test-Path $destPath) {
                $destHash = Get-Md5Hash $destPath
                if ($destHash -eq $best.hash) { $stats.skipped++; continue }
            }

            if (-not $DryRun) {
                if (-not (Test-Path $destDir)) { New-Item -ItemType Directory -Force -Path $destDir | Out-Null }
                Copy-Item $best.path $destPath -Force
            }
            Write-Host "  -> $rel to $pName" -ForegroundColor Green
            $stats.copied++
        }
    }
}

# --- Sync files (latest / merge) ---
$fileCfgs = @{}
$config.sync.files.PSObject.Properties | ForEach-Object { $fileCfgs[$_.Name] = $_.Value }

foreach ($relFile in $fileCfgs.Keys) {
    $strategy = $fileCfgs[$relFile].strategy
    Write-Host "`nFile: $relFile ($strategy)" -ForegroundColor Cyan

    $versions = @()
    foreach ($pName in $projectNames) {
        $pDir = $projHash[$pName]
        $fPath = Join-Path $pDir $relFile
        if (Test-Path $fPath) {
            $versions += @{
                source    = $pName
                path      = $fPath
                hash      = Get-Md5Hash $fPath
                lastWrite = (Get-Item $fPath).LastWriteTime
            }
        }
    }
    if ($versions.Count -eq 0) { continue }

    $best = $versions | Sort-Object -Property lastWrite -Descending | Select-Object -First 1

    foreach ($pName in $projectNames) {
        $pDir = $projHash[$pName]
        $destPath = Join-Path $pDir $relFile
        $destDir = Split-Path $destPath -Parent

        if ($pName -eq $best.source) { continue }
        if (Test-Path $destPath) {
            $dh = Get-Md5Hash $destPath
            if ($dh -eq $best.hash) { $stats.skipped++; continue }
        }

        if ($strategy -eq "merge") {
            $existing = if (Test-Path $destPath) { Get-Content $destPath -Raw } else { "" }
            $newContent = Get-Content $best.path -Raw
            if ($existing -ne $newContent) {
                if (-not $DryRun) {
                    if (-not (Test-Path $destDir)) { New-Item -ItemType Directory -Force -Path $destDir | Out-Null }
                    # Append new unique lines
                    $eLines = $existing -split "`n"
                    $nLines = $newContent -split "`n"
                    $merged = $eLines + $nLines | Select-Object -Unique
                    ($merged -join "`n") | Out-File $destPath -Encoding UTF8
                }
                Write-Host "  -> $relFile to $pName (merged)" -ForegroundColor Green
                $stats.copied++
            }
        } else {
            if (-not $DryRun) {
                if (-not (Test-Path $destDir)) { New-Item -ItemType Directory -Force -Path $destDir | Out-Null }
                Copy-Item $best.path $destPath -Force
            }
            Write-Host "  -> $relFile to $pName" -ForegroundColor Green
            $stats.copied++
        }
    }
}

# --- Distribute friends.json to all projects ---
Write-Host "`nFriend Discovery:" -ForegroundColor Cyan
foreach ($pName in $projectNames) {
    $pDir = $projHash[$pName]
    if (-not (Test-Path $pDir)) {
        Write-Host "  WARN: $pName not found at $pDir" -ForegroundColor Yellow
        $stats.errors++
        continue
    }

    $theirFile = Join-Path $pDir ".kilo\sync\friends.json"
    if (Test-Path $theirFile) {
        $theirHash = Get-Md5Hash $theirFile
        $ourHash = Get-Md5Hash $friendsFile
        if ($theirHash -eq $ourHash) {
            Write-Host "  OK: $pName already in circle"
        } else {
            if (-not $DryRun) { Copy-Item $friendsFile $theirFile -Force }
            Write-Host "  UPDATE: $pName friends.json updated" -ForegroundColor Green
            $stats.copied++
        }
    } else {
        if (-not $DryRun) {
            $destDir2 = Join-Path $pDir ".kilo\sync"
            New-Item -ItemType Directory -Force -Path $destDir2 | Out-Null
            Copy-Item $friendsFile (Join-Path $destDir2 "friends.json") -Force
        }
        Write-Host "  NEW: $pName added to circle" -ForegroundColor Green
        $stats.newFriends++
    }

    # Also distribute sync script
    $theirScript = Join-Path $pDir ".kilo\scripts\sync-knowledge.ps1"
    if (-not (Test-Path $theirScript)) {
        if (-not $DryRun) {
            $scriptDestDir = Join-Path $pDir ".kilo\scripts"
            New-Item -ItemType Directory -Force -Path $scriptDestDir | Out-Null
            Copy-Item (Join-Path $PSScriptRoot "sync-knowledge.ps1") $theirScript -Force
        }
        Write-Host "  SCRIPT: sync-knowledge.ps1 installed to $pName" -ForegroundColor Green
    }
}

# Update manifest
if (-not $DryRun) {
    $manifest.lastSync = (Get-Date).ToString('o')
    $manifest | ConvertTo-Json -Depth 5 | Out-File $manifestFile -Encoding UTF8
}

# Summary
Write-Host ""
Write-Host "================================================="
Write-Host "  Sync Summary"
Write-Host "================================================="
Write-Host "  Copied:      $($stats.copied)"
Write-Host "  Skipped:     $($stats.skipped)"
Write-Host "  Errors:      $($stats.errors)"
Write-Host "  New friends: $($stats.newFriends)"
Write-Host "================================================="
if ($DryRun) { Write-Host "[DRY RUN] Run without -DryRun to apply." -ForegroundColor Yellow }
