require('dotenv').config({ path: './config.env' });
const mongoose = require('mongoose');
const Workshop = require('../models/Workshop');

async function updateWorkshopStatus() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Update all existing workshops to have 'live' status
    const result = await Workshop.updateMany(
      { status: { $exists: false } }, // Find workshops without status field
      { $set: { status: 'live' } } // Set status to 'live'
    );

    console.log(`✅ Updated ${result.modifiedCount} workshops with 'live' status`);

    // Verify the update
    const workshops = await Workshop.find({});
    console.log(`📊 Total workshops in database: ${workshops.length}`);
    
    workshops.forEach(workshop => {
      console.log(`- ${workshop.title}: ${workshop.status || 'no status'}`);
    });

    console.log('✅ Workshop status update completed successfully!');

  } catch (error) {
    console.error('❌ Error updating workshop status:', error);
  } finally {
    await mongoose.disconnect();
    console.log('🔌 Disconnected from MongoDB');
  }
}

updateWorkshopStatus();
