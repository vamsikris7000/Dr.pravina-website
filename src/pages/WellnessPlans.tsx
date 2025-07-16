
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, CheckCircle, Phone, MessageCircle } from "lucide-react";

const WellnessPlans = () => {
  const plans = [
    {
      name: "1-Month Reset",
      price: "₹5,000",
      duration: "1 Month",
      color: "from-green-400 to-green-600",
      features: [
        "Initial consultation with Dr. Pravina",
        "Personalized lifestyle plan",
        "Weekly WhatsApp check-ins",
        "Nutrition guidelines & meal plans",
        "Exercise recommendations",
        "Progress tracking tools"
      ],
      ideal: "Perfect for quick lifestyle adjustments and building healthy habits"
    },
    {
      name: "3-Month Healing",
      price: "₹12,000",
      duration: "3 Months",
      color: "from-teal-400 to-green-500",
      popular: true,
      features: [
        "Comprehensive health assessment",
        "Bi-weekly consultations with Dr. Pravina",
        "Personalized wellness roadmap",
        "Daily WhatsApp support",
        "Custom meal plans & recipes",
        "Stress management techniques",
        "Monthly progress reviews",
        "Access to workshop recordings"
      ],
      ideal: "Ideal for addressing specific health concerns and sustainable lifestyle changes"
    },
    {
      name: "6-Month Transformation",
      price: "₹20,000",
      duration: "6 Months",
      color: "from-teal-400 to-teal-600",
      features: [
        "Complete lifestyle medicine approach",
        "Weekly consultations with Dr. Pravina",
        "Comprehensive lab work analysis",
        "24/7 WhatsApp support",
        "Family nutrition guidance",
        "Seasonal meal planning",
        "Mind-body wellness coaching",
        "Free workshop attendance",
        "Long-term maintenance plan",
        "Community support group access"
      ],
      ideal: "Perfect for complete health transformation and long-term wellness"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-bg">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="relative container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
            <h1 className="font-playfair text-6xl md:text-7xl font-bold mb-6 leading-tight">Wellness Plans</h1>
            <p className="font-inter text-xl md:text-2xl mb-10 opacity-90">Personalized Women's Coaching by Dr. Pravina</p>
            <p className="font-inter text-lg mb-10 opacity-90">Transform your health with evidence-based lifestyle medicine tailored to your unique needs</p>
            <Button variant="soft" size="xl" className="bg-white/95 text-primary hover:bg-white hover:text-primary font-inter font-semibold backdrop-blur-sm border border-white/20">
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
            <h2 className="font-playfair text-5xl font-bold text-foreground mb-6">Choose Your Wellness Journey</h2>
            <p className="font-inter text-xl text-muted-foreground">Personalized coaching plans designed for every phase of your life</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`group hover:shadow-elevated hover:-translate-y-2 transition-all duration-500 animate-fade-in relative ${plan.popular ? 'ring-4 ring-primary/20' : ''}`} style={{animationDelay: `${index * 100}ms`}}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold font-inter">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-10">
                  <div className="relative mb-8">
                    <div className={`w-20 h-20 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110`}>
                      <Heart className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="font-playfair text-2xl md:text-3xl font-bold text-foreground mb-3 text-center">{plan.name}</h3>
                  <p className="font-inter text-primary font-semibold mb-4 text-center">{plan.duration}</p>
                  <p className="font-playfair text-4xl font-bold text-primary mb-6 text-center">{plan.price}</p>
                  
                  <p className="font-inter text-sm text-muted-foreground mb-8 text-center italic">{plan.ideal}</p>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="font-inter text-muted-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="wellness" size="lg" className="w-full font-inter font-semibold">
                    Choose This Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-playfair text-5xl font-bold text-foreground mb-6">What's Included in Every Plan</h2>
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
      <section className="py-24 bg-gradient-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">Easy Payment Process</h2>
            <p className="font-inter text-xl text-muted-foreground mb-10">
              Pay securely via UPI and upload your payment screenshot to confirm your enrollment
            </p>
            <div className="bg-white p-10 rounded-2xl shadow-xl mb-10">
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-8">How to Pay:</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center group animate-fade-in" style={{animationDelay: '100ms'}}>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">1</div>
                  <p className="font-inter text-muted-foreground">Choose your wellness plan</p>
                </div>
                <div className="text-center group animate-fade-in" style={{animationDelay: '200ms'}}>
                  <div className="w-16 h-16 bg-gradient-to-br from-success to-success/80 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">2</div>
                  <p className="font-inter text-muted-foreground">Pay via UPI using our QR code</p>
                </div>
                <div className="text-center group animate-fade-in" style={{animationDelay: '300ms'}}>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">3</div>
                  <p className="font-inter text-muted-foreground">Upload screenshot to confirm</p>
                </div>
              </div>
            </div>
            <Button variant="wellness" size="xl" className="font-inter font-semibold">
              Get Payment Details
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WellnessPlans;
