# 🚨 QUICK FIX: Email Not Working

## Step 1: Generate New Gmail App Password

1. **Go to Google Account Settings**: https://myaccount.google.com/
2. **Security** → **2-Step Verification** → **App passwords**
3. **Generate new app password** for "Mail"
4. **Copy the 16-character password** (e.g., `abcd efgh ijkl mnop`)

## Step 2: Update Your Code

Replace the current password in these files:
- `src/pages/api/contact.ts` (line ~40)
- `src/pages/api/mail.ts` (line ~40)
- `src/pages/api/test-email.ts` (line ~15)

**Change this:**
```typescript
pass: 'ivzn dgjc qfsl uyka'
```

**To your new password:**
```typescript
pass: 'your-new-app-password-here'
```

## Step 3: Test the Configuration

1. **Visit**: http://localhost:4321/api/test-email
2. **Check which configurations work**
3. **Look for SUCCESS messages**

## Step 4: Alternative Solutions

If Gmail still doesn't work, try these:

### Option A: Use Formspree (Easiest)
1. Go to https://formspree.io/
2. Create free account
3. Get your form endpoint
4. Replace the form action with Formspree URL

### Option B: Use SendGrid
1. Sign up at https://sendgrid.com/
2. Get API key
3. Use SendGrid instead of Gmail

### Option C: Use Netlify Forms
If hosting on Netlify, add `data-netlify="true"` to your form.

## Common Issues:

❌ **"Invalid login"** → App password is wrong/expired  
❌ **"Network error"** → Check internet connection  
❌ **"All configurations failed"** → Gmail settings issue  

## Need Immediate Fix?

Use Formspree - it's the fastest solution:
1. Sign up at formspree.io
2. Get your endpoint (e.g., `https://formspree.io/f/xayzabcd`)
3. Change your form to use Formspree instead

This will work immediately without any email configuration issues!
