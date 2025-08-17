
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Calendar, Heart, Baby, User, Users2, Mail } from "lucide-react";
import { chatbotEvents } from "@/lib/chatbot-events";
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const Consultations = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const paymentFormRef = useRef<HTMLDivElement>(null);

  const handleBookConsultation = () => {
    chatbotEvents.openChat("I want to book my slot for the consultation.");
  };

  const handleRazorpayPayment = () => {
    setShowPaymentModal(true);
  };

  const closePaymentModal = () => {
    setShowPaymentModal(false);
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
          script.setAttribute('data-payment_button_id', 'pl_R5IUKDPHZRvOI4');
          script.async = true;
          
          // Append script to form
          form.appendChild(script);
          
          // Append form to container
          paymentFormRef.current.appendChild(form);
        }
      }, 100);
    }
  }, [showPaymentModal]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e9f5e9' }}>
      {/* Hero Section */}
      <section className="relative py-24 text-white overflow-hidden" style={{ backgroundColor: '#1a5f57' }}>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="relative container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
            <h1 className="font-playfair text-6xl md:text-7xl font-bold mb-6 leading-tight">1:1 Consultations</h1>
            <p className="font-inter text-xl md:text-2xl mb-10 opacity-90">Personalized guidance with our team of women's health specialists</p>
            <Button 
              variant="soft" 
              size="xl" 
              className="bg-white text-primary hover:bg-gray-50 hover:text-primary font-inter font-semibold border border-gray-200 shadow-sm"
              onClick={handleBookConsultation}
            >
              Book Your Slot
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center mb-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-foreground/30 to-foreground/30"></div>
            <h2 className="font-playfair text-5xl font-bold text-foreground mx-8">How It Works</h2>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-foreground/30 to-foreground/30"></div>
          </div>
            <p className="font-inter text-xl text-muted-foreground">Simple steps to get personalized care</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center group animate-fade-in" style={{animationDelay: '100ms'}}>
              <div className="w-18 h-18 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">1</div>
              <h3 className="font-playfair text-xl font-bold text-foreground mb-3">Start the Chat</h3>
              <p className="font-inter text-muted-foreground">Click "Book Your Consultation" to open our friendly chatbot and begin your journey</p>
            </div>
            <div className="text-center group animate-fade-in" style={{animationDelay: '200ms'}}>
              <div className="w-18 h-18 bg-gradient-to-br from-success to-success/80 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">2</div>
              <h3 className="font-playfair text-xl font-bold text-foreground mb-3">Share Your Story</h3>
              <p className="font-inter text-muted-foreground">Tell us about your health concerns and what you're looking to achieve</p>
            </div>
            <div className="text-center group animate-fade-in" style={{animationDelay: '300ms'}}>
              <div className="w-18 h-18 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">3</div>
              <h3 className="font-playfair text-xl font-bold text-foreground mb-3">Get Your Schedule</h3>
              <p className="font-inter text-muted-foreground">Receive your consultation details and prepare for your personalized session</p>
            </div>
            <div className="text-center group animate-fade-in" style={{animationDelay: '400ms'}}>
              <div className="w-18 h-18 bg-gradient-to-br from-success to-success/80 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">4</div>
              <h3 className="font-playfair text-xl font-bold text-foreground mb-3">Complete Payment</h3>
              <p className="font-inter text-muted-foreground">Securely pay for your consultation through our integrated payment system</p>
            </div>
          </div>
        </div>
      </section>

      {/* 1:1 Consultation Details */}
      <section className="py-24" style={{ backgroundColor: '#e9f5e9' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Main Consultation Card */}
            <Card className="group hover:shadow-elevated hover:-translate-y-2 transition-all duration-500 animate-fade-in overflow-hidden border-0 shadow-lg relative mb-12 w-[90%] mx-auto">
              {/* Solid Background */}
              <div className="absolute inset-0 bg-[#1a5f57]"></div>
              
              <CardContent className="p-8 md:p-12 relative z-10">
                <div className="text-center mb-8">
                  <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
                    1:1 Lifestyle Consultation with Path'o'Life
                  </h2>
                  <p className="font-inter text-xl text-white/90 max-w-3xl mx-auto">
                    This personalized 1:1 session is designed to guide you in understanding how Path'o'Life can transform your wellness journey.
                  </p>
                </div>

                {/* What You'll Receive */}
                <div className="bg-[#0d9488] rounded-2xl p-8 mb-8">
                  <h3 className="font-playfair text-2xl font-bold text-white mb-6 text-center">
                    During this session, you will receive:
                  </h3>
                  <div className="grid md:grid-cols-1 gap-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                        <span className="text-primary font-bold text-sm">1</span>
                      </div>
                      <div>
                        <p className="font-inter text-lg text-white leading-relaxed">
                          <strong>Guidance on your current health and lifestyle patterns</strong>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                        <span className="text-primary font-bold text-sm">2</span>
                      </div>
                      <div>
                        <p className="font-inter text-lg text-white leading-relaxed">
                          <strong>Clarity on which Lifestyle Plan or specialist consultation is most suitable for your goals</strong>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                        <span className="text-primary font-bold text-sm">3</span>
                      </div>
                      <div>
                        <p className="font-inter text-lg text-white leading-relaxed">
                          <strong>Practical insights and next steps tailored to your unique needs</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                  <p className="font-inter text-xl text-white mb-6">
                    Book your 1:1 consultation today and take the first step toward a healthier, balanced life.
                  </p>
                  
                  {/* Special Offer Badge */}
                  <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-primary px-6 py-3 rounded-full mb-8 shadow-lg">
                    <span className="font-inter font-bold text-lg">🎉 Special Offer: Get ₹300 off when you book after attending our workshop!</span>
                  </div>
                  
                  <Button 
                    variant="soft" 
                    size="xl" 
                    className="bg-white text-primary hover:bg-gray-50 hover:text-primary font-inter font-semibold border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={handleRazorpayPayment}
                  >
                    Book Your 1:1 Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Additional Benefits */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group animate-fade-in" style={{animationDelay: '100ms'}}>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                  <User className="h-8 w-8" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-foreground mb-3">Personalized Approach</h3>
                <p className="font-inter text-muted-foreground">Every consultation is tailored to your unique health journey and specific goals</p>
              </div>
              
              <div className="text-center group animate-fade-in" style={{animationDelay: '200ms'}}>
                <div className="w-16 h-16 bg-gradient-to-br from-success to-success/80 rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-foreground mb-3">Holistic Wellness</h3>
                <p className="font-inter text-muted-foreground">Comprehensive guidance covering nutrition, lifestyle, and mental well-being</p>
              </div>
              
              <div className="text-center group animate-fade-in" style={{animationDelay: '300ms'}}>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                  <Calendar className="h-8 w-8" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-foreground mb-3">Flexible Scheduling</h3>
                <p className="font-inter text-muted-foreground">Choose a time that works best for you with our convenient online booking system</p>
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
              Book Your 1:1 Consultation
            </h3>
            <p className="text-gray-600 text-center mb-6">
              Complete your consultation booking
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

export default Consultations;
