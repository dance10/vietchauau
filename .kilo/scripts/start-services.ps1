<#
.SYNOPSIS
  Start agentmemory + 9router background services for BaiKiemTraVEU.
.DESCRIPTION
  Kiểm tra port, start service nếu chưa chạy.
  Được gọi tự động bởi VS Code task khi mở workspace.
#>

$ErrorActionPreference = "SilentlyContinue"

# ─── Helper: check if port is in use ───
function Test-PortInUse($Port) {
    $conn = Get-NetTCPConnection -LocalPort $Port -ErrorAction SilentlyContinue
    return ($conn -ne $null -and $conn.Count -gt 0)
}

# ─── 1. Start agentmemory (port 3111) ───
if (Test-PortInUse 3111) {
    Write-Host "[agentmemory] Already running on port 3111"
} else {
    Write-Host "[agentmemory] Starting..."
    $p = Start-Process -FilePath "npx.cmd" -ArgumentList "-y @agentmemory/agentmemory" `
        -WindowStyle Hidden -PassThru
    Write-Host "[agentmemory] Started (PID: $($p.Id))"
}

# ─── 2. Start 9router (port 20128) ───
if (Test-PortInUse 20128) {
    Write-Host "[9router]   Already running on port 20128"
} else {
    Write-Host "[9router]   Starting..."
    $p = Start-Process -FilePath "npx.cmd" -ArgumentList "-y 9router --skip-update" `
        -WindowStyle Hidden -PassThru
    Write-Host "[9router]   Started (PID: $($p.Id))"
}

# ─── 3. CodeGraph sync ───
try {
    $null = Get-Command codegraph -ErrorAction Stop
    Write-Host "[codegraph] Syncing..."
    npx codegraph sync . 2>&1 | Out-Null
    Write-Host "[codegraph] Sync done"
} catch {
    Write-Host "[codegraph] Not installed - skipping"
}

Write-Host ""
Write-Host "[agentmemory] Viewer:   http://localhost:3113"
Write-Host "[9router]   Dashboard: http://localhost:20128"
