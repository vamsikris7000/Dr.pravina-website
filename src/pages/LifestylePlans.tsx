
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, CheckCircle, Phone, MessageCircle } from "lucide-react";
import { chatbotEvents } from "@/lib/chatbot-events";
import { useEffect, useRef } from "react";

const LifestylePlans = () => {
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);

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
            <div className="space-y-16">
              {/* Phase 1: Booking */}
              <div 
                ref={(el) => (timelineRefs.current[0] = el)}
                className="relative flex items-center opacity-0 transform translate-y-10 transition-all duration-1000 ease-out"
              >
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <div className="flex items-center justify-end mb-4">
                      <div className="w-12 h-12 bg-[#1a5f57] rounded-full flex items-center justify-center mr-4">
                        <CheckCircle className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-playfair text-2xl font-bold text-[#1a5f57]">Booking Your Journey Begins</h3>
                    </div>
                    <p className="font-inter text-gray-700 leading-relaxed">
                      Once you book your 1, 3 or 6-month Lifestyle Medicine Package, we begin by welcoming you warmly and preparing you for your transformative journey.
                    </p>
                  </div>
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
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-[#1a5f57] rounded-full flex items-center justify-center mr-4">
                        <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h3 className="font-playfair text-2xl font-bold text-[#1a5f57]">Pre-Consultation Phase: Your Welcome Kit</h3>
                    </div>
                    <p className="font-inter text-gray-700 leading-relaxed mb-4">
                      You'll receive a beautiful, personalized Welcome Kit to help us understand your unique story:
                    </p>
                    <ul className="font-inter text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-[#1a5f57] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Onboarding Assessment Forms</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-[#1a5f57] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Health & Medical History</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-[#1a5f57] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Lifestyle Assessment (Weight, Measurements)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-[#1a5f57] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Medications/Supplements</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-[#1a5f57] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Previous Lab Reports Review (If applicable)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-[#1a5f57] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Welcome Note & How This Journey Works</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Phase 3: Consultation */}
              <div 
                ref={(el) => (timelineRefs.current[2] = el)}
                className="relative flex items-center opacity-0 transform translate-y-10 transition-all duration-1000 ease-out"
              >
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <div className="flex items-center justify-end mb-4">
                      <div className="w-12 h-12 bg-[#1a5f57] rounded-full flex items-center justify-center mr-4">
                        <Heart className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-playfair text-2xl font-bold text-[#1a5f57]">The Consultation Phase: Your Personalized Wellness Prescription</h3>
                    </div>
                    <p className="font-inter text-gray-700 leading-relaxed mb-4">
                      In your 1:1 consultation, we will map out your holistic lifestyle i.e. a personalized prescription, blending science, compassion & tradition.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h4 className="font-inter font-semibold text-[#1a5f57] mb-2">Your Personalized Plan Includes:</h4>
                        <ul className="space-y-1">
                          <li className="flex items-start">
                            <CheckCircle className="h-3 w-3 text-[#1a5f57] mr-2 mt-0.5 flex-shrink-0" />
                            <span>Your Path'o Life-Journal</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-3 w-3 text-[#1a5f57] mr-2 mt-0.5 flex-shrink-0" />
                            <span>Personalized Illness Roadmap</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-3 w-3 text-[#1a5f57] mr-2 mt-0.5 flex-shrink-0" />
                            <span>Nutrition & Mindful Eating</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-3 w-3 text-[#1a5f57] mr-2 mt-0.5 flex-shrink-0" />
                            <span>Movement & Exercise Guidance</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-3 w-3 text-[#1a5f57] mr-2 mt-0.5 flex-shrink-0" />
                            <span>Sleep & Stress Strategies</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-inter font-semibold text-[#1a5f57] mb-2">Additional Support:</h4>
                        <ul className="space-y-1">
                          <li className="flex items-start">
                            <CheckCircle className="h-3 w-3 text-[#1a5f57] mr-2 mt-0.5 flex-shrink-0" />
                            <span>Cycle or Life-Stage Support</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-3 w-3 text-[#1a5f57] mr-2 mt-0.5 flex-shrink-0" />
                            <span>Emotional Wellness Tools</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-3 w-3 text-[#1a5f57] mr-2 mt-0.5 flex-shrink-0" />
                            <span>Relationship & Community Guidance</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-3 w-3 text-[#1a5f57] mr-2 mt-0.5 flex-shrink-0" />
                            <span>Clarity on Expectations & Milestones</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-3 w-3 text-[#1a5f57] mr-2 mt-0.5 flex-shrink-0" />
                            <span>Realistic Progress Markers</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
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
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-[#1a5f57] rounded-full flex items-center justify-center mr-4">
                        <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <h3 className="font-playfair text-2xl font-bold text-[#1a5f57]">Post-Consultation Phase: Your Closure Kit</h3>
                    </div>
                    <p className="font-inter text-gray-700 leading-relaxed mb-4">
                      At the end of your journey, you'll receive a thoughtful closure kit to help you sustain your progress long-term.
                    </p>
                    <ul className="font-inter text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-[#1a5f57] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Final Review & Reflection Session</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-[#1a5f57] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Progress Summary & Achievements</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-[#1a5f57] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Long-term Maintenance Strategies</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-[#1a5f57] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Continued Support Resources</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LifestylePlans;
