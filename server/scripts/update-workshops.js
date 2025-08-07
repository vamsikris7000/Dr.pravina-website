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

// Updated workshop data
const updatedWorkshopsData = [
  {
    title: "The Weight Reset for Women",
    subtitle: "Not Just Weight Loss, A Full Body Reset",
    audience: "For All Women 18+",
    icon: "👩🏻‍⚕️",
             day: "Sunday",
         date: "8th Aug",
         time: "4:50 PM - 7:00 PM",
         price: 499,
    features: [
      "Understand your hormones & weight connection",
      "Tackle belly fat, cravings & low energy",
      "Anti-inflammatory nutrition made practical",
      "Smart movement & strength strategies",
      "Stress, sleep & metabolism mastery",
      "Build habits that last, not bounce back"
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
         price: 499,
    features: [
      "Decode your hormones & cycle",
      "Period problems & PCOS types",
      "Skin, hair, mood & weight tips",
      "Menstrual cup basics & hygiene",
      "PCOS-friendly food & movement",
      "Cycle syncing & stress hacks"
    ],
    description: "Specialized workshop for managing PCOS symptoms and improving overall well-being.",
    order: 2
  },
  {
    title: "Pre-Pregnancy Power Couple",
    subtitle: "Plan Parenthood with Purpose",
    audience: "For Couples Planning Pregnancy",
    icon: "👫🏻",
             day: "Friday",
         date: "15th Aug",
         time: "5:00 PM - 8:30 PM",
         price: 499,
    features: [
      "Fertility nutrition for both partners",
      "Cycle tracking & fertile window basics",
      "Lifestyle shifts to boost conception",
      "Detox, stress & sleep prep",
      "Emotional alignment & partner mindset",
      "Myths vs science of getting pregnant"
    ],
    description: "Comprehensive preparation for pregnancy with focus on fertility optimization.",
    order: 3
  },
  {
    title: "Pregnancy Wellness Workshop",
    subtitle: "Feel Nourished, Calm & Connected",
    audience: "For Expecting Mothers (All Trimesters)",
    icon: "🤰🏻",
             day: "Wednesday",
         date: "20th Aug",
         time: "6:00 PM - 9:30 PM",
         price: 499,
    features: [
      "Trimester-wise nutrition & cravings",
      "Safe movement & breathing practices",
      "Sleep, stress & mental wellness",
      "Gut health & immunity boosters",
      "Indian wisdom meets modern care",
      "Rituals for bonding & body trust"
    ],
    description: "Supporting expecting mothers through pregnancy wellness and preparation.",
    order: 4
  },
  {
    title: "Confident Breastfeeding & Postpartum Healing",
    subtitle: "Nurture Your Baby. Reclaim Your Body.",
    audience: "For New & Expecting Moms",
    icon: "🤱🏻",
             day: "Tuesday",
         date: "25th Aug",
         time: "5:30 PM - 9:00 PM",
         price: 499,
    features: [
      "Lactation techniques & myths",
      "Latch, supply, positions & pumping",
      "Recovery after birth for body, mind, sleep",
      "Postpartum nutrition & emotional support",
      "Indian rituals & modern healing practices",
      "Space for real talk, not just survival"
    ],
    description: "Supporting new mothers through postpartum recovery and breastfeeding.",
    order: 5
  },
  {
    title: "First Foods & Beyond",
    subtitle: "Foundations of Child Nutrition & Lifestyle",
    audience: "For Moms with Children (6 Months to 5 Years)",
    icon: "🍲",
             day: "Thursday",
         date: "30th Aug",
         time: "4:00 PM - 7:30 PM",
         price: 499,
    features: [
      "When & how to start solids",
      "Daily feeding plans & schedules",
      "Immunity-boosting foods & habits",
      "Gut health, picky eating & meal battles",
      "Holistic child lifestyle routines (food, sleep, screen, play)",
      "Indian food wisdom with modern evidence"
    ],
    description: "Learn essential strategies for nurturing healthy and happy children through proper nutrition and effective parenting techniques.",
    order: 6
  }
];

async function updateWorkshops() {
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
    
    // Insert updated workshops
    const workshops = await Workshop.insertMany(updatedWorkshopsData);
    console.log(`Successfully updated ${workshops.length} workshops`);
    
    // Display updated workshops
    workshops.forEach((workshop, index) => {
      console.log(`${index + 1}. ${workshop.title} - ${workshop.day} ${workshop.time}`);
      console.log(`   Features: ${workshop.features.length} items`);
    });
    
    console.log('Workshop update completed successfully!');
    
  } catch (error) {
    console.error('Error updating workshops:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

// Run the script
updateWorkshops(); 