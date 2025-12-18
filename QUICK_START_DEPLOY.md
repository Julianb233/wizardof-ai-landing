# Quick Start: Deploy WizardOf.ai to Vercel

## TL;DR - Fastest Deployment Path

### Option A: Automatic (Recommended)

1. Push to GitHub:
   ```bash
   git push origin main
   ```
2. GitHub Actions automatically deploys to Vercel
3. Live URL: `https://wizardof-ai-landing.vercel.app`

### Option B: Manual CLI

```bash
export VERCEL_TOKEN=<your-vercel-token>
vercel deploy --prod --confirm
```

---

## Prerequisites

- ✅ Next.js project built and tested
- ✅ Dependencies installed (`npm install`)
- ✅ Project linked to Vercel (`.vercel/project.json` exists)
- ✅ Build passes locally (`npm run build`)

## What We've Set Up

| File | Purpose |
|------|---------|
| `vercel.json` | Vercel deployment config with security headers |
| `.vercelignore` | Files excluded from deployment |
| `.github/workflows/deploy.yml` | Automated CI/CD pipeline |
| `DEPLOYMENT.md` | Full deployment documentation |

## Project Details

- **Project ID**: `prj_SAlLouRslpZwfQyybc8mbm73CJqu`
- **Org ID**: `team_Fs8nLavBTXBbOfb7Yxcydw83`
- **Framework**: Next.js 16.1.0
- **Build Command**: `npm run build`
- **Output**: Static site (SSG)

## Build Status

```
✓ Build successful (5.8s)
✓ TypeScript check passed
✓ 4 static pages generated
✓ Ready for production
```

## Deployment Steps

### Step 1: Prepare Code
```bash
cd /root/github-repos/wizardof-ai-landing
npm run build  # Verify build works locally
```

### Step 2: Commit Changes
```bash
git add vercel.json .vercelignore .github/ .gitignore
git commit -m "chore: add Vercel deployment config"
```

### Step 3: Push to GitHub
```bash
git push origin main
# or
git push -u origin main  # if setting up for first time
```

### Step 4: Monitor Deployment
- Go to GitHub Actions tab
- Watch the deployment workflow run
- Check Vercel dashboard for live URL

## GitHub Secrets Required

To enable automatic deployments, add these secrets to your GitHub repository:

1. `VERCEL_TOKEN` - Get from Vercel Account Settings
2. `VERCEL_ORG_ID` - Use: `team_Fs8nLavBTXBbOfb7Yxcydw83`
3. `VERCEL_PROJECT_ID` - Use: `prj_SAlLouRslpZwfQyybc8mbm73CJqu`

**How to add secrets**:
1. Go to GitHub repo → Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Add each secret from above

## Live URL After Deployment

```
https://wizardof-ai-landing.vercel.app
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Build fails | Run `npm run build` locally to debug |
| Deployment hangs | Check GitHub Actions logs |
| 404 errors | Verify routes are generated (`npm run build`) |
| Site looks broken | Check browser cache (hard refresh) |

## Rollback

If something goes wrong:
1. Visit [Vercel Dashboard](https://vercel.com/dashboard)
2. Select `wizardof-ai-landing`
3. Go to Deployments
4. Find previous working version
5. Click menu → "Promote to Production"

## Next Scheduled Deployments

- `main` branch push → Automatic deployment
- Manual: `git push origin main`
- Or use `vercel deploy --prod`

## Support

- Vercel Docs: https://vercel.com/docs/frameworks/nextjs
- GitHub Actions: Check Actions tab for logs
- CLI Help: `vercel --help`

---

**Status**: ✅ Ready to Deploy
**Last Updated**: December 18, 2025
**Deployed By**: Petra-DevOps
