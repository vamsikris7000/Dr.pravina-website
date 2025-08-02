import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, BookOpen, Microscope, PenTool, Brain, Award, GraduationCap, Instagram, Facebook, Linkedin, Youtube, Mail, Phone, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const PathOLife = () => {
  console.log('PathOLife component loaded');
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
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight drop-shadow-lg" style={{ fontFamily: 'Cardo, serif' }}>Path'o'Life - Your Journey, Our Path</h1>
            
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
      <section className="py-24" style={{ backgroundColor: '#e9f5e9' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Text Content */}
            <div className="animate-fade-in-up">
              <div className="flex items-center justify-center mb-8">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-foreground/30 to-transparent"></div>
                <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mx-8 leading-tight drop-shadow-lg">Our Story & Philosophy</h2>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent via-foreground/30 to-transparent"></div>
              </div>
              <p className="font-inter text-lg text-muted-foreground mb-6 leading-relaxed">
                At <span className="text-primary font-semibold">Path'o'Life</span>, we believe that true healthcare goes beyond just treating symptoms. Women deserve education, guidance, and personalized lifestyle solutions that support them through every changing phase of life.
              </p>
              <p className="font-inter text-lg text-muted-foreground mb-6 leading-relaxed">
                We are here to help women navigate the complexities of hormonal health, fertility, pregnancy, postpartum recovery, lactation, and parenting through the power of lifestyle medicine, delivered with compassion and care.
              </p>
              <p className="font-inter text-lg text-muted-foreground mb-8 leading-relaxed">
                Whether you are struggling with PCOS, preparing for pregnancy, healing after birth, or simply looking to feel like yourself again, Path'o'Life is here to guide you with clarity, confidence, and practical support.
              </p>
              <div className="flex items-center justify-center mb-8">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-foreground/30 to-transparent"></div>
                <h3 className="font-inter text-2xl font-bold text-foreground mx-8">Why the Name Path'o'Life?</h3>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent via-foreground/30 to-transparent"></div>
              </div>
              <p className="font-inter text-lg text-muted-foreground mb-6 leading-relaxed">
                Every woman walks her own unique path through life. From girlhood to womanhood, through periods, pregnancy, postpartum, and beyond, health is not a destination. It is a journey shaped by the daily choices we make.
              </p>
              <p className="font-inter text-lg text-muted-foreground mb-8 leading-relaxed">
                The name <span className="text-primary font-semibold">Path'o'Life</span> reflects our purpose. We walk beside you on this path through personalized guidance, support, and science-backed lifestyle medicine. Our goal is to help you move through each life stage feeling informed, empowered, and cared for.
              </p>
              <ul className="mb-8 text-lg text-muted-foreground font-inter leading-relaxed list-disc pl-6">
                <li className="mb-2">We do not simply tell you what to do. We help you understand your body, so you can make choices that align with your goals, your health, and your life stage.</li>
                <li className="mb-2">When your lifestyle supports the natural path of your life, health, happiness, and healing become natural outcomes.</li>
              </ul>
              <div className="flex items-center justify-center mb-8">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-foreground/30 to-transparent"></div>
                <h3 className="font-inter text-2xl font-bold text-foreground mx-8">Our Core Philosophy</h3>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent via-foreground/30 to-transparent"></div>
              </div>
              <ul className="mb-8 text-lg text-muted-foreground font-inter leading-relaxed list-none pl-0 space-y-3">
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
              <div className="flex items-center justify-center mb-8">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-foreground/30 to-transparent"></div>
                <h3 className="font-inter text-2xl font-bold text-foreground mx-8">Our Mission</h3>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent via-foreground/30 to-transparent"></div>
              </div>
              <p className="font-inter text-lg text-muted-foreground mb-8 leading-relaxed">
                To guide women through periods, pregnancy, postpartum, and parenting with evidence-based lifestyle medicine rooted in science, compassion, and care. Through education, consultations, and long term support, we help women reclaim their health, balance their hormones, and restore their energy so they can live with clarity and confidence.
              </p>
              <div className="flex items-center justify-center mb-8">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-foreground/30 to-transparent"></div>
                <h3 className="font-inter text-2xl font-bold text-foreground mx-8">Our Vision</h3>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent via-foreground/30 to-transparent"></div>
              </div>
              <p className="font-inter text-lg text-muted-foreground mb-8 leading-relaxed">
                To create a space where every woman feels empowered, informed, and supported through every phase of her health journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Social Section */}
      <section className="py-24" style={{ backgroundColor: '#e9f5e9' }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-foreground/30 to-foreground/30"></div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mx-8">Connect With Us</h2>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent via-foreground/30 to-foreground/30"></div>
            </div>
            <p className="font-inter text-xl text-muted-foreground">Join our community of empowered women</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="text-center lg:text-left">
              <h3 className="font-playfair text-3xl font-bold text-foreground mb-8">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-center lg:justify-start">
                  <Mail className="h-6 w-6 text-primary mr-4" />
                  <a href="mailto:drpravina.patholife@gmail.com" className="font-inter text-lg text-foreground hover:text-primary transition-colors">
                    drpravina.patholife@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <Phone className="h-6 w-6 text-primary mr-4" />
                  <a href="tel:9421829899" className="font-inter text-lg text-foreground hover:text-primary transition-colors">
                    9421829899
                  </a>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="text-center lg:text-right">
              <h3 className="font-playfair text-3xl font-bold text-foreground mb-8">Follow Our Journey</h3>
              <div className="flex justify-center lg:justify-end space-x-4">
                <a href="https://www.instagram.com/path.o.life?igsh=bHF1b2ZkbW43bnZo" target="_blank" rel="noopener noreferrer" className="p-4 bg-primary/10 rounded-full hover:bg-primary hover:scale-110 transition-all duration-300 cursor-pointer group">
                  <Instagram className="h-8 w-8 text-primary group-hover:text-white" />
                </a>
                <a href="https://www.facebook.com/share/1Zui5tjBi9/" target="_blank" rel="noopener noreferrer" className="p-4 bg-primary/10 rounded-full hover:bg-primary hover:scale-110 transition-all duration-300 cursor-pointer group">
                  <Facebook className="h-8 w-8 text-primary group-hover:text-white" />
                </a>
                <a href="https://www.linkedin.com/in/dr-pravina-kale-6226b31b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="p-4 bg-primary/10 rounded-full hover:bg-primary hover:scale-110 transition-all duration-300 cursor-pointer group">
                  <Linkedin className="h-8 w-8 text-primary group-hover:text-white" />
                </a>
                <a href="https://youtube.com/@patholife?si=gyNQBsKA4yvk0VhI" target="_blank" rel="noopener noreferrer" className="p-4 bg-primary/10 rounded-full hover:bg-primary hover:scale-110 transition-all duration-300 cursor-pointer group">
                  <Youtube className="h-8 w-8 text-primary group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Quote Section */}
          <div className="mt-20 text-center">
            <div className="max-w-4xl mx-auto">
              <blockquote className="mb-6">
                <p className="font-playfair text-2xl md:text-3xl font-bold text-foreground leading-relaxed italic">
                  "Path'o'Life was born from science, shaped by experience, and guided by wisdom to help every woman heal, thrive, and rewrite her health story through Lifestyle Medicine with grace and power."
                </p>
              </blockquote>
              <p className="font-inter text-lg text-muted-foreground">
                — Dr. Pravina Kale
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PathOLife; 