---
description: Run pre-deployment checklist — build, lint, security scan, responsive check
agent: code
---

# Deploy Check Workflow

You are running a pre-deployment verification for VoDu. Follow these steps:

1. **Build**: Run `npm run build` — must exit with code 0
2. **Lint**: Run `npm run lint` — no new errors allowed
3. **Security scan**: Search for:
   - Hardcoded credentials or secret keys (grep for `apiKey`, `service_role`, `supabase_key`)
   - `console.log` statements that should not be in production
   - `debugger;` statements
   - `TODO` or `FIXME` comments in critical files
4. **Responsive check**: If UI files were changed, verify responsive patterns exist (mobile-first classes)
5. **Summary**: Report all findings with ✅/❌ status
