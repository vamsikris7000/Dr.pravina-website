export default async function handler(req, res) {
  try {
    // Return fallback workshop data for production
    const fallbackWorkshops = [
      {
        _id: "1",
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
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        _id: "2",
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
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        _id: "3",
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
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        _id: "4",
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
          "Sleep optimization & comfort tips",
          "Partner support & relationship dynamics",
          "Birth preparation & postpartum planning"
        ],
        description: "Nurture yourself and your baby through every trimester with confidence.",
        isActive: true,
        order: 4,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        _id: "5",
        title: "Postpartum Recovery & Beyond",
        subtitle: "Heal, Nourish & Thrive",
        audience: "For New Mothers (0-12 months postpartum)",
        icon: "👶🏻",
        day: "Tuesday",
        date: "25th Aug",
        time: "3:30 PM - 7:00 PM",
        price: 499,
        features: [
          "Postpartum healing & recovery timeline",
          "Nutrition for healing & breastfeeding",
          "Sleep training & baby care basics",
          "Mental health & emotional support",
          "Pelvic floor & core restoration",
          "Return to exercise & self-care"
        ],
        description: "Navigate the postpartum journey with strength and support.",
        isActive: true,
        order: 5,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        _id: "6",
        title: "Parenting with Purpose",
        subtitle: "Raising Confident, Happy Children",
        audience: "For Parents of Children 0-12 years",
        icon: "👨‍👩‍👧‍👦",
        day: "Monday",
        date: "30th Aug",
        time: "4:30 PM - 8:00 PM",
        price: 499,
        features: [
          "Child development milestones & expectations",
          "Positive discipline & behavior management",
          "Nutrition for growing children",
          "Screen time & digital wellness",
          "Family communication & bonding",
          "Self-care for parents & work-life balance"
        ],
        description: "Build a strong foundation for your family's health and happiness.",
        isActive: true,
        order: 6,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    ];
    
    res.status(200).json(fallbackWorkshops);
  } catch (error) {
    console.error('Workshops API error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
