// Test script to populate workshops in MongoDB
// Run this after setting environment variables in Netlify

const testPopulateWorkshops = async () => {
  try {
    console.log('Testing workshop population...');
    
    // Replace with your actual Netlify domain
    const domain = 'patholife.in'; // or your netlify.app domain
    
    const response = await fetch(`https://${domain}/.netlify/functions/populate-workshops`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    
    const result = await response.json();
    
    if (response.ok) {
      console.log('✅ Workshops populated successfully!');
      console.log('Result:', result);
      console.log(`📊 ${result.count} workshops added to database`);
      console.log('Workshops:', result.workshops);
    } else {
      console.error('❌ Failed to populate workshops');
      console.error('Error:', result);
    }
  } catch (error) {
    console.error('❌ Network error:', error.message);
  }
};

const testEnvironmentVariables = async () => {
  try {
    console.log('Testing environment variables...');
    
    // Replace with your actual Netlify domain
    const domain = 'patholife.in'; // or your netlify.app domain
    
    const response = await fetch(`https://${domain}/.netlify/functions/test-env`);
    const result = await response.json();
    
    if (response.ok) {
      console.log('✅ Environment variables check:');
      console.log('Status:', result.status);
      console.log('Missing critical variables:', result.missingCritical);
      console.log('Recommendations:', result.recommendations);
    } else {
      console.error('❌ Failed to check environment variables');
      console.error('Error:', result);
    }
  } catch (error) {
    console.error('❌ Network error:', error.message);
  }
};

// Run tests
console.log('🔧 Testing MongoDB Connection and Workshop Population');
console.log('==================================================');

// Test 1: Check environment variables
await testEnvironmentVariables();

console.log('\n');

// Test 2: Populate workshops
await testPopulateWorkshops();

console.log('\n');
console.log('🎯 Next Steps:');
console.log('1. Check your admin panel at https://patholife.in/admin');
console.log('2. Verify workshops page at https://patholife.in/workshops');
console.log('3. Look for "6 workshops available" in admin panel');
