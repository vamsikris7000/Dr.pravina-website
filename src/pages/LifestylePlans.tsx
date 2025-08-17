
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, CheckCircle, Phone, MessageCircle, Instagram, Facebook, Linkedin, Youtube, Mail } from "lucide-react";
import { chatbotEvents } from "@/lib/chatbot-events";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const LifestylePlans = () => {
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>('');
  const [selectedPlanPrice, setSelectedPlanPrice] = useState<string>('');
  const paymentFormRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    timelineRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      timelineRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  const handlePlanPurchase = (planName: string, planPrice: string, paymentButtonId: string) => {
    setSelectedPlan(planName);
    setSelectedPlanPrice(planPrice);
    setShowPaymentModal(true);
  };

  const closePaymentModal = () => {
    setShowPaymentModal(false);
    setSelectedPlan('');
    setSelectedPlanPrice('');
  };

  // Load Razorpay script when modal opens
  useEffect(() => {
    if (showPaymentModal && paymentFormRef.current) {
      // Clear previous content
      paymentFormRef.current.innerHTML = '';
      
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        if (paymentFormRef.current) {
          // Create form element
          const form = document.createElement('form');
          
          // Create script element
          const script = document.createElement('script');
          script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
          
          // Find the selected plan's payment button ID
          const selectedPlanData = plans.find(plan => plan.name === selectedPlan);
          if (selectedPlanData) {
            script.setAttribute('data-payment_button_id', selectedPlanData.paymentButtonId);
          }
          
          script.async = true;
          
          // Append script to form
          form.appendChild(script);
          
          // Append form to container
          paymentFormRef.current.appendChild(form);
        }
      }, 100);
    }
  }, [showPaymentModal, selectedPlan]);



  const plans = [
    {
      name: "Wellness Reset",
      price: "₹4999",
      duration: "1 Month",
      color: "from-green-400 to-green-600",
      paymentButtonId: "pl_R5IXknhAtW1nbL",
      features: [
        "2 sessions with Dr. Pravina (start + follow-up)",
        "Lifestyle action plan (food, sleep, movement, stress)",
        "WhatsApp support (1/week check-in)",
        "PDF guides or worksheets tailored to concern",
        "Option to upgrade to a longer plan"
      ],
      ideal: "Best for Quick direction, gentle guidance, or mild symptoms"
    },
    {
      name: "Healing Plan",
      price: "₹11999",
      duration: "3 Months",
      color: "from-teal-400 to-green-500",
      popular: true,
      paymentButtonId: "pl_R5IZjWDnMz4BqT",
      features: [
        "6 sessions with Dr. Pravina (biweekly)",
        "Fully customized routines and strategies",
        "WhatsApp follow-ups (2x/month)",
        "Adjustments made based on progress",
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
      paymentButtonId: "pl_R5IbvwgGBjfbln",
      features: [
        "12 sessions with Dr. Pravina (every 2 weeks)",
        "Deep lifestyle coaching + emotional support",
        "Regular monitoring, plan upgrades & accountability",
        "Support with hormonal, fertility, weight or chronic concerns",
        "Integration with ObGyn or pediatric team if needed"
      ],
      ideal: "Ideal for comprehensive care for PCOS, weight management, and fertility"
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
                  
                  <Button 
                    variant="soft" 
                    size="lg" 
                    className="w-full font-inter font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-r from-primary to-primary/90 text-white hover:from-primary/90 hover:to-primary"
                    onClick={() => handlePlanPurchase(plan.name, plan.price, plan.paymentButtonId)}
                  >
                    Buy Now - {plan.price}
                  </Button>

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



      {/* Timeline Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-playfair text-5xl font-bold text-foreground mb-6">Your Journey with Path'o'Life</h2>
            <p className="font-inter text-xl text-muted-foreground">A comprehensive 4-phase approach to your wellness transformation</p>
          </div>
          
          {/* Timeline */}
          <div className="max-w-4xl mx-auto relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#1a5f57] h-full"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {/* Phase 1: Booking */}
              <div 
                ref={(el) => (timelineRefs.current[0] = el)}
                className="relative flex items-center opacity-0 transform translate-y-10 transition-all duration-1000 ease-out"
              >
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="font-playfair text-2xl font-bold text-[#1a5f57] mb-2">Booking Your Journey Begins</h3>
                  <p className="font-inter text-gray-700">Book your package and we'll welcome you warmly to start your transformative journey.</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#1a5f57] rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8"></div>
              </div>

              {/* Phase 2: Pre-Consultation */}
              <div 
                ref={(el) => (timelineRefs.current[1] = el)}
                className="relative flex items-center opacity-0 transform translate-y-10 transition-all duration-1000 ease-out"
              >
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#1a5f57] rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8">
                  <h3 className="font-playfair text-2xl font-bold text-[#1a5f57] mb-2">Pre-Consultation: Welcome Kit</h3>
                  <p className="font-inter text-gray-700">Receive your personalized welcome kit with assessment forms to understand your unique story.</p>
                </div>
              </div>

              {/* Phase 3: Consultation */}
              <div 
                ref={(el) => (timelineRefs.current[2] = el)}
                className="relative flex items-center opacity-0 transform translate-y-10 transition-all duration-1000 ease-out"
              >
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="font-playfair text-2xl font-bold text-[#1a5f57] mb-2">Consultation: Personalized Plan</h3>
                  <p className="font-inter text-gray-700">1:1 consultation to create your holistic lifestyle prescription blending science, compassion & tradition.</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#1a5f57] rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8"></div>
              </div>

              {/* Phase 4: Post-Consultation */}
              <div 
                ref={(el) => (timelineRefs.current[3] = el)}
                className="relative flex items-center opacity-0 transform translate-y-10 transition-all duration-1000 ease-out"
              >
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#1a5f57] rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2 pl-8">
                  <h3 className="font-playfair text-2xl font-bold text-[#1a5f57] mb-2">Post-Consultation: Closure Kit</h3>
                  <p className="font-inter text-gray-700">Receive a thoughtful closure kit to help you sustain your progress long-term.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 mb-16">
            <div className="lg:col-span-2">
              <h3 className="font-playfair text-3xl font-bold mb-6 text-primary-glow">Path'o'Life</h3>
              <p className="font-inter text-lg text-gray-300 mb-6 leading-relaxed">
                Ready to Feel Your Best? Start Your Wellness Transformation
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/path.o.life?igsh=bHF1b2ZkbW43bnZo" target="_blank" rel="noopener noreferrer" className="p-3 bg-primary/20 rounded-full hover:bg-primary hover:scale-110 transition-all duration-300 cursor-pointer group">
                  <Instagram className="h-6 w-6 text-primary group-hover:text-white" />
                </a>
                <a href="https://www.facebook.com/share/1Zui5tjBi9/" target="_blank" rel="noopener noreferrer" className="p-3 bg-primary/20 rounded-full hover:bg-primary hover:scale-110 transition-all duration-300 cursor-pointer group">
                  <Facebook className="h-6 w-6 text-primary group-hover:text-white" />
                </a>
                <a href="https://www.linkedin.com/in/dr-pravina-kale-6226b31b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="p-3 bg-primary/20 rounded-full hover:bg-primary hover:scale-110 transition-all duration-300 cursor-pointer group">
                  <Linkedin className="h-6 w-6 text-primary group-hover:text-white" />
                </a>
                <a href="https://youtube.com/@patholife?si=gyNQBsKA4yvk0VhI" target="_blank" rel="noopener noreferrer" className="p-3 bg-primary/20 rounded-full hover:bg-primary hover:scale-110 transition-all duration-300 cursor-pointer group">
                  <Youtube className="h-6 w-6 text-primary group-hover:text-white" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-inter text-xl font-semibold mb-6 text-white">Quick Links</h4>
              <div className="space-y-4 font-inter text-gray-300">
                <Link to="/about" className="block hover:text-primary-glow transition-colors hover:translate-x-1 duration-300">About Dr. Pravina</Link>
                <Link to="/workshops" className="block hover:text-primary-glow transition-colors hover:translate-x-1 duration-300">Workshops</Link>
                <Link to="/consultations" className="block hover:text-primary-glow transition-colors hover:translate-x-1 duration-300">Consultations</Link>
                <Link to="/wellness-plans" className="block hover:text-primary-glow transition-colors hover:translate-x-1 duration-300">Wellness Plans</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-inter text-xl font-semibold mb-6 text-white">Legal</h4>
              <div className="space-y-4 font-inter text-gray-300">
                <Link to="/privacy-policy" className="block hover:text-primary-glow transition-colors hover:translate-x-1 duration-300">Privacy Policy</Link>
                <Link to="/returns-refund-policy" className="block hover:text-primary-glow transition-colors hover:translate-x-1 duration-300">Returns & Refund Policy</Link>
                <Link to="/terms-conditions" className="block hover:text-primary-glow transition-colors hover:translate-x-1 duration-300">Terms & Conditions</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-inter text-xl font-semibold mb-6 text-white">Contact</h4>
              <div className="space-y-4 font-inter text-gray-300">
                <p className="flex items-center hover:text-primary-glow transition-colors">
                  <Mail className="h-5 w-5 mr-3 text-primary" /> 
                  drpravina.patholife@gmail.com
                </p>
                <p className="flex items-center hover:text-primary-glow transition-colors">
                  <svg className="h-5 w-5 mr-3 text-primary" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  9421829899
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-12">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
              <div className="text-center lg:text-left">
                <p className="font-inter text-xl text-primary-glow italic mb-3 leading-relaxed max-w-2xl">
                  "Path'o'Life was born from science, shaped by experience, and guided by wisdom to help every woman heal, thrive, and rewrite her health story through Lifestyle Medicine with grace and power."
                </p>
                <p className="font-inter text-gray-400">Dr. Pravina Kale</p>
              </div>
              <div className="text-center lg:text-right">
                <p className="font-inter text-gray-400 text-sm">
                  © 2024 Path'o'Life. All rights reserved.
                </p>
                <p className="font-inter text-gray-500 text-xs mt-1">
                  Designed with wellness in mind
                </p>
                <p className="font-inter text-gray-600 text-xs mt-2 flex items-center justify-center gap-3">
                  <span>Partnered with</span> <img src="/photos/XpectrumLogo.png" alt="Xpectrum-AI" className="h-6 w-auto object-contain" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative">
            <button
              onClick={closePaymentModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
              ×
            </button>
            <h3 className="text-2xl font-bold text-center mb-4 text-primary">
              Purchase {selectedPlan}
            </h3>
            <p className="text-gray-600 text-center mb-6">
              Complete your purchase for {selectedPlanPrice}
            </p>
            <div className="flex justify-center" ref={paymentFormRef}>
              {/* Razorpay payment button will be loaded here */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LifestylePlans;
