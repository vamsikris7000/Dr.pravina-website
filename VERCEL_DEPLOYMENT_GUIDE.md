# Netlify Deployment Guide for Path'o'Life

## 🚀 Frontend Deployment (This Repository)

### 1. **Deploy to Netlify**
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

### 2. **Environment Variables**
Set these in your Netlify dashboard:
```
VITE_API_URL=/.netlify/functions
```

### 3. **Build Settings**
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Install Command**: `npm install`

## 🔧 Backend Functions (Netlify Functions)

### 1. **Functions Structure**
Your backend functions are already in the `netlify/functions/` directory:
```
netlify/
├── functions/
│   ├── api.js
│   ├── auth.js
│   ├── chatbot.js
│   ├── populate-workshops.js
│   └── voice-integration.js
```

### 2. **Function Configuration**
Functions are automatically deployed with your frontend. No separate deployment needed.

### 3. **Environment Variables**
Set these in your Netlify dashboard:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=production
```

## 📋 Deployment Checklist

### ✅ Frontend (This Repo)
- [ ] Update API URLs to point to backend
- [ ] Set environment variables in Vercel
- [ ] Deploy to Vercel
- [ ] Test all forms and functionality

### ✅ Backend Functions
- [ ] Verify functions in `netlify/functions/` directory
- [ ] Set up MongoDB connection
- [ ] Configure environment variables
- [ ] Functions deploy automatically with frontend
- [ ] Test API endpoints

### ✅ Post-Deployment
- [ ] Test workshop registrations
- [ ] Test consultation bookings
- [ ] Test lifestyle plan purchases
- [ ] Verify admin dashboard functionality
- [ ] Check payment integrations

## 🔗 Important URLs

### Frontend
- **Production**: `https://patholife.netlify.app`
- **Preview**: `https://patholife-git-main.netlify.app`

### Backend Functions
- **API Base**: `https://patholife.netlify.app/.netlify/functions`
- **Auth**: `https://patholife.netlify.app/.netlify/functions/auth`

## 🛠️ Troubleshooting

### Common Issues:
1. **CORS Errors**: Ensure functions allow frontend domain
2. **API 404**: Check netlify.toml configuration
3. **Environment Variables**: Verify all variables are set in Netlify dashboard
4. **MongoDB Connection**: Ensure connection string is correct

### Debug Commands:
```bash
# Check build logs
netlify logs

# Check environment variables
netlify env:list

# Redeploy with debug
netlify deploy --debug
```

## 📞 Support
If you encounter issues:
1. Check Netlify deployment logs
2. Verify environment variables
3. Test API endpoints directly
4. Check MongoDB connection
