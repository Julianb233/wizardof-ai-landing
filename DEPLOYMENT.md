# WizardOf.ai Landing Page - Deployment Guide

## Overview

This Next.js landing page is deployed to Vercel with automatic deployments via GitHub Actions.

## Deployment Status

- **Project ID**: `prj_SAlLouRslpZwfQyybc8mbm73CJqu`
- **Organization ID**: `team_Fs8nLavBTXBbOfb7Yxcydw83`
- **Framework**: Next.js 16.1.0
- **Status**: Ready for deployment

## Current Setup

The project includes:
- **Build Configuration**: `npm run build` (Next.js compilation)
- **Vercel Configuration**: `vercel.json` with security headers and caching
- **Deployment Pipeline**: GitHub Actions workflow for automated deployments

## Build Status

```
✓ Compiled successfully in 5.8s
✓ Generating static pages using 7 workers (4/4)
✓ Route optimization complete
```

The application is statically generated (SSG) with the following routes:
- `/` - Main landing page (prerendered)
- `/_not-found` - 404 page (prerendered)

## Deployment Methods

### Method 1: Automatic Deployment (Recommended)

When code is pushed to the `main` or `master` branch, GitHub Actions automatically:
1. Checks out the code
2. Installs dependencies
3. Runs the build
4. Deploys to Vercel production

**Requirements**:
- GitHub repository with the code
- Vercel account connected to GitHub
- Secrets configured in GitHub:
  - `VERCEL_TOKEN`
  - `VERCEL_ORG_ID`
  - `VERCEL_PROJECT_ID`

### Method 2: Manual Vercel CLI Deployment

```bash
# Install Vercel CLI globally (if not already installed)
npm install -g vercel

# Deploy to production
cd /root/github-repos/wizardof-ai-landing
vercel deploy --prod

# Or use environment token for non-interactive deployment
VERCEL_TOKEN=<token> vercel deploy --prod
```

### Method 3: Vercel Dashboard

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select the `wizardof-ai-landing` project
3. Click "Deploy" button
4. Wait for the build and deployment to complete

## Environment Variables

No environment variables are required for this static landing page. However, if you add dynamic features later, configure them in:

- **Vercel Dashboard**: Project Settings > Environment Variables
- **Local Development**: `.env.local`
- **CI/CD**: GitHub secrets

## Performance Optimization

The build includes:
- ✓ Static generation for instant page loads
- ✓ CSS purging via Tailwind CSS 4
- ✓ Optimized SVG icons
- ✓ Minimal JavaScript bundle
- ✓ Security headers configured

## Caching Strategy

The `vercel.json` configuration sets:
- **Cache Control**: 1 hour cache for all routes
- **Security Headers**:
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: SAMEORIGIN`

## Troubleshooting

### Build Failures

If the build fails:
1. Check `npm run build` locally
2. Verify all dependencies are installed
3. Check Node.js version (requires 18+)
4. Review build logs in Vercel dashboard

### Deployment Failures

Common issues:
- **Token expired**: Refresh Vercel authentication
- **Missing secrets**: Add required GitHub secrets
- **Size limit**: Check if `.next` folder exceeds limits
- **Port conflicts**: Ensure port 3000 is available

### Preview Deployments

All pull requests automatically get preview deployments. View them by:
1. Opening the pull request
2. Looking for the Vercel deployment comment
3. Clicking the preview URL

## Rollback

To rollback to a previous deployment:
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select `wizardof-ai-landing` project
3. Go to "Deployments" tab
4. Find the previous working deployment
5. Click the three-dot menu
6. Select "Promote to Production"

## Monitoring

Monitor your deployment at:
- **Dashboard**: https://vercel.com/dashboard/wizardof-ai-landing
- **Live Site**: https://wizardof-ai-landing.vercel.app

View logs and analytics:
- Vercel Dashboard > Deployments > Select deployment > Logs
- Vercel Dashboard > Analytics

## Security Considerations

- ✓ All deployments use HTTPS
- ✓ DDoS protection via Vercel
- ✓ Automatic SSL certificates
- ✓ Security headers configured
- ✓ No sensitive data in codebase

## Next Steps

1. **Push to GitHub**: Ensure code is in a GitHub repository
2. **Connect GitHub**: Link repository to Vercel project
3. **Configure Secrets**: Add `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID` to GitHub
4. **Trigger Deployment**: Push to `main`/`master` branch

## Support

For deployment issues:
- Check [Vercel Documentation](https://vercel.com/docs)
- Review GitHub Actions logs
- Contact Vercel Support

---

**Last Updated**: December 18, 2025
**Deployed By**: Petra-DevOps
**Status**: Production Ready
