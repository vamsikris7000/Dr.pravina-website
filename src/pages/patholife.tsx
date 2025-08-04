import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, BookOpen, Microscope, PenTool, Brain, Award, GraduationCap, Instagram, Facebook, Linkedin, Youtube, Mail, Phone, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
  import { useState, useEffect } from "react";
  
  const PathOLife = () => {
    console.log('PathOLife component loaded');
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    // Remove scrollbar completely to prevent layout shift
    useEffect(() => {
      const style = document.createElement('style');
      style.textContent = `
        /* Hide scrollbar completely */
        html {
          overflow-y: auto;
        }
        
        body {
          overflow-y: auto;
        }
        
        /* Chrome, Safari, and Opera */
        ::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
        }
        
        /* Firefox */
        * {
          scrollbar-width: none !important;
          -ms-overflow-style: none !important;
        }
      `;
      document.head.appendChild(style);
      
      return () => {
        document.head.removeChild(style);
      };
    }, []);
  
  const testimonials = [
    {
      name: "Neha Janokar",
      location: "Pune",
      photo: "/photos/Testimonials1.png",
      message: "When I met Dr. Pravina, I was overwhelmed with conflicting fertility advice. Her calm, science-backed, and deeply personal approach gave me the clarity and confidence I needed. From nutrition to stress management, she guided me step-by-step. I feel so much more in tune with my body now and ready for this next phase of life."
    },
    {
      name: "Tejashree Vidhale",
      location: "Bangalore",
      photo: "/photos/Testimonials2.png",
      message: "I had tried everything for weight loss, but nothing felt sustainable until I met Dr. Pravina. She didn't just give me a diet; she gave me a lifestyle. I've lost over 9kg and gained back my self-worth. Also, I'm one size down. Her compassion, her methods, and her personal follow-ups kept me going when I wanted to quit. I'm lighter, healthier, and happier inside out."
    },
    {
      name: "Amruta Bharsakale",
      location: "Gurgaon",
      photo: "/photos/Testimonials3.jpeg",
      message: "PCOS had affected everything from my skin to my confidence. Dr. Pravina simplified things for me. Her structured, yet gentle method helped me stay consistent. My cravings reduced, I lost inches, and I even started enjoying movement again. She made me feel seen, heard, and empowered."
    },
    {
      name: "Monika Bahurupi",
      location: "Munich, Germany",
      photo: "/photos/Testimonials4.jpeg",
      message: "Working with Pravina through Path'o'Life has been a deeply healing experience. As a pathologist, she brings medical knowledge and holistic wisdom that made me feel truly seen. During challenging times, Pravina was my calm, reassuring presence. She helped me become more mindful of my eating habits with compassion and practical advice. The yoga and mental wellness practices she introduced became my anchors for inner peace. What makes Pravina special is her supportive nature and how sincerely she cares. She listens deeply, encourages without pressure, and walks with you through every step. I'm deeply grateful – she helped me not only feel better, but reconnect with myself."
    },
    {
      name: "Dr. Kshitija Pawade",
      location: "Amravati",
      photo: "/photos/Testimonials5.jpeg",
      message: "Being a doctor myself, I had tried many options for PCOS. But nothing felt as personalized and effective as Dr. Pravina's approach. My cycles became regular, I lost excess weight, and I felt more centered than I had in years. She brought the missing 'lifestyle' piece into my healing puzzle."
    },
    {
      name: "Dipali Tidke",
      location: "Pune",
      photo: "/photos/Testimonials6.png",
      message: "When I conceived, I was nervous about doing everything 'right'. Dr. Pravina's pregnancy guidance helped me focus on what truly matters... nourishing my body, bonding with my baby, and enjoying this sacred time. My energy stayed high throughout and my baby thrived. She was more than a doctor...she was my health coach and emotional anchor."
    },
    {
      name: "Divyata Shegokar",
      location: "Akola",
      photo: "/photos/Testimonials7.png",
      message: "From pregnancy to postpartum healing and my baby's nutrition, Dr. Pravina was with me at every step. Her practical tools, emotional support, and timely nudges made me feel prepared and powerful. My recovery was smooth, my breastfeeding journey was joyful, and my baby's diet is now rooted in wholesome traditions. I'm so grateful!"
    },
    {
      name: "Madhura Pawade",
      location: "Amravati",
      photo: "/photos/Testimonials8.jpeg",
      message: "I struggled with PCOS for years acne, hair fall, irregular periods, and stubborn weight. Dr. Pravina's customized lifestyle plan helped me lose 7 kgs, regulate my periods, and sleep peacefully again. She didn't just guide me she believed in me when I didn't."
    }
  ];

  const pathOLifeHighlights = [
    {
      icon: Heart,
      title: "Women's Health & Hormones",
      description: "Specialized care for hormonal balance and women's wellness",
      color: "from-red-400 to-red-600"
    },
    {
      icon: Users,
      title: "Lifestyle Medicine Programs",
      description: "Evidence-based lifestyle interventions for lasting health",
      color: "from-green-400 to-green-600"
    },
    {
      icon: BookOpen,
      title: "Live Online Workshops",
      description: "Interactive learning for empowerment and practical tools",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Award,
      title: "1:1 Personalized Consultations",
      description: "Tailored guidance for deeper, focused health solutions",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: Microscope,
      title: "Science-Backed Approach",
      description: "Evidence-based solutions rooted in medical research",
      color: "from-indigo-400 to-indigo-600"
    },
    {
      icon: PenTool,
      title: "Compassionate Care",
      description: "Supportive guidance through every life phase",
      color: "from-pink-400 to-pink-600"
    },
    {
      icon: Brain,
      title: "Holistic Wellness",
      description: "Comprehensive approach to mind-body health",
      color: "from-cyan-400 to-cyan-600"
    },
    {
      icon: GraduationCap,
      title: "Education & Empowerment",
      description: "Knowledge-based approach to health decisions",
      color: "from-orange-400 to-orange-600"
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e9f5e9' }}>
      {/* Hero Section */}
      <section className="relative py-24 text-white overflow-hidden" style={{ backgroundColor: '#1a5f57' }}>
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-20 right-16 w-16 h-16 border border-white/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-white/20 transform rotate-45"></div>
        </div>
        
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
            <h1 className="font-playfair text-6xl md:text-7xl font-bold mb-8 leading-tight drop-shadow-lg">
              <div>Path'o'Life</div>
              <div>Your Journey, Our Path</div>
            </h1>
            
            <div className="space-y-6 mb-10">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                Your Health Deserves More
              </h2>
              
              <p className="font-inter text-xl md:text-2xl text-white/95 mb-6 leading-relaxed">
                Empowering women through evidence-based lifestyle medicine
              </p>
              
              <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
                <span className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white font-inter text-sm md:text-base font-medium border border-white/20 hover:bg-white/25 transition-all duration-300">
                  Women's Health
                </span>
                <span className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white font-inter text-sm md:text-base font-medium border border-white/20 hover:bg-white/25 transition-all duration-300">
                  Hormonal Balance
                </span>
                <span className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white font-inter text-sm md:text-base font-medium border border-white/20 hover:bg-white/25 transition-all duration-300">
                  Lifestyle Medicine
                </span>
                <span className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white font-inter text-sm md:text-base font-medium border border-white/20 hover:bg-white/25 transition-all duration-300">
                  Pregnancy Support
                </span>
                <span className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white font-inter text-sm md:text-base font-medium border border-white/20 hover:bg-white/25 transition-all duration-300">
                  Postpartum Care
                </span>
                <span className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white font-inter text-sm md:text-base font-medium border border-white/20 hover:bg-white/25 transition-all duration-300">
                  Parenting Guidance
                </span>
                <span className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white font-inter text-sm md:text-base font-medium border border-white/20 hover:bg-white/25 transition-all duration-300">
                  Wellness Programs
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Highlights Carousel */}
      <section className="py-24 overflow-hidden" style={{ backgroundColor: '#e9f5e9' }}>
        <div className="container mx-auto px-6">
                      <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-foreground/30 to-transparent"></div>
                <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mx-8 drop-shadow-lg">What We Offer</h2>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent via-foreground/30 to-transparent"></div>
              </div>
              <p className="font-inter text-xl text-muted-foreground">Comprehensive wellness solutions for every woman</p>
            </div>
          
              <div className="relative">
            <div className="overflow-hidden">
              <div className="flex group" style={{ animation: 'scroll-left 60s linear infinite' }}>
                {/* First set of cards */}
                {pathOLifeHighlights.map((highlight, index) => (
                  <div key={`first-${index}`} className="flex-shrink-0 w-80 mx-4">
                    <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group-hover:pause border-0">
                      <CardContent className="p-6 text-center">
                        <div className={`w-16 h-16 bg-gradient-to-br ${highlight.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover:scale-110 transition-transform duration-300`}>
                          <highlight.icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="font-playfair text-lg font-bold text-foreground mb-3 leading-tight">
                          {highlight.title}
                        </h3>
                        <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                          {highlight.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
                
                {/* Duplicate set for seamless loop */}
                {pathOLifeHighlights.map((highlight, index) => (
                  <div key={`second-${index}`} className="flex-shrink-0 w-80 mx-4">
                    <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group-hover:pause border-0">
                      <CardContent className="p-6 text-center">
                        <div className={`w-16 h-16 bg-gradient-to-br ${highlight.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover:scale-110 transition-transform duration-300`}>
                          <highlight.icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="font-playfair text-lg font-bold text-foreground mb-3 leading-tight">
                          {highlight.title}
                        </h3>
                        <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                          {highlight.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <style>{`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          
          .group:hover .group {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* Our Story & Philosophy Section */}
      <section className="py-16" style={{ backgroundColor: '#e9f5e9' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Text Content */}
            <div className="animate-fade-in-up">
              <div className="flex items-center justify-center mb-6">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-foreground/30 to-transparent"></div>
                <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mx-8 leading-tight drop-shadow-lg">Our Story & Philosophy</h2>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent via-foreground/30 to-transparent"></div>
              </div>
              <p className="font-inter text-lg text-muted-foreground mb-4 leading-relaxed">
                At <span className="text-primary font-semibold">Path'o'Life</span>, we believe that true healthcare goes beyond just treating symptoms. Women deserve education, guidance, and personalized lifestyle solutions that support them through every changing phase of life.
              </p>
              <p className="font-inter text-lg text-muted-foreground mb-4 leading-relaxed">
                We are here to help women navigate the complexities of hormonal health, fertility, pregnancy, postpartum recovery, lactation, and parenting through the power of lifestyle medicine, delivered with compassion and care.
              </p>
              <p className="font-inter text-lg text-muted-foreground mb-0 leading-relaxed">
                Whether you are struggling with PCOS, preparing for pregnancy, healing after birth, or simply looking to feel like yourself again, Path'o'Life is here to guide you with clarity, confidence, and practical support.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16" style={{ backgroundColor: '#e9f5e9' }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-foreground/30 to-transparent"></div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mx-8">Testimonials</h2>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent via-foreground/30 to-transparent"></div>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative min-h-[600px]">
              {/* Navigation Buttons */}
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
              >
                <ChevronLeft className="h-6 w-6 text-primary" />
              </button>
              
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
              >
                <ChevronRight className="h-6 w-6 text-primary" />
              </button>
              
              {/* Testimonial Content - Side by Side Layout */}
              <div className="flex flex-col lg:flex-row items-stretch h-full">
                {/* Photo Section - Left Side (35% of widget - reduced by 30%) */}
                <div className="w-full lg:w-[35%] h-full">
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
                    <img 
                      src={testimonials[currentTestimonial].photo} 
                      alt={`${testimonials[currentTestimonial].name}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Text Content - Right Side (65% of widget) */}
                <div className="w-full lg:w-[65%] text-left flex flex-col justify-center p-8">
                  <div className="mb-8">
                    <h3 className="font-playfair text-3xl font-bold text-foreground mb-3">
                      {testimonials[currentTestimonial].name}
                    </h3>
                    <p className="font-inter text-xl text-primary">
                      {testimonials[currentTestimonial].location}
                    </p>
                  </div>
                  
                  <blockquote className="font-inter text-lg md:text-xl text-muted-foreground leading-relaxed italic">
                    "{testimonials[currentTestimonial].message}"
                  </blockquote>
                </div>
              </div>
              
              {/* Dots Indicator */}
              <div className="flex justify-center space-x-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-primary scale-125' 
                        : 'bg-gray-300 hover:bg-primary/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why the Name Path'o'Life Section */}
      <section className="py-16" style={{ backgroundColor: '#e9f5e9' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="animate-fade-in-up">
              <div className="flex items-center justify-center mb-6">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-foreground/30 to-transparent"></div>
                <h3 className="font-inter text-2xl font-bold text-foreground mx-8">Why the Name Path'o'Life?</h3>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent via-foreground/30 to-transparent"></div>
              </div>
              <p className="font-inter text-lg text-muted-foreground mb-4 leading-relaxed">
                Every woman walks her own unique path through life. From girlhood to womanhood, through periods, pregnancy, postpartum, and beyond, health is not a destination. It is a journey shaped by the daily choices we make.
              </p>
              <p className="font-inter text-lg text-muted-foreground mb-6 leading-relaxed">
                The name <span className="text-primary font-semibold">Path'o'Life</span> reflects our purpose. We walk beside you on this path through personalized guidance, support, and science-backed lifestyle medicine. Our goal is to help you move through each life stage feeling informed, empowered, and cared for.
              </p>
              <ul className="mb-0 text-lg text-muted-foreground font-inter leading-relaxed list-disc pl-6">
                <li className="mb-2">We do not simply tell you what to do. We help you understand your body, so you can make choices that align with your goals, your health, and your life stage.</li>
                <li className="mb-0">When your lifestyle supports the natural path of your life, health, happiness, and healing become natural outcomes.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Philosophy Section */}
      <section className="py-16" style={{ backgroundColor: '#e9f5e9' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Text Content */}
            <div className="animate-fade-in-up">
              <div className="flex items-center justify-center mb-6">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-foreground/30 to-transparent"></div>
                <h3 className="font-inter text-2xl font-bold text-foreground mx-8">Our Core Philosophy</h3>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent via-foreground/30 to-transparent"></div>
              </div>
              <ul className="mb-6 text-lg text-muted-foreground font-inter leading-relaxed list-none pl-0 space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <span>A lifestyle prescription comes before a medical prescription</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <span>Women deserve personalized, practical, and compassionate care</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <span>Health is more than the absence of disease. It's energy, confidence, and joy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <span>When a woman heals, a family thrives, and generations change</span>
                </li>
              </ul>
              <div className="flex items-center justify-center mb-6">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-foreground/30 to-transparent"></div>
                <h3 className="font-inter text-2xl font-bold text-foreground mx-8">Our Mission and Vision</h3>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent via-foreground/30 to-transparent"></div>
              </div>
              <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                To guide women through periods, pregnancy, postpartum, and parenting with evidence-based lifestyle medicine rooted in science, compassion, and care. Through education, consultations, and long term support, we help women reclaim their health, balance their hormones, and restore their energy so they can live with clarity and confidence. To create a space where every woman feels empowered, informed, and supported through every phase of her health journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-2">
              <h3 className="font-playfair text-3xl font-bold mb-6 text-primary-glow">Path'o'Life</h3>
              <p className="font-inter text-lg text-gray-300 mb-6 leading-relaxed">
                Empowering women through evidence-based lifestyle medicine
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
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PathOLife; 