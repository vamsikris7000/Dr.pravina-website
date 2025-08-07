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
  price: { type: Number, required: true, default: 999 },
  features: { type: [String], default: [] },
  description: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  order: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Workshop = mongoose.model('Workshop', workshopSchema, 'workshops');

// Workshop data
const workshopsData = [
  {
    title: "Weight Reset & Hormonal Balance",
    subtitle: "Not Just Weight Loss, A Full Body Reset",
    audience: "For All Women 18+",
    icon: "👤",
    day: "Sunday",
    date: "8th Aug",
    time: "4:50 PM - 7:00 PM",
    price: 999,
    features: [
      "Hormonal balance assessment",
      "Personalized weight management plan",
      "Nutrition guidance",
      "Lifestyle modification strategies"
    ],
    description: "A comprehensive program focusing on hormonal balance and sustainable weight management for women.",
    order: 1
  },
  {
    title: "PCOS Unplugged",
    subtitle: "Your Hormones, Hair, Skin & Sanity",
    audience: "For Teens & Young Women",
    icon: "🌸",
    day: "Saturday",
    date: "10th Aug",
    time: "3:00 PM - 6:30 PM",
    price: 999,
    features: [
      "PCOS symptom management",
      "Hormonal regulation strategies",
      "Skin and hair care guidance",
      "Mental health support"
    ],
    description: "Specialized workshop for managing PCOS symptoms and improving overall well-being.",
    order: 2
  },
  {
    title: "Pregnancy Prep & Fertility",
    subtitle: "Optimize Your Body for Conception",
    audience: "For Women Planning Pregnancy",
    icon: "🤱",
    day: "Friday",
    date: "15th Aug",
    time: "5:00 PM - 8:30 PM",
    price: 999,
    features: [
      "Fertility optimization",
      "Pre-pregnancy health assessment",
      "Nutrition for conception",
      "Lifestyle preparation"
    ],
    description: "Comprehensive preparation for pregnancy with focus on fertility optimization.",
    order: 3
  },
  {
    title: "Postpartum Recovery",
    subtitle: "Heal Your Body, Nourish Your Soul",
    audience: "For New Mothers",
    icon: "🍼",
    day: "Wednesday",
    date: "20th Aug",
    time: "6:00 PM - 9:30 PM",
    price: 999,
    features: [
      "Postpartum healing guidance",
      "Nutrition for recovery",
      "Mental health support",
      "Self-care strategies"
    ],
    description: "Supporting new mothers through postpartum recovery and adjustment.",
    order: 4
  }
];

async function populateWorkshops() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log('Connected to MongoDB Atlas');
    
    // Clear existing workshops
    await Workshop.deleteMany({});
    console.log('Cleared existing workshops');
    
    // Insert new workshops
    const workshops = await Workshop.insertMany(workshopsData);
    console.log(`Successfully inserted ${workshops.length} workshops`);
    
    // Display inserted workshops
    workshops.forEach((workshop, index) => {
      console.log(`${index + 1}. ${workshop.title} - ${workshop.day} ${workshop.time}`);
    });
    
    console.log('Workshop population completed successfully!');
    
  } catch (error) {
    console.error('Error populating workshops:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

// Run the script
populateWorkshops(); 