import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, BookOpen, Microscope, PenTool, Brain, Award, GraduationCap, Instagram, Facebook, Linkedin, Youtube, Mail, Phone, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
  import { useState, useEffect } from "react";

const PathOLife = () => {
    console.log('PathOLife component loaded');

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
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        
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

      {/* Welcome to Path'o'Life Section */}
      <section className="py-16" style={{ backgroundColor: '#e9f5e9' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="animate-fade-in-up">
              <div className="flex items-center justify-center mb-6">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-foreground/30 to-transparent"></div>
                <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mx-8 leading-tight drop-shadow-lg">Welcome to Path'o'Life</h2>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent via-foreground/30 to-transparent"></div>
              </div>
              
              <div className="space-y-6 text-lg text-muted-foreground font-inter leading-relaxed">
                <p>
                  <span className="font-semibold text-primary">1.</span> Hello and Congratulations on taking a step towards a healthier, stronger, and more vibrant "you."
                </p>
                
                <p>
                  <span className="font-semibold text-primary">2.</span> At <span className="text-primary font-semibold">Path'o'Life</span>, we believe that true health is not built by pills alone, it's shaped by your daily choices, mindset, and habits.
                </p>
                
                <p>
                  <span className="font-semibold text-primary">3.</span> In today's world, many health issues - from PCOS, infertility, and pregnancy complications to diabetes, weight gain, and burnout have roots in the way we live. Medicines can manage symptoms, but lasting change happens only when you address the root causes.
                </p>
                
                <p>
                  <span className="font-semibold text-primary">4.</span> We understand the unique pressures women face... the expectations, the multitasking, the silent battles with their bodies. That's why our mission is to walk beside you, guiding you with science-backed lifestyle medicine, the wisdom of our traditions, and practical tools you can actually use.
                </p>
                
                <p>
                  <span className="font-semibold text-primary">5.</span> Here, we ask you to keep an open mind, be ready to unlearn what no longer serves you, and embrace habits that match the needs of today's world while honoring the essence of our roots.
                </p>
                
                <p>
                  <span className="font-semibold text-primary">6.</span> Step by step, we'll help you build a life where your body feels energetic, your mind feels calm, and your heart feels supported.
                </p>
                
                <p className="font-semibold text-foreground">
                  <span className="text-primary">7.</span> At the core of Path'o'Life are 7 timeless, evidence-based pillars, the habits that shape your body, mind, and future at every stage of womanhood.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission and Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="animate-fade-in-up">
              <div className="flex items-center justify-center mb-6">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-foreground/30 to-transparent"></div>
                <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mx-8 leading-tight drop-shadow-lg">Our Mission and Vision</h2>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent via-foreground/30 to-transparent"></div>
              </div>
              
              <div className="space-y-8 text-lg text-muted-foreground font-inter leading-relaxed">
                <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
                  <p className="text-lg">
                    To create a space where every woman feels empowered, informed, and supported through every phase of her health journey. Our vision is a future where lifestyle medicine becomes the first step in every woman's care, not the last resort. A world where health care starts in the kitchen, in mindful movement, in deep rest, in emotional connection...long before it starts in the hospital. We dream of communities where women lead vibrant, energetic, and joyful lives, passing on these habits to their children and creating a ripple of health that lasts for decades.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7 Pillars of Health */}
      
      {/* 1. Nutrition */}
      <section className="py-16" style={{ backgroundColor: '#e9f5e9' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <img 
                  src="/photos/pillar1.png"
                  alt="Nutrition - What You Eat Heals You"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-2">Nutrition</h3>
                <p className="font-inter text-lg text-primary font-semibold mb-6">What You Eat Heals You</p>
                <div className="space-y-4 text-muted-foreground font-inter leading-relaxed">
                  <p>Your plate is your most powerful prescription. The right foods can balance your hormones, improve your fertility, protect your heart, boost your mood, and support every cell in your body.</p>
                  <p>At <span className="text-primary font-semibold">Path'o'Life</span>, we focus on whole, minimally processed, plant-rich, and seasonal foods. You'll learn how to create delicious, practical meals, from traditional Indian recipes to modern healthy bowls that nourish rather than just fill you.</p>
                  <p className="font-semibold text-foreground">No fad diets, no starvation, only food as medicine.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Movement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-2">Movement</h3>
                <p className="font-inter text-lg text-primary font-semibold mb-6">Move for Strength, Hormones, and Health</p>
                <div className="space-y-4 text-muted-foreground font-inter leading-relaxed">
                  <p>Movement is not just about burning calories, it's about building strength, improving metabolism, balancing hormones, and protecting your bones.</p>
                  <p>We guide you to combine strength training, cardio, flexibility, and mindful movement like yoga into your week, in ways that fit your life.</p>
                  <p className="font-semibold text-foreground">Even small, consistent changes from morning stretches to mindful walks create big results over time.</p>
                </div>
              </div>
              <div>
                <img 
                  src="/photos/pillar2.png"
                  alt="Movement – Move for Strength, Hormones, and Health"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Sleep */}
      <section className="py-16" style={{ backgroundColor: '#e9f5e9' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <img 
                  src="/photos/pillar3.png"
                  alt="Sleep – Rest to Heal, Reset, and Recharge"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-2">Sleep</h3>
                <p className="font-inter text-lg text-primary font-semibold mb-6">Rest to Heal, Reset, and Recharge</p>
                <div className="space-y-4 text-muted-foreground font-inter leading-relaxed">
                  <p>Sleep is your body's repair mode, the time when your hormones reset, immunity strengthens, and brain detox happens.</p>
                  <p className="font-semibold text-foreground">Without quality sleep, no diet or exercise can fully work.</p>
                  <p>We help you identify root causes of poor sleep - stress, screen use, late-night eating, caffeine and teach practical, science-backed ways to improve both sleep quality and quantity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Sexual Health */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-2">Sexual Health</h3>
                <p className="font-inter text-lg text-primary font-semibold mb-6">Knowledge, Confidence, and Comfort</p>
                <div className="space-y-4 text-muted-foreground font-inter leading-relaxed">
                  <p>In India, sexual health is often shrouded in silence, myths, and misinformation. Many women grow up without the knowledge to enjoy intimacy, maintain reproductive health, or seek help for common issues like pain, low desire, or discomfort.</p>
                  <p>We create a safe, respectful space to talk openly, learn the science of sexual health, and build confidence in your body and relationships.</p>
                  <p className="font-semibold text-foreground">Whether you're single, planning a pregnancy, or navigating menopause, sexual well-being matters at every stage.</p>
                </div>
              </div>
              <div>
                <img 
                  src="/photos/pillar4.png"
                  alt="Sexual Health – Knowledge, Confidence, and Comfort"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Stress Management */}
      <section className="py-16" style={{ backgroundColor: '#e9f5e9' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <img 
                  src="/photos/pillar5.png"
                  alt="Stress Management – Calm is a Superpower"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-2">Stress Management</h3>
                <p className="font-inter text-lg text-primary font-semibold mb-6">Calm is a Superpower</p>
                <div className="space-y-4 text-muted-foreground font-inter leading-relaxed">
                  <p>Stress is unavoidable, but how you respond to it can transform your health. Chronic stress can trigger hormonal imbalance, inflammation, digestive issues, anxiety, and more.</p>
                  <p>We use breathing practices, mindfulness, journaling, and practical daily rituals to help you shift from "fight or flight" to "rest and heal" mode. Your calm mind becomes your strongest health shield.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Social Connection */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-2">Social Connection</h3>
                <p className="font-inter text-lg text-primary font-semibold mb-6">Healing Happens in Community</p>
                <div className="space-y-4 text-muted-foreground font-inter leading-relaxed">
                  <p>Loneliness is as harmful as smoking 15 cigarettes a day. Yes, science says so.</p>
                  <p>Your relationships and sense of belonging directly influence your mental and physical health.</p>
                  <p>At <span className="text-primary font-semibold">Path'o'Life</span>, we encourage building supportive, uplifting connections, whether it's through family, friends, spiritual groups, or women's circles.</p>
                  <p className="font-semibold text-foreground">You'll see that when you heal together, you heal better.</p>
                </div>
              </div>
              <div>
                <img 
                  src="/photos/pillar6.png"
                  alt="Social Connection – Healing Happens in Community"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Avoiding Risky Substances */}
      <section className="py-16" style={{ backgroundColor: '#e9f5e9' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <img 
                  src="/photos/pillar7.png"
                  alt="Avoiding Risky Substances – Protect Your Body, Protect Your Future"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-2">Avoiding Risky Substances</h3>
                <p className="font-inter text-lg text-primary font-semibold mb-6">Protect Your Body, Protect Your Future</p>
                <div className="space-y-4 text-muted-foreground font-inter leading-relaxed">
                  <p>Alcohol, tobacco, recreational drugs, and even excessive caffeine can silently damage your hormones, fertility, immunity, and long-term health.</p>
                  <p>We help you understand the science of harm, explore healthier coping mechanisms, and make informed choices that protect your future, without judgment or fear-based tactics.</p>
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
                <a href="https://chat.whatsapp.com/DKx0P6Sv6aiIAGLNfMfi24" target="_blank" rel="noopener noreferrer" className="p-3 bg-primary/20 rounded-full hover:bg-primary hover:scale-110 transition-all duration-300 cursor-pointer group">
                  <svg className="h-6 w-6 text-primary group-hover:text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
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
                <p className="font-inter text-gray-400 text-sm mt-3 flex items-center justify-center gap-2">
                  <span>Partnered with</span> 
                  <a 
                    href="https://www.xpectrum-ai.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity duration-200"
                  >
                    <img src="/photos/XpectrumLogo.png" alt="Xpectrum-AI" className="h-10 w-auto object-contain" />
                  </a>
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