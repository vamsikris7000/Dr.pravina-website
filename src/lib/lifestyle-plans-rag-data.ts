// RAG Training Data for Path'o'Life Lifestyle Plans
// This data helps the chatbot provide accurate responses about lifestyle plan registration

export const lifestylePlansRAGData = {
  plans: [
    {
      name: "Wellness Reset",
      fullName: "Wellness Reset",
      subtitle: "Quick direction, gentle guidance, or mild symptoms",
      duration: "1 Month",
      originalPrice: "₹9999",
      discountedPrice: "₹4999",
      targetAudience: "Best for Quick direction, gentle guidance, or mild symptoms",
      features: [
        "2 sessions with Dr. Pravina (start + follow-up)",
        "Lifestyle action plan (food, sleep, movement, stress)",
        "WhatsApp support (1/week check-in)",
        "PDF guides or worksheets tailored to concern",
        "Option to upgrade to a longer plan"
      ],
      registrationInfo: {
        process: "Register online through our website",
        payment: "Pay securely via UPI and upload payment screenshot to confirm enrollment",
        includes: [
          "2 sessions with Dr. Pravina",
          "Personalized lifestyle action plan",
          "Weekly WhatsApp support",
          "Customized PDF guides",
          "Option to upgrade to longer plans"
        ]
      },
      chatbotResponses: {
        registration: "Thank you for your interest in the Wellness Reset plan! This 1-month program is perfect for those seeking quick direction and gentle guidance for mild symptoms. You'll get 2 sessions with Dr. Pravina (start + follow-up), a personalized lifestyle action plan covering food, sleep, movement, and stress, weekly WhatsApp support, customized PDF guides, and the option to upgrade to longer plans. The plan costs ₹4999 (originally ₹9999) and is designed for quick wellness guidance. Would you like me to help you with the registration process?",
        details: "The Wellness Reset plan includes: 2 sessions with Dr. Pravina, personalized lifestyle action plan, weekly WhatsApp support, customized PDF guides, and upgrade options. Perfect for quick direction and mild symptoms."
      }
    },
    {
      name: "Healing Plan",
      fullName: "Healing Plan",
      subtitle: "PCOS, fertility, postpartum, or weight loss",
      duration: "3 Months",
      originalPrice: "₹18999",
      discountedPrice: "₹11999",
      targetAudience: "Best for PCOS, fertility, postpartum, or weight loss",
      features: [
        "6 sessions with Dr. Pravina (biweekly)",
        "Fully customized routines and strategies",
        "WhatsApp follow-ups (2x/month)",
        "Adjustments made based on progress",
        "Access to expert advice if needed",
        "Focus on deep root-cause healing"
      ],
      registrationInfo: {
        process: "Register online through our website",
        payment: "Pay securely via UPI and upload payment screenshot to confirm enrollment",
        includes: [
          "6 sessions with Dr. Pravina (biweekly)",
          "Fully customized routines and strategies",
          "Monthly WhatsApp follow-ups",
          "Adjustments made based on progress",
          "Expert advice access",
          "Deep root-cause healing focus"
        ]
      },
      chatbotResponses: {
        registration: "Thank you for your interest in the Healing Plan! This 3-month comprehensive program is designed for PCOS, fertility, postpartum, or weight loss concerns. You'll receive 6 sessions with Dr. Pravina (biweekly), fully customized routines and strategies, monthly WhatsApp follow-ups, adjustments made based on progress, access to expert advice, and focus on deep root-cause healing. The plan costs ₹11999 (originally ₹18999) and provides comprehensive support for complex health concerns. Would you like me to help you with the registration process?",
        details: "The Healing Plan includes: 6 biweekly sessions with Dr. Pravina, customized routines, monthly WhatsApp support, adjustments made based on progress, expert advice access, and deep root-cause healing focus."
      }
    },
    {
      name: "Lifestyle Transformation",
      fullName: "Lifestyle Transformation",
      subtitle: "Comprehensive care for PCOS, weight management, and fertility",
      duration: "6 Months",
      originalPrice: "₹29999",
      discountedPrice: "₹19999",
      targetAudience: "Ideal for comprehensive care for PCOS, weight management, and fertility",
      features: [
        "12 sessions with Dr. Pravina (every 2 weeks)",
        "Deep lifestyle coaching + emotional support",
        "Regular monitoring, plan upgrades & accountability",
        "Support with hormonal, fertility, weight or chronic concerns",
        "Integration with ObGyn or pediatric team if needed"
      ],
      registrationInfo: {
        process: "Register online through our website",
        payment: "Pay securely via UPI and upload payment screenshot to confirm enrollment",
        includes: [
          "12 sessions with Dr. Pravina (every 2 weeks)",
          "Deep lifestyle coaching and emotional support",
          "Regular monitoring and plan upgrades",
          "Accountability support",
          "Hormonal, fertility, weight, and chronic concern support",
          "Integration with medical teams if needed"
        ]
      },
      chatbotResponses: {
        registration: "Thank you for your interest in the Lifestyle Transformation plan! This 6-month comprehensive program is ideal for comprehensive care for PCOS, weight management, and fertility. You'll receive 12 sessions with Dr. Pravina (every 2 weeks), deep lifestyle coaching with emotional support, regular monitoring and plan upgrades, accountability support, comprehensive support for hormonal, fertility, weight, and chronic concerns, and integration with ObGyn or pediatric teams if needed. The plan costs ₹19999 (originally ₹29999) and provides the most comprehensive support for complex health transformations. Would you like me to help you with the registration process?",
        details: "The Lifestyle Transformation plan includes: 12 sessions with Dr. Pravina, deep lifestyle coaching, emotional support, regular monitoring, plan upgrades, accountability, comprehensive health support, and medical team integration."
      }
    }
  ],
  
  // General lifestyle plan information
  generalInfo: {
    description: "If you're looking for more than just a consultation - deeper support, guidance, and habit change - our wellness plans are for you.",
    process: [
      "Choose your wellness plan",
      "Pay via UPI using our QR code", 
      "Upload screenshot to confirm"
    ],
    includes: [
      "Personal Consultations - Direct access to Dr. Pravina for personalized guidance",
      "Custom Plans - Tailored nutrition and lifestyle recommendations",
      "WhatsApp Support - Regular check-ins and support through WhatsApp",
      "Progress Tracking - Monitor your journey with regular assessments"
    ],
    paymentInfo: "Pay securely via UPI and upload your payment screenshot to confirm your enrollment"
  },
  
  // Common chatbot responses
  commonResponses: {
    planList: "We offer 3 lifestyle plans: 1) Wellness Reset (1 month - ₹4999) for quick direction and mild symptoms, 2) Healing Plan (3 months - ₹11999) for PCOS, fertility, postpartum, or weight loss, and 3) Lifestyle Transformation (6 months - ₹19999) for comprehensive care for PCOS, weight management, and fertility. Each plan includes personalized sessions with Dr. Pravina, customized strategies, and ongoing support.",
    pricing: "Our lifestyle plans are priced at: Wellness Reset (1 month) - ₹4999, Healing Plan (3 months) - ₹11999, and Lifestyle Transformation (6 months) - ₹19999. All plans include personalized sessions, customized strategies, and ongoing support.",
    registration: "To register for any lifestyle plan, visit our website and click on the 'BUY NOW' button for your chosen plan. You'll need to pay via UPI and upload the payment screenshot to confirm your enrollment.",
    whatIncluded: "All lifestyle plans include: Personal consultations with Dr. Pravina, customized nutrition and lifestyle recommendations, WhatsApp support with regular check-ins, and progress tracking with regular assessments.",
    process: "The registration process is simple: 1) Choose your wellness plan, 2) Pay via UPI using our QR code, 3) Upload screenshot to confirm your enrollment."
  }
};

// Helper function to find plan by name
export const findPlanByName = (name: string) => {
  const searchName = name.toLowerCase();
  return lifestylePlansRAGData.plans.find(plan => 
    plan.name.toLowerCase().includes(searchName) ||
    plan.fullName.toLowerCase().includes(searchName) ||
    plan.subtitle.toLowerCase().includes(searchName)
  );
};

// Helper function to get plan registration response
export const getPlanRegistrationResponse = (planName: string) => {
  const plan = findPlanByName(planName);
  if (plan) {
    return plan.chatbotResponses.registration;
  }
  return "I'd be happy to help you register for a lifestyle plan! We offer 3 different plans: Wellness Reset (1 month), Healing Plan (3 months), and Lifestyle Transformation (6 months). Could you please specify which plan you're interested in?";
}; 