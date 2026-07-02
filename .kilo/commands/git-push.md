---
description: Build, stage, commit, and push changes with automated checks
agent: code
---

# Git Push Workflow

You are helping push changes for the VoDu project. Follow these steps:

1. **Pre-check**: Run `git status` to see current state
2. **Build check**: Run `npm run build` — if it fails, STOP and report
3. **Stage**: Stage all relevant files (ask user if unsure which files to include)
4. **Commit prompt**: Use `question` to get commit message from user
5. **Push**: Run `git push` to push the committed changes
6. **Report**: Confirm the branch name and commit hash after push
