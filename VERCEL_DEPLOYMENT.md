# 🚀 Vercel Deployment Guide

## ✅ **Fixed Configuration**

Your project is now properly configured for Vercel deployment with:
- ✅ `@astrojs/vercel` adapter installed
- ✅ `vercel.json` configuration file
- ✅ Server-side rendering enabled
- ✅ API routes properly configured

## 🔧 **Environment Variables Setup**

In your Vercel dashboard, add these environment variables:

1. **Go to your Vercel project dashboard**
2. **Settings** → **Environment Variables**
3. **Add these variables:**

```
GMAIL_APP_PASSWORD=your-actual-app-password
GMAIL_USER=nikhilbajantri86@gmail.com
```

## 📝 **Steps to Deploy**

1. **Push your changes to GitHub:**
   ```bash
   git add .
   git commit -m "Fix Vercel deployment configuration"
   git push origin main
   ```

2. **In Vercel Dashboard:**
   - Connect your GitHub repository
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`

3. **Deploy!**

## 🎯 **What This Fixes**

- ✅ **404 Errors** - API routes now work properly
- ✅ **Email Functionality** - Contact form will work in production
- ✅ **Server-side Rendering** - All features work as expected

## 🔍 **If Still Getting 404 Errors**

1. **Check Vercel Functions tab** - Make sure API routes are deployed
2. **Check Environment Variables** - Ensure Gmail credentials are set
3. **Check Build Logs** - Look for any build errors

## 📞 **Contact Form Testing**

After deployment, test your contact form at:
`https://your-domain.vercel.app`

The form should now work without 404 errors!

## 🛠 **Troubleshooting**

If you still have issues:
1. **Clear Vercel cache** and redeploy
2. **Check function logs** in Vercel dashboard
3. **Verify environment variables** are set correctly
4. **Test locally** with `npm run dev` first
