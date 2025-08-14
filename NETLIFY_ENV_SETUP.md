# Netlify Environment Variables Setup Guide

## 🚨 CRITICAL: Production Login Issue Fix

Your admin login is failing in production because the environment variables are not set correctly in Netlify. Follow these steps to fix it:

## 📋 Required Environment Variables

You need to set these **exact** environment variables in your Netlify dashboard:

### 🔐 Admin Authentication
```
ADMIN_EMAIL=drpravina.patholife@gmail.com
ADMIN_PASSWORD=pravina@1998
JWT_SECRET=patholife_admin_secret_key_2025
```

### 🗄️ MongoDB Connection
```
MONGODB_URI=mongodb+srv://mongo_access:3gfaAKMQsCwEjIXG@cluster0.4os5zqa.mongodb.net/drs_db?retryWrites=true&w=majority&appName=Cluster0
```

### 🤖 API Keys
```
DIFY_API_BASE_URL=https://d22yt2oewbcglh.cloudfront.net/v1
DIFY_API_KEY=app-SjuVYGo01iqolHNI7nKIsG4t
VOICE_API_BASE_URL=https://d1fs86umxjjz67.cloudfront.net
VOICE_API_KEY=xpectrum-ai@123
```

### 🎨 Frontend Variables
```
VITE_DIFY_API_BASE_URL=https://d22yt2oewbcglh.cloudfront.net/v1
VITE_DIFY_API_KEY=app-SjuVYGo01iqolHNI7nKIsG4t
VITE_VOICE_API_BASE_URL=https://d1fs86umxjjz67.cloudfront.net
VITE_VOICE_API_KEY=xpectrum-ai@123
```

## 🛠️ How to Set Environment Variables in Netlify

### Step 1: Access Netlify Dashboard
1. Go to [netlify.com](https://netlify.com)
2. Sign in to your account
3. Find your `patholife` project

### Step 2: Navigate to Environment Variables
1. Click on your project
2. Go to **Site settings** (gear icon)
3. Click **Environment variables** in the left sidebar

### Step 3: Add Each Variable
1. Click **Add a variable**
2. Enter the **Key** (e.g., `ADMIN_EMAIL`)
3. Enter the **Value** (e.g., `drpravina.patholife@gmail.com`)
4. Click **Save**
5. Repeat for all variables listed above

### Step 4: Redeploy
1. Go to **Deploys** tab
2. Click **Trigger deploy** → **Deploy site**
3. Wait for deployment to complete

## 🔍 Verification Steps

### Test Admin Login
1. Go to `https://patholife.in/admin`
2. Login with:
   - Email: `drpravina.patholife@gmail.com`
   - Password: `pravina@1998`
3. Should work without "Login failed" error

### Check Netlify Function Logs
1. Go to **Functions** tab in Netlify
2. Click on **auth** function
3. Check logs for any errors

## 🚨 Common Issues

### Issue 1: "Login failed" still appears
- **Solution**: Double-check that `ADMIN_EMAIL` and `ADMIN_PASSWORD` are set correctly
- **Check**: No extra spaces, correct email format

### Issue 2: "Server configuration error"
- **Solution**: Ensure `JWT_SECRET` is set
- **Check**: All three auth variables are present

### Issue 3: Environment variables not loading
- **Solution**: Redeploy after setting variables
- **Check**: Variables are saved and deployment completed

## 📞 Support

If you still have issues after following these steps:
1. Check Netlify function logs for specific error messages
2. Verify all environment variables are set correctly
3. Ensure deployment completed successfully

## ✅ Success Indicators

- ✅ Admin login works at `patholife.in/admin`
- ✅ No "Login failed" errors
- ✅ Admin dashboard loads with data
- ✅ All CRUD operations work in production
