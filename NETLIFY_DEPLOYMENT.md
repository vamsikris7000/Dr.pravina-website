# 🚀 Netlify Deployment Guide for Path'o'Life

## Overview
This guide will help you deploy your Path'o'Life website to Netlify with full MongoDB integration and admin dashboard functionality.

## ✅ What's Been Set Up

### 1. **Netlify Configuration**
- `netlify.toml` - Main configuration file
- Proper redirects for SPA routing
- Function directory configuration

### 2. **Netlify Functions Created**
- `netlify/functions/api.js` - Main API handler (workshops, patients, appointments, messages)
- `netlify/functions/chatbot.js` - Dify chatbot integration
- `netlify/functions/auth.js` - Admin authentication
- `netlify/functions/voice-integration.js` - LiveKit voice call integration

### 3. **Dependencies**
- All required packages are in `package.json`
- Netlify functions have their own `package.json`

## 🔧 Deployment Steps

### Step 1: Connect to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login with your GitHub account
3. Click "New site from Git"
4. Choose your GitHub repository

### Step 2: Configure Build Settings
```
Build command: npm run build
Publish directory: dist
```

### Step 3: Set Environment Variables
In Netlify dashboard → Site settings → Environment variables:

```
MONGODB_URI=your_mongodb_atlas_connection_string
BACKEND_URL=your_backend_url_here
```

### Step 4: Deploy
1. Click "Deploy site"
2. Wait for build to complete
3. Your site will be live at `https://your-site-name.netlify.app`

## 🔗 API Endpoints

After deployment, your API endpoints will be:

- **Main API**: `https://your-site.netlify.app/.netlify/functions/api?path=workshops`
- **Chatbot**: `https://your-site.netlify.app/.netlify/functions/chatbot`
- **Auth**: `https://your-site.netlify.app/.netlify/functions/auth`
- **Voice**: `https://your-site.netlify.app/.netlify/functions/voice-integration?path=tokens/generate`

## 🎯 Key Benefits of Netlify

### ✅ **No Function Limits**
- Unlimited serverless functions (125K invocations/month free)
- No more Vercel function count errors

### ✅ **Better MongoDB Integration**
- Full Node.js environment
- Proper connection pooling
- Better error handling

### ✅ **Admin Dashboard**
- All data will be visible
- Full CRUD operations
- Real-time updates

### ✅ **Chatbot & Voice**
- Dify integration works perfectly
- LiveKit voice calls functional
- No CORS issues

## 🔍 Testing Your Deployment

### 1. **Test Admin Dashboard**
- Go to `https://your-site.netlify.app/admin`
- Login with: `your_admin_email` / `your_admin_password`
- Verify all data is loading

### 2. **Test Chatbot**
- Open the chat widget
- Send a message
- Verify responses are working

### 3. **Test Voice Calls**
- Click the "PHONE CALL" button
- Verify connection and audio

### 4. **Test Workshops**
- Go to `/workshops` page
- Verify all workshops are displayed
- Test "Coming Soon" vs "Live" status

## 🛠️ Troubleshooting

### Issue: Admin Dashboard Shows No Data
**Solution**: Check MongoDB connection string in environment variables

### Issue: Chatbot Not Responding
**Solution**: Verify Dify API key is correct in `netlify/functions/chatbot.js`

### Issue: Voice Calls Not Working
**Solution**: Check CloudFront URLs in `netlify/functions/voice-integration.js`

### Issue: Build Fails
**Solution**: Check Node.js version (should be 18+)

## 📞 Support

If you encounter any issues:
1. Check Netlify function logs in dashboard
2. Verify environment variables
3. Test API endpoints directly

## 🎉 Success!

Once deployed, your Path'o'Life website will have:
- ✅ Full admin dashboard functionality
- ✅ MongoDB integration working
- ✅ Chatbot responding properly
- ✅ Voice calls functional
- ✅ All workshops displaying correctly
- ✅ No function limit errors

Your website will be fully functional on Netlify! 🚀
