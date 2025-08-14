import mongoose from 'mongoose';

// Workshop Schema
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
  status: {
    type: String,
    enum: ['live', 'coming-soon'],
    default: 'live'
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Workshop data matching the frontend
const workshopsData = [
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
    description: "Transform your relationship with weight through hormone-aware strategies.",
    isActive: true,
    order: 1,
    status: 'live'
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
    description: "Navigate PCOS with confidence through practical lifestyle strategies.",
    isActive: true,
    order: 2,
    status: 'live'
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
    description: "Prepare for pregnancy with evidence-based strategies for both partners.",
    isActive: true,
    order: 3,
    status: 'live'
  },
  {
    title: "Pregnancy Wellness Workshop",
    subtitle: "Feel Nourished, Calm & Connected",
    audience: "For Expecting Mothers (All Trimesters)",
    icon: "🤱🏻",
    day: "Wednesday",
    date: "20th Aug",
    time: "4:00 PM - 7:30 PM",
    price: 499,
    features: [
      "Pregnancy nutrition & meal planning",
      "Safe movement & exercise guidelines",
      "Stress management & mental wellness",
      "Sleep optimization & energy boosters",
      "Partner involvement & support strategies",
      "Birth preparation & postpartum planning"
    ],
    description: "Nurture yourself and your baby with comprehensive pregnancy wellness guidance.",
    isActive: true,
    order: 4,
    status: 'live'
  },
  {
    title: "Postpartum Recovery & Healing",
    subtitle: "Your Body, Your Recovery, Your Way",
    audience: "For New Mothers (0-12 months postpartum)",
    icon: "🍼",
    day: "Tuesday",
    date: "25th Aug",
    time: "3:30 PM - 7:00 PM",
    price: 499,
    features: [
      "Postpartum healing & recovery timeline",
      "Nutrition for healing & breastfeeding",
      "Pelvic floor & core restoration",
      "Mental health & emotional support",
      "Sleep strategies for new parents",
      "Return to exercise & movement safely"
    ],
    description: "Support your postpartum recovery with evidence-based healing strategies.",
    isActive: true,
    order: 5,
    status: 'live'
  },
  {
    title: "Parenting with Purpose",
    subtitle: "Raising Happy, Healthy Children",
    audience: "For Parents of Children 0-5 years",
    icon: "👨‍👩‍👧‍👦",
    day: "Monday",
    date: "30th Aug",
    time: "5:30 PM - 8:00 PM",
    price: 499,
    features: [
      "Child development milestones",
      "Nutrition for growing children",
      "Sleep training & routines",
      "Behavior management strategies",
      "Parental self-care & stress management",
      "Building strong family bonds"
    ],
    description: "Navigate the challenges of early parenting with confidence and purpose.",
    isActive: true,
    order: 6,
    status: 'live'
  }
];

export const handler = async function(event, context) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Check if MongoDB URI is available
    if (!process.env.MONGODB_URI) {
      console.error('MONGODB_URI environment variable not set');
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          error: 'Database configuration error',
          message: 'MongoDB URI not configured'
        })
      };
    }

    // Connect to MongoDB
    try {
      if (mongoose.connection.readyState !== 1) {
        console.log('Connecting to MongoDB...');
        await mongoose.connect(process.env.MONGODB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
      }
    } catch (dbError) {
      console.error('MongoDB connection error:', dbError);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          error: 'Database connection failed',
          message: dbError.message
        })
      };
    }

    // Create Workshop model
    let Workshop;
    try {
      Workshop = mongoose.model('Workshop');
    } catch {
      Workshop = mongoose.model('Workshop', workshopSchema);
    }

    // Clear existing workshops
    await Workshop.deleteMany({});
    console.log('Cleared existing workshops');
    
    // Insert new workshops
    const workshops = await Workshop.insertMany(workshopsData);
    console.log(`Successfully inserted ${workshops.length} workshops`);
    
    // Display inserted workshops
    const workshopList = workshops.map((workshop, index) => ({
      id: index + 1,
      title: workshop.title,
      day: workshop.day,
      time: workshop.time,
      status: workshop.status
    }));

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        message: 'Workshops populated successfully',
        count: workshops.length,
        workshops: workshopList
      })
    };

  } catch (error) {
    console.error('Error populating workshops:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Failed to populate workshops',
        message: error.message
      })
    };
  }
};
