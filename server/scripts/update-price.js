const mongoose = require('mongoose');
require('dotenv').config({ path: './config.env' });

// Workshop Schema (same as in Workshop.js)
const workshopSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  audience: { type: String, required: true },
  icon: { type: String, required: true },
  day: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  price: { type: Number, required: true, default: 499 },
  features: { type: [String], default: [] },
  description: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  order: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Workshop = mongoose.model('Workshop', workshopSchema, 'workshops');

async function updatePrices() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log('Connected to MongoDB Atlas');
    
    // Update all workshop prices to 499
    const result = await Workshop.updateMany(
      {}, 
      { price: 499, updatedAt: Date.now() }
    );
    
    console.log(`Successfully updated ${result.modifiedCount} workshops to price ₹499`);
    
    // Display updated workshops
    const workshops = await Workshop.find().sort({ order: 1 });
    workshops.forEach((workshop, index) => {
      console.log(`${index + 1}. ${workshop.title} - ₹${workshop.price}`);
    });
    
    console.log('Price update completed successfully!');
    
  } catch (error) {
    console.error('Error updating prices:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

// Run the script
updatePrices(); 