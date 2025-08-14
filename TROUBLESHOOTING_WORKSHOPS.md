# 🔧 Workshops API Troubleshooting Guide

## 🚨 Issue: "Failed to load workshops. Please check your connection and try again."

I've identified the main issue and created fixes. Here's what was wrong and how to fix it:

## 🔍 Root Cause

The problem was in the **API path construction**. The frontend was calling `/workshops` but the Netlify function expects the path to be passed as a query parameter.

**Before (Broken):**
```
https://patholife.in/.netlify/functions/workshops
```

**After (Fixed):**
```
https://patholife.in/.netlify/functions/api?path=workshops
```

## ✅ What I've Fixed

1. **Fixed API Path Construction** - Updated `src/services/api.js` to use correct query parameter format
2. **Created Debug Function** - `netlify/functions/debug-workshops.js` to help diagnose issues
3. **Created Debug Tool** - `debug-workshops.html` for easy testing
4. **Enhanced Error Handling** - Better error messages and logging

## 🚀 Step-by-Step Fix

### Step 1: Deploy the Fixes

```bash
git add .
git commit -m "Fix workshops API path construction and add debugging tools"
git push origin main
```

### Step 2: Use the Debug Tool

1. Open `debug-workshops.html` in your browser
2. Or visit: `https://patholife.in/debug-workshops.html` (after uploading)
3. Click through each test button to identify the issue

### Step 3: Manual Testing

#### Test 1: Environment Variables
```bash
curl https://patholife.in/.netlify/functions/test-env
```
Should show: `"status": "READY"`

#### Test 2: Debug Workshops
```bash
curl https://patholife.in/.netlify/functions/debug-workshops
```
This will show detailed information about what's wrong

#### Test 3: Populate Workshops
```bash
curl -X POST https://patholife.in/.netlify/functions/populate-workshops
```
Should return: `"message": "Workshops populated successfully"`

#### Test 4: Test API Call
```bash
curl https://patholife.in/.netlify/functions/api?path=workshops
```
Should return an array of workshops

## 🔍 Common Issues and Solutions

### Issue 1: "MONGODB_URI not configured"
**Solution**: 
- Double-check that `MONGODB_URI` is set in Netlify environment variables
- Make sure there are no extra spaces in the value
- Verify the connection string format

### Issue 2: "Database connection failed"
**Solution**: 
- Check MongoDB Atlas network access settings
- Verify the connection string is correct
- Make sure the database user has proper permissions

### Issue 3: "0 workshops in database"
**Solution**: 
- Run the populate function: `POST /populate-workshops`
- Check that the populate function completed successfully
- Verify the workshops were inserted

### Issue 4: "API path not found"
**Solution**: 
- The API path construction fix should resolve this
- Make sure you've deployed the latest changes
- Check that the query parameter format is correct

## 📊 Expected Results After Fix

### Environment Variables Test
```json
{
  "status": "READY",
  "missingCritical": [],
  "recommendations": "All critical variables are set correctly"
}
```

### Debug Workshops Test
```json
{
  "environment": {
    "hasMongoUri": true,
    "mongoUriLength": 123,
    "mongoUriStart": "mongodb+srv://mongo..."
  },
  "mongodb": {
    "status": "connected",
    "error": null,
    "workshopsCount": 6
  },
  "api": {
    "status": "success",
    "error": null
  }
}
```

### Workshops API Test
```json
[
  {
    "_id": "...",
    "title": "The Weight Reset for Women",
    "subtitle": "Not Just Weight Loss, A Full Body Reset",
    "audience": "For All Women 18+",
    "day": "Sunday",
    "date": "8th Aug",
    "time": "4:50 PM - 7:00 PM",
    "price": 499,
    "isActive": true,
    "status": "live"
  },
  // ... 5 more workshops
]
```

## 🎯 Success Indicators

After the fix:
- ✅ Workshops page loads without errors
- ✅ Admin panel shows "6 workshops available"
- ✅ No more "Failed to load workshops" error
- ✅ All workshop data comes from MongoDB
- ✅ Admin can manage workshops through the panel

## 🆘 If Still Having Issues

1. **Use the Debug Tool**: Open `debug-workshops.html` and run all tests
2. **Check Netlify Logs**: Look at function logs for specific error messages
3. **Verify Environment Variables**: Make sure all variables are set correctly
4. **Test Each Step**: Run the manual tests above to isolate the issue

## 📞 Next Steps

1. Deploy the fixes
2. Use the debug tool to test
3. Populate workshops if needed
4. Test the workshops page
5. Test the admin panel

The main fix was the API path construction. Once that's deployed, the workshops should load correctly from MongoDB.
