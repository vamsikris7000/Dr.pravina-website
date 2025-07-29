
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, CheckCircle, Phone, MessageCircle } from "lucide-react";
import { chatbotEvents } from "@/lib/chatbot-events";

const LifestylePlans = () => {
  const handlePlanPurchase = (planName: string, planPrice: string) => {
    const message = `Hi, I'm interested in buying the ${planName} plan for ${planPrice}`;
    chatbotEvents.openChat(message);
  };

  const plans = [
    {
      name: "Wellness Reset",
      price: "₹4999",
      duration: "1 Month",
      color: "from-green-400 to-green-600",
      features: [
        "2 sessions with Dr. Pravina (start + follow-up)",
        "Lifestyle action plan (food, sleep, movement, stress)",
        "WhatsApp support (1/week check-in)",
        "PDF guides or worksheets tailored to concern",
        "Option to upgrade to a longer plan"
      ],
      ideal: "Best for Quick direction, light hand-holding, or mild symptoms"
    },
    {
      name: "Healing Plan",
      price: "₹11999",
      duration: "3 Months",
      color: "from-teal-400 to-green-500",
      popular: true,
      features: [
        "6 sessions with Dr. Pravina (biweekly)",
        "Fully customized routines and strategies",
        "WhatsApp follow-ups (2x/month)",
        "Adjustments made as per progress",
        "Access to expert advice if needed",
        "Focus on deep root-cause healing"
      ],
      ideal: "Best for PCOS, fertility, postpartum, or weight loss"
    },
    {
      name: "Lifestyle Transformation",
      price: "₹19999",
      duration: "6 Months",
      color: "from-teal-400 to-teal-600",
      features: [
        "12 sessions with Dr. Pravina (every 2 weeks)",
        "Deep lifestyle coaching + emotional support",
        "Regular monitoring, plan upgrades & accountability",
        "Support with hormonal, fertility, weight or chronic concerns",
        "Integration with ObGyn or pediatric team if needed"
      ],
      ideal: "Ideal for PCOS + weight management + fertility combo"
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e9f5e9' }}>
      {/* Hero Section */}
      <section className="relative py-24 text-white overflow-hidden" style={{ backgroundColor: '#1a5f57' }}>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="font-playfair text-6xl md:text-7xl font-bold mb-8 leading-tight">Lifestyle Plans</h1>
            
            <div className="space-y-6 mb-10">
              <p className="font-inter text-xl md:text-2xl opacity-95 leading-relaxed max-w-3xl mx-auto">
                If you're looking for more than just a consultation - deeper support, guidance, and habit change - our wellness plans are for you.
              </p>
            </div>
            
            <Button 
              variant="soft" 
              size="xl" 
              className="bg-white/95 text-primary hover:bg-white hover:text-primary font-inter font-semibold backdrop-blur-sm border border-white/20"
              onClick={() => chatbotEvents.openChat("Hi, I want to learn more about the lifestyle plans")}
            >
              <Heart className="mr-3 h-5 w-5" />
              Choose Your Plan
            </Button>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-playfair text-5xl font-bold text-foreground mb-6">Choose Your Lifestyle Journey</h2>
            <p className="font-inter text-xl text-muted-foreground">Personalized coaching plans designed for every phase of your life</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`group hover:shadow-elevated hover:-translate-y-2 transition-all duration-500 animate-fade-in relative h-full flex flex-col ${plan.popular ? 'ring-4 ring-primary/20' : ''}`} style={{animationDelay: `${index * 100}ms`}}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold font-inter">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-10 flex flex-col h-full">

                  <div className="text-center mb-6">
                    <h3 className="font-playfair text-2xl md:text-3xl font-bold text-foreground mb-3">{plan.name}</h3>
                    <p className="font-inter text-primary font-semibold">{plan.duration}</p>
                  </div>
                  
                  <div className="text-center mb-6">
                    {plan.name === "Wellness Reset" && (
                      <>
                        <p className="font-playfair text-2xl font-bold text-muted-foreground line-through">₹9999</p>
                        <p className="font-playfair text-4xl font-bold text-primary">{plan.price}</p>
                      </>
                    )}
                    {plan.name === "Healing Plan" && (
                      <>
                        <p className="font-playfair text-2xl font-bold text-muted-foreground line-through">₹18999</p>
                        <p className="font-playfair text-4xl font-bold text-primary">{plan.price}</p>
                      </>
                    )}
                    {plan.name === "Lifestyle Transformation" && (
                      <>
                        <p className="font-playfair text-2xl font-bold text-muted-foreground line-through">₹29999</p>
                        <p className="font-playfair text-4xl font-bold text-primary">{plan.price}</p>
                      </>
                    )}
                  </div>
                  
                  <p className="font-inter text-sm text-muted-foreground mb-6 text-center italic">{plan.ideal}</p>
                  
                  <div className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="font-inter text-muted-foreground text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-auto">
                    <Button 
                      variant="wellness" 
                      size="lg" 
                      className="w-full font-inter font-semibold"
                      onClick={() => handlePlanPurchase(plan.name, plan.price)}
                    >
                      BUY NOW
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24" style={{ backgroundColor: '#e9f5e9' }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-playfair text-5xl font-bold text-foreground mb-6">What's Included in Every Lifestyle Plan</h2>
            <p className="font-inter text-xl text-muted-foreground">Comprehensive support for your wellness journey</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center group animate-fade-in" style={{animationDelay: '100ms'}}>
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                <Phone className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-foreground mb-4">Personal Consultations</h3>
              <p className="font-inter text-muted-foreground">Direct access to Dr. Pravina for personalized guidance</p>
            </div>
            <div className="text-center group animate-fade-in" style={{animationDelay: '200ms'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-success to-success/80 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-foreground mb-4">Custom Plans</h3>
              <p className="font-inter text-muted-foreground">Tailored nutrition and lifestyle recommendations</p>
            </div>
            <div className="text-center group animate-fade-in" style={{animationDelay: '300ms'}}>
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                <MessageCircle className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-foreground mb-4">WhatsApp Support</h3>
              <p className="font-inter text-muted-foreground">Regular check-ins and support through WhatsApp</p>
            </div>
            <div className="text-center group animate-fade-in" style={{animationDelay: '400ms'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-success to-success/80 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-foreground mb-4">Progress Tracking</h3>
              <p className="font-inter text-muted-foreground">Monitor your journey with regular assessments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Info */}
      <section className="py-24 bg-foreground text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">Easy Payment Process</h2>
            <p className="font-inter text-xl text-gray-300 mb-10">
              Pay securely via UPI and upload your payment screenshot to confirm your enrollment
            </p>
            <div className="bg-white/10 backdrop-blur-sm p-10 rounded-2xl shadow-xl mb-10 border border-white/20">
              <h3 className="font-playfair text-2xl font-bold text-white mb-8">How to Pay:</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center group animate-fade-in" style={{animationDelay: '100ms'}}>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">1</div>
                  <p className="font-inter text-gray-300">Choose your wellness plan</p>
                </div>
                <div className="text-center group animate-fade-in" style={{animationDelay: '200ms'}}>
                  <div className="w-16 h-16 bg-gradient-to-br from-success to-success/80 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">2</div>
                  <p className="font-inter text-gray-300">Pay via UPI using our QR code</p>
                </div>
                <div className="text-center group animate-fade-in" style={{animationDelay: '300ms'}}>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">3</div>
                  <p className="font-inter text-gray-300">Upload screenshot to confirm</p>
                </div>
              </div>
            </div>
            <Button 
              variant="wellness" 
              size="xl" 
              className="font-inter font-semibold"
              onClick={() => chatbotEvents.openChat("Hi, I need payment details for the lifestyle plans")}
            >
              Get Payment Details
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LifestylePlans;
