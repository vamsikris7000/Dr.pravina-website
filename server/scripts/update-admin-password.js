require('dotenv').config({ path: './config.env' });
const bcrypt = require('bcryptjs');

async function updateAdminPassword() {
  try {
    const newPassword = process.env.ADMIN_PASSWORD || 'your_new_password_here';
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    
    console.log('✅ Admin password updated successfully!');
    console.log('📧 Email:', process.env.ADMIN_EMAIL);
    console.log('🔑 New Password:', newPassword);
    console.log('🔒 Hashed Password:', hashedPassword);
    
    console.log('\n📝 To use this password, update your config.env file:');
    console.log('ADMIN_PASSWORD=' + newPassword);
    
  } catch (error) {
    console.error('❌ Error updating password:', error);
  }
}

updateAdminPassword();
