require('dotenv').config({ path: './config.env' });
const mongoose = require('mongoose');
const Workshop = require('../models/Workshop');

async function testWorkshopStatus() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Get all workshops
    const workshops = await Workshop.find({});
    console.log(`📊 Total workshops in database: ${workshops.length}`);
    
    console.log('\n📋 Current workshop statuses:');
    workshops.forEach(workshop => {
      console.log(`- ${workshop.title}: ${workshop.status || 'no status'}`);
    });

    // Test updating a workshop status
    if (workshops.length > 0) {
      const firstWorkshop = workshops[0];
      console.log(`\n🔄 Testing status update for: ${firstWorkshop.title}`);
      
      const newStatus = firstWorkshop.status === 'live' ? 'coming-soon' : 'live';
      const updatedWorkshop = await Workshop.findByIdAndUpdate(
        firstWorkshop._id,
        { status: newStatus },
        { new: true }
      );
      
      console.log(`✅ Updated status to: ${updatedWorkshop.status}`);
      
      // Test filtering by status
      const liveWorkshops = await Workshop.find({ status: 'live' });
      const comingSoonWorkshops = await Workshop.find({ status: 'coming-soon' });
      
      console.log(`\n📈 Live workshops: ${liveWorkshops.length}`);
      console.log(`📈 Coming soon workshops: ${comingSoonWorkshops.length}`);
    }

    console.log('\n✅ Workshop status test completed successfully!');

  } catch (error) {
    console.error('❌ Error testing workshop status:', error);
  } finally {
    await mongoose.disconnect();
    console.log('🔌 Disconnected from MongoDB');
  }
}

testWorkshopStatus();
