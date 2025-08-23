# 🚀 Vercel Deployment Guide

## ✅ **Fixed Configuration**

Your project is now properly configured for Vercel deployment with:
- ✅ `@astrojs/vercel` adapter installed
- ✅ `vercel.json` configuration file
- ✅ Server-side rendering enabled
- ✅ API routes properly configured
- ✅ Environment variables support

## 🔧 **CRITICAL: Environment Variables Setup**

**This is required to fix the serverless function crash!**

In your Vercel dashboard, add these environment variables:

1. **Go to your Vercel project dashboard**
2. **Settings** → **Environment Variables**
3. **Add these variables:**

```
GMAIL_APP_PASSWORD=ivzn dgjc qfsl uyka
GMAIL_USER=nikhilbajantri86@gmail.com
```

**⚠️ Important:** 
- Use your actual Gmail App Password (the one that was working locally)
- Make sure there are no extra spaces
- The password should be exactly 16 characters

## 📝 **Steps to Deploy**

1. **Push your changes to GitHub:**
   ```bash
   git add .
   git commit -m "Fix serverless function crash - Use environment variables"
   git push origin main
   ```

2. **In Vercel Dashboard:**
   - Connect your GitHub repository
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`

3. **Set Environment Variables** (see above)
4. **Deploy!**

## 🎯 **What This Fixes**

- ✅ **Serverless Function Crash** - Environment variables now used
- ✅ **404 Errors** - API routes now work properly
- ✅ **Email Functionality** - Contact form will work in production
- ✅ **Server-side Rendering** - All features work as expected

## 🔍 **If Still Getting Function Crashes**

1. **Check Environment Variables** in Vercel dashboard:
   - Make sure `GMAIL_APP_PASSWORD` is set correctly
   - Make sure `GMAIL_USER` is set correctly
   - No extra spaces or quotes

2. **Check Vercel Function Logs**:
   - Go to Functions tab in Vercel dashboard
   - Look for error messages
   - Check if environment variables are loaded

3. **Test Environment Variables**:
   - Visit `/api/test-email` to test configuration
   - Should show "GMAIL_APP_PASSWORD environment variable is not set" if not configured

## 📞 **Contact Form Testing**

After deployment and environment variables setup, test your contact form at:
`https://your-domain.vercel.app`

The form should now work without crashes!

## 🛠 **Troubleshooting**

If you still have issues:
1. **Clear Vercel cache** and redeploy
2. **Check function logs** in Vercel dashboard
3. **Verify environment variables** are set correctly
4. **Test locally** with `npm run dev` first
5. **Check Gmail App Password** - make sure it's still valid

## 🔐 **Security Note**

- Environment variables are encrypted in Vercel
- Your Gmail password is not exposed in the code
- Only you can see the environment variables in your dashboard
