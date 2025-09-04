# 🚀 Deployment Checklist

Complete this checklist to deploy your portfolio website to Vercel using GitHub Actions.

## ✅ Pre-Deployment Setup

### 1. GitHub Repository
- [ ] Repository created on GitHub
- [ ] Code pushed to GitHub
- [ ] Repository is public or you have GitHub Actions enabled

### 2. Vercel Project
- [ ] Vercel account created
- [ ] New project created in Vercel
- [ ] GitHub repository connected to Vercel
- [ ] Project ID copied: `prj_sKaU7mev3zbuKz2ff0JO04AMcsWk`
- [ ] Organization ID copied: `N51crSgUNxULzbIrY513o41T`
- [ ] Vercel token created: `W91ySYtD0zskRExK6ET9i6oc`

### 3. Supabase Setup
- [ ] Supabase project created
- [ ] Database schema applied (`supabase/schema.sql`)
- [ ] RLS policies applied (`supabase/rls.sql`)
- [ ] Edge Function deployed (`supabase/functions/contact-form/`)

## 🔐 GitHub Secrets Configuration

Go to your GitHub repository → **Settings** → **Secrets and variables** → **Actions**

### Required Secrets
- [ ] `VERCEL_TOKEN` = `W91ySYtD0zskRExK6ET9i6oc`
- [ ] `VERCEL_ORG_ID` = `N51crSgUNxULzbIrY513o41T`
- [ ] `VERCEL_PROJECT_ID` = `prj_sKaU7mev3zbuKz2ff0JO04AMcsWk`
- [ ] `NEXT_PUBLIC_SUPABASE_URL` = `https://olpplvdnhzsembzphhl.supabase.co`
- [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY` = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9scHBsdmRuaHpzZW1ienB2aGhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY4NjY0MDQsImV4cCI6MjA3MjQ0MjQwNH0.O2iJwzHXwVuZ4-sWbmAGqwjlAQjqMu_ohF5Th2paVP0`
- [ ] `NEXT_PUBLIC_APP_NAME` = `hyybuu`

### Optional Secrets
- [ ] `MAILERSEND_API_KEY` = `mlsn.8350e37d880eb8989cf4420557f3ba1ccd6d850bfb117464107b6747e829b7c6`
- [ ] `MAILERSEND_FROM_EMAIL` = `no-reply@test-vz9dlem0yjq4kj50.mlsender.net`
- [ ] `CONTACT_EMAIL` = `no-reply@test-vz9dlem0yjq4kj50.mlsender.net`

## 🚀 Deploy to Production

### 1. Push Code
```bash
git add .
git commit -m "Configure GitHub Actions deployment"
git push origin main
```

### 2. Monitor Deployment
- [ ] Go to GitHub repository **Actions** tab
- [ ] Watch the "Deploy to Vercel" workflow run
- [ ] Check for any errors in the workflow logs
- [ ] Verify deployment completes successfully

### 3. Get Production URL
- [ ] Go to Vercel dashboard
- [ ] Copy your production URL (e.g., `https://your-project.vercel.app`)
- [ ] Update `NEXT_PUBLIC_APP_URL` in GitHub secrets with this URL

## 🔧 Post-Deployment Configuration

### 1. Update Environment Variables
- [ ] Update `NEXT_PUBLIC_APP_URL` in GitHub secrets with your actual Vercel domain
- [ ] Verify all environment variables are working in production

### 2. Test Functionality
- [ ] [ ] Landing page loads correctly
- [ ] [ ] Services page displays properly
- [ ] [ ] Contact form submits successfully
- [ ] [ ] Emails are received via MailerSend
- [ ] [ ] Responsive design works on mobile
- [ ] [ ] SEO metadata is correct

### 3. Performance Check
- [ ] [ ] Core Web Vitals are good
- [ ] [ ] Images are optimized
- [ ] [ ] Page load times are acceptable
- [ ] [ ] Lighthouse score is high

## 🌐 Custom Domain (Optional)

- [ ] Add custom domain in Vercel dashboard
- [ ] Configure DNS records
- [ ] Wait for SSL certificate
- [ ] Update `NEXT_PUBLIC_APP_URL` if needed

## 📊 Monitoring & Analytics

- [ ] Enable Vercel Analytics
- [ ] Set up error monitoring (optional)
- [ ] Monitor GitHub Actions for deployment status
- [ ] Check Vercel dashboard for performance metrics

## 🔒 Security Verification

- [ ] Environment variables are not exposed in client-side code
- [ ] Supabase RLS policies are working
- [ ] Contact form has rate limiting
- [ ] HTTPS is enabled
- [ ] Security headers are configured

## ✅ Final Verification

- [ ] Website is accessible at your Vercel domain
- [ ] All pages load without errors
- [ ] Contact form sends emails successfully
- [ ] GitHub Actions deploy automatically on push
- [ ] Performance meets your requirements
- [ ] SEO is properly configured

## 🆘 Troubleshooting

### Common Issues:
1. **Build fails**: Check GitHub Actions logs for errors
2. **Environment variables not found**: Verify all secrets are added to GitHub
3. **Vercel deployment fails**: Check Vercel token and project ID
4. **Contact form not working**: Verify Supabase Edge Function is deployed
5. **Emails not sending**: Check MailerSend API key and configuration

### Debug Steps:
1. Check GitHub Actions logs
2. Verify environment variables in Vercel dashboard
3. Test locally with `npm run build`
4. Check browser console for errors
5. Verify Supabase connection

## 🎉 Success!

Once all items are checked, your portfolio website is successfully deployed and will automatically update whenever you push to the main branch!

**Your live site will be at:** `https://your-project.vercel.app`
