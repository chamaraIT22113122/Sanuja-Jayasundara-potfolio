# Hostinger Deployment Guide

## Automatic Deployment from GitHub to Hostinger

### Prerequisites
- GitHub repository
- Hostinger hosting account
- FTP credentials from Hostinger

---

## Step 1: Get Your Hostinger FTP Credentials

1. Login to Hostinger hPanel
2. Go to **Files** → **FTP Accounts**
3. Note down or create FTP credentials:
   - **FTP Server/Host**: Usually `ftp.yourdomain.com` or an IP address
   - **FTP Username**: Your FTP username
   - **FTP Password**: Your FTP password
   - **Port**: Usually 21 (or 22 for SFTP)

---

## Step 2: Add Secrets to GitHub Repository

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add these three secrets:

   **Secret 1:**
   - Name: `FTP_SERVER`
   - Value: Your FTP server (e.g., `ftp.yourdomain.com`)

   **Secret 2:**
   - Name: `FTP_USERNAME`
   - Value: Your FTP username

   **Secret 3:**
   - Name: `FTP_PASSWORD`
   - Value: Your FTP password

---

## Step 3: Push the Workflow File

The workflow file has been created at `.github/workflows/deploy.yml`

Push this to your GitHub repository:

```bash
git add .
git commit -m "Add GitHub Actions workflow for Hostinger deployment"
git push origin main
```

---

## Step 4: Automatic Deployment

Now, every time you push to the `main` branch:
1. GitHub Actions will automatically run
2. Install dependencies
3. Build your project
4. Deploy the `dist` folder to Hostinger's `public_html`

---

## Manual Deployment Option

If you prefer manual deployment:

1. **Build the project locally:**
   ```bash
   npm run build
   ```

2. **Upload via FTP:**
   - Use FileZilla or any FTP client
   - Connect to your Hostinger FTP
   - Upload all files from the `dist` folder to `public_html`
   - Make sure `.htaccess` is uploaded too

3. **Verify deployment:**
   - Visit your domain
   - Check if all routes work correctly

---

## Important Notes

1. **First deployment**: Upload the `.htaccess` file to enable React Router
2. **Branch name**: If your main branch is `master` instead of `main`, update the workflow file
3. **Server directory**: If your site is in a subdirectory (not `public_html`), update `server-dir` in the workflow
4. **Check deployment**: Go to **Actions** tab in GitHub to see deployment progress
5. **Deployment time**: Usually takes 2-5 minutes depending on project size

---

## Troubleshooting

### Routes not working (404 errors)
- Ensure `.htaccess` file is uploaded to `public_html`
- Check that mod_rewrite is enabled in Hostinger

### Deployment fails
- Verify FTP credentials in GitHub Secrets
- Check FTP server address (sometimes it's an IP instead of domain)
- Ensure FTP account has write permissions

### White screen after deployment
- Check browser console for errors
- Verify the `base` path in `vite.config.js` is set to `/`
- Clear browser cache and hard reload (Ctrl+Shift+R)

### Images or assets not loading
- Check file paths are correct and case-sensitive
- Ensure all assets are in the `dist` folder after build
- Verify upload completed successfully

---

## Alternative: Using Hostinger Git Integration

Some Hostinger plans support Git integration:

1. Go to hPanel → **Advanced** → **Git**
2. Connect your GitHub repository
3. Set branch to deploy (usually `main`)
4. Set deployment directory to `public_html`
5. Add build commands:
   ```
   npm ci
   npm run build
   cp -r dist/* public_html/
   ```

---

## Testing Your Deployment

After deployment, test:
- [ ] Home page loads
- [ ] All navigation links work
- [ ] Images and assets load correctly
- [ ] Contact form works (if applicable)
- [ ] Responsive design on mobile
- [ ] No console errors in browser DevTools

---

## Monitoring Deployments

- View deployment logs in GitHub Actions tab
- Check for any build or deployment errors
- Monitor your Hostinger bandwidth and storage usage

---

For support:
- GitHub Actions Documentation: https://docs.github.com/en/actions
- Hostinger Support: https://support.hostinger.com
