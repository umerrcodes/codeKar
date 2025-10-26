# 🚀 Vercel Environment Variables Setup

## ⚠️ Your Build is Failing Because Vercel Doesn't Have Your Environment Variables

Even though your `.env` file works locally, **Vercel cannot access it**. You need to manually add these variables to your Vercel project.

---

## 📋 Your Environment Variables (Copy These)

Add these **exact values** to Vercel:

### 1. NEXT_PUBLIC_SUPABASE_URL
```
https://djfmhaoquroutbjsdsmd.supabase.co
```

### 2. NEXT_PUBLIC_SUPABASE_ANON_KEY
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqZm1oYW9xdXJvdXRianNkc21kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE0ODk3NTUsImV4cCI6MjA3NzA2NTc1NX0.qRJJNSfSfkZSasmjm3l-xI4Zy60ey1qB1IM8T77FfrI
```

### 3. SUPABASE_SERVICE_ROLE_KEY
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqZm1oYW9xdXJvdXRianNkc21kIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MTQ4OTc1NSwiZXhwIjoyMDc3MDY1NzU1fQ.U7M4_W15sZe-4NIs3sNYTtRHexInI300S16mJqHeMyo
```

---

## 🎯 How to Add Them to Vercel

### Step 1: Go to Your Vercel Project
1. Visit: https://vercel.com/dashboard
2. Click on your **"code-kar"** project

### Step 2: Navigate to Environment Variables
1. Click the **"Settings"** tab (top navigation)
2. Click **"Environment Variables"** (left sidebar)

### Step 3: Add Each Variable
For **EACH** of the 3 variables above:

1. Click **"Add New"** button
2. **Name**: Copy the name exactly (e.g., `NEXT_PUBLIC_SUPABASE_URL`)
3. **Value**: Copy the long value from above
4. **Environment**: Check ALL three boxes:
   - ✅ Production
   - ✅ Preview  
   - ✅ Development
5. Click **"Save"**

**Repeat for all 3 variables!**

### Step 4: Redeploy
After adding all 3 variables:

1. Go to the **"Deployments"** tab
2. Find your latest (failed) deployment
3. Click the **"..."** menu (three dots)
4. Click **"Redeploy"**

OR simply push any small change to GitHub (it will auto-deploy)

---

## ✅ Quick Checklist

Before redeploying, verify:

- [ ] Added `NEXT_PUBLIC_SUPABASE_URL` to Vercel
- [ ] Added `NEXT_PUBLIC_SUPABASE_ANON_KEY` to Vercel
- [ ] Added `SUPABASE_SERVICE_ROLE_KEY` to Vercel
- [ ] All 3 variables have **Production**, **Preview**, AND **Development** checked
- [ ] Clicked "Save" for each variable

---

## 🎉 After Setup

Once variables are added and you redeploy:

1. Build should complete successfully ✅
2. Your registration forms will work on production
3. Data will be saved to your Supabase database

---

## 🆘 Still Having Issues?

If it still fails:
1. Double-check all 3 variable names are **exact** (case-sensitive!)
2. Make sure values are complete (no missing characters)
3. Verify all 3 environments are checked
4. Wait 30 seconds after saving, then redeploy

---

**Need help?** Check the Vercel docs: https://vercel.com/docs/environment-variables

