# Deployment Guide

This guide covers deploying your portfolio website using GitHub Actions and Vercel.

## Quick Start

1. **Push to GitHub**
2. **Set up Vercel project**
3. **Configure GitHub secrets**
4. **Deploy automatically**

## Detailed Setup

### 1. GitHub Repository Setup

```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial commit"

# Add remote origin (replace with your GitHub repo URL)
git remote add origin https://github.com/yourusername/portfolio-website.git
git branch -M main
git push -u origin main
```

### 2. Vercel Project Setup

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"New Project"**
3. Import your GitHub repository
4. Configure project settings:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm ci` (default)

### 3. Get Vercel Credentials

#### Project ID and Organization ID:
1. In your Vercel project dashboard
2. Go to **Settings** → **General**
3. Copy:
   - **Project ID** (under "Project ID")
   - **Organization ID** (under "Organization ID")

#### Vercel Token:
1. Go to [Vercel Account Settings](https://vercel.com/account/tokens)
2. Click **"Create Token"**
3. Name it (e.g., "GitHub Actions")
4. Copy the generated token

### 4. Configure GitHub Secrets

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **"New repository secret"**
4. Add these secrets:

| Secret Name | Description | Example |
|-------------|-------------|---------|
| `VERCEL_TOKEN` | Your Vercel API token | `vercel_abc123...` |
| `VERCEL_ORG_ID` | Your Vercel organization ID | `team_abc123...` |
| `VERCEL_PROJECT_ID` | Your Vercel project ID | `prj_abc123...` |
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | `https://abc123.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon key | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` |
| `NEXT_PUBLIC_APP_URL` | Your production URL | `https://your-site.vercel.app` |
| `NEXT_PUBLIC_APP_NAME` | Your app name | `Portfolio Website` |

### 5. Deploy

Once secrets are configured:

1. **Push to main branch:**
   ```bash
   git add .
   git commit -m "Add GitHub Actions deployment"
   git push origin main
   ```

2. **Check deployment:**
   - Go to your GitHub repository
   - Click **Actions** tab
   - Watch the deployment workflow run
   - Check for any errors

3. **Access your site:**
   - Go to your Vercel dashboard
   - Click on your project
   - Your site will be live at the provided URL

## Workflow Details

### Deploy Workflow (`.github/workflows/deploy.yml`)

- **Triggers**: Push to `main`/`master`, Pull requests
- **Steps**:
  1. Checkout code
  2. Setup Node.js 18
  3. Install dependencies
  4. Run type checking
  5. Run linting
  6. Build application
  7. Deploy to Vercel

### CI Workflow (`.github/workflows/ci.yml`)

- **Triggers**: Push to `main`/`master`/`develop`, Pull requests
- **Steps**:
  1. Checkout code
  2. Setup Node.js 18
  3. Install dependencies
  4. Run type checking
  5. Run linting
  6. Build application
  7. Upload build artifacts

## Environment Variables

### Required for Build:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_APP_URL`
- `NEXT_PUBLIC_APP_NAME`

### Optional:
- `SUPABASE_SERVICE_ROLE_KEY` (for server-side operations)
- `CONTACT_EMAIL`
- `SUPPORT_EMAIL`

## Troubleshooting

### Common Issues:

1. **Build fails with "Module not found"**
   - Ensure all dependencies are in `package.json`
   - Run `npm install` locally to verify

2. **Environment variables not found**
   - Check GitHub secrets are correctly named
   - Verify secrets are added to the repository

3. **Vercel deployment fails**
   - Check Vercel token has correct permissions
   - Verify Project ID and Organization ID are correct

4. **TypeScript errors**
   - Run `npm run typecheck` locally first
   - Fix any type errors before pushing

### Debug Steps:

1. **Check GitHub Actions logs:**
   - Go to Actions tab in your repository
   - Click on the failed workflow
   - Review the error messages

2. **Test locally:**
   ```bash
   npm run typecheck
   npm run lint
   npm run build
   ```

3. **Verify environment variables:**
   - Check `.env.local` file exists
   - Verify all required variables are set

## Manual Deployment

If you prefer manual deployment:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts to configure
# Add environment variables in Vercel dashboard
```

## Custom Domain

To add a custom domain:

1. Go to Vercel project dashboard
2. Click **Settings** → **Domains**
3. Add your domain
4. Configure DNS records as instructed
5. Wait for SSL certificate to be issued

## Monitoring

- **Vercel Analytics**: Built-in performance monitoring
- **GitHub Actions**: Deployment status and logs
- **Vercel Dashboard**: Real-time deployment status

## Security

- All secrets are encrypted in GitHub
- Vercel tokens have limited scope
- Environment variables are not exposed in client-side code
- HTTPS is automatically enabled
