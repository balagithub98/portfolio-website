# GitHub Secrets Configuration

This file contains the exact values you need to add to your GitHub repository secrets for automated deployment.

## 🔐 Required GitHub Secrets

Go to your GitHub repository → **Settings** → **Secrets and variables** → **Actions** and add these secrets:

### Vercel Deployment Secrets

| Secret Name | Value |
|-------------|-------|
| `VERCEL_TOKEN` | `W91ySYtD0zskRExK6ET9i6oc` |
| `VERCEL_ORG_ID` | `N51crSgUNxULzbIrY513o41T` |
| `VERCEL_PROJECT_ID` | `prj_sKaU7mev3zbuKz2ff0JO04AMcsWk` |

### Supabase Configuration

| Secret Name | Value |
|-------------|-------|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://olpplvdnhzsembzphhl.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9scHBsdmRuaHpzZW1ienB2aGhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY4NjY0MDQsImV4cCI6MjA3MjQ0MjQwNH0.O2iJwzHXwVuZ4-sWbmAGqwjlAQjqMu_ohF5Th2paVP0` |

### App Configuration

| Secret Name | Value |
|-------------|-------|
| `NEXT_PUBLIC_APP_URL` | `https://your-project.vercel.app` (update with your actual Vercel URL) |
| `NEXT_PUBLIC_APP_NAME` | `Portfolio Website` |

### MailerSend Configuration (Optional)

| Secret Name | Value |
|-------------|-------|
| `MAILERSEND_API_KEY` | `mlsn.8350e37d880eb8989cf4420557f3ba1ccd6d850bfb117464107b6747e829b7c6` |
| `MAILERSEND_FROM_EMAIL` | `no-reply@test-vz9dlem0yjq4kj50.mlsender.net` |

## 🚀 How to Add Secrets

1. **Go to your GitHub repository**
2. **Click Settings** (tab)
3. **Click Secrets and variables** → **Actions** (left sidebar)
4. **Click "New repository secret"**
5. **Add each secret above**

## ⚠️ Important Notes

- **Never commit these values to your repository**
- **Update `NEXT_PUBLIC_APP_URL`** with your actual Vercel domain after first deployment
- **Keep your Vercel token secure** - it has access to deploy to your account
- **The `.env.local` file is already in `.gitignore`** so it won't be committed

## 🔄 After Adding Secrets

1. **Push to main branch:**
   ```bash
   git add .
   git commit -m "Configure GitHub Actions deployment"
   git push origin main
   ```

2. **Check GitHub Actions:**
   - Go to **Actions** tab in your repository
   - Watch the deployment workflow run
   - Your site will be deployed to Vercel automatically

## 🌐 Your Vercel Project

- **Project ID**: `prj_sKaU7mev3zbuKz2ff0JO04AMcsWk`
- **Organization ID**: `N51crSgUNxULzbIrY513o41T`
- **Deployment URL**: Will be generated after first deployment

## 📧 MailerSend Setup

Your MailerSend is configured to send emails from:
- **From Email**: `no-reply@test-vz9dlem0yjq4kj50.mlsender.net`
- **API Key**: Configured and ready to use

## ✅ Next Steps

1. Add all secrets to GitHub
2. Push your code to trigger deployment
3. Check Vercel dashboard for your live site
4. Update `NEXT_PUBLIC_APP_URL` with your actual Vercel domain
5. Test the contact form functionality
