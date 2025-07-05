
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
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-green-50 to-emerald-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Wellness Plans</h1>
            <p className="text-xl mb-8">Personalized Women's Coaching by Dr. Pravina</p>
            <p className="text-lg mb-8">Transform your health with evidence-based lifestyle medicine tailored to your unique needs</p>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative hover:shadow-2xl transition-all duration-300 hover:scale-105 ${plan.popular ? 'ring-4 ring-teal-200 ring-opacity-50' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className={`w-20 h-20 bg-gradient-to-br ${plan.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <Heart className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">{plan.name}</h3>
                  <p className="text-center text-gray-600 mb-4">{plan.duration}</p>
                  <p className="text-4xl font-bold text-teal-600 mb-6 text-center">{plan.price}</p>
                  
                  <p className="text-sm text-gray-600 mb-6 text-center italic">{plan.ideal}</p>
                  
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className={`w-full ${plan.popular ? 'bg-teal-600 hover:bg-teal-700' : 'bg-green-600 hover:bg-green-700'} text-white font-semibold py-3`}>
                    Choose This Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">What's Included in Every Plan</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Personal Consultations</h3>
              <p className="text-gray-600 text-sm">Direct access to Dr. Pravina for personalized guidance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Custom Plans</h3>
              <p className="text-gray-600 text-sm">Tailored nutrition and lifestyle recommendations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">WhatsApp Support</h3>
              <p className="text-gray-600 text-sm">Regular check-ins and support through WhatsApp</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Progress Tracking</h3>
              <p className="text-gray-600 text-sm">Monitor your journey with regular assessments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Info */}
      <section className="py-20 bg-gradient-to-r from-teal-100 to-green-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Easy Payment Process</h2>
            <p className="text-lg text-gray-600 mb-8">
              Pay securely via UPI and upload your payment screenshot to confirm your enrollment
            </p>
            <div className="bg-white p-8 rounded-2xl shadow-xl mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">How to Pay:</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold">1</div>
                  <p className="text-sm text-gray-600">Choose your wellness plan</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold">2</div>
                  <p className="text-sm text-gray-600">Pay via UPI using our QR code</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold">3</div>
                  <p className="text-sm text-gray-600">Upload screenshot to confirm</p>
                </div>
              </div>
            </div>
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
              Get Payment Details
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WellnessPlans;
