
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Award, Heart, BookOpen, GraduationCap, Users, Microscope, PenTool, Brain } from "lucide-react";

const About = () => {
  const professionalHighlights = [
    {
      icon: GraduationCap,
      title: "MBBS MD (Pathology)",
      description: "Medical expertise in disease diagnosis",
      color: "from-orange-400 to-orange-600"
    },
    {
      icon: Award,
      title: "Diplomate, International Board of Lifestyle Medicine (USA)",
      description: "Evidence-based wellness approach",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: Award,
      title: "Certified in Lifestyle Medicine from Harvard University",
      description: "World-class medical education",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Award,
      title: "Certified in Lifestyle & Health from British Nutrition Foundation",
      description: "Nutrition and wellness expertise",
      color: "from-green-400 to-green-600"
    },
    {
      icon: Microscope,
      title: "Certified in Dermatopathology",
      description: "Specialized skin pathology expertise",
      color: "from-pink-400 to-pink-600"
    },
    {
      icon: Users,
      title: "Chairperson Clinical Services, Indian Society of Lifestyle Medicine (ISLM)",
      description: "Leadership in lifestyle medicine",
      color: "from-indigo-400 to-indigo-600"
    },
    {
      icon: Heart,
      title: "Expert in Women's Health, Hormones, Fertility, Pregnancy, Postpartum, Lactation & Child Health",
      description: "Comprehensive women's healthcare",
      color: "from-red-400 to-red-600"
    },
    {
      icon: PenTool,
      title: "Medical Writer at Physicians Association for Nutrition (PAN) India",
      description: "Medical communication expertise",
      color: "from-teal-400 to-teal-600"
    },
    {
      icon: Brain,
      title: "Research & Artificial Intelligence in Healthcare",
      description: "Innovation in medical technology",
      color: "from-cyan-400 to-cyan-600"
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
          <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
            <h1 className="font-playfair text-6xl md:text-7xl font-bold mb-8 leading-tight">Meet the Founder</h1>
            
            <div className="space-y-6 mb-10">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
                Dr. Pravina Kale Shegokar
              </h2>
              
              <p className="font-inter text-xl md:text-2xl text-white/95 mb-6">
                MBBS, MD (Pathology), DipIBLM (USA)
              </p>
              
              <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
                <span className="px-5 py-3 bg-gradient-to-r from-white/25 to-white/15 backdrop-blur-md rounded-full text-white font-inter text-sm md:text-base font-semibold border border-white/30 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Pathologist
                </span>
                <span className="px-5 py-3 bg-gradient-to-r from-white/25 to-white/15 backdrop-blur-md rounded-full text-white font-inter text-sm md:text-base font-semibold border border-white/30 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Dermatopathologist
                </span>
                <span className="px-5 py-3 bg-gradient-to-r from-white/25 to-white/15 backdrop-blur-md rounded-full text-white font-inter text-sm md:text-base font-semibold border border-white/30 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Lifestyle Medicine Physician
                </span>
                <span className="px-5 py-3 bg-gradient-to-r from-white/25 to-white/15 backdrop-blur-md rounded-full text-white font-inter text-sm md:text-base font-semibold border border-white/30 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Researcher
                </span>
                <span className="px-5 py-3 bg-gradient-to-r from-white/25 to-white/15 backdrop-blur-md rounded-full text-white font-inter text-sm md:text-base font-semibold border border-white/30 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Medical Writer
                </span>
                <span className="px-5 py-3 bg-gradient-to-r from-white/25 to-white/15 backdrop-blur-md rounded-full text-white font-inter text-sm md:text-base font-semibold border border-white/30 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  National Athlete
                </span>
                <span className="px-5 py-3 bg-gradient-to-r from-white/25 to-white/15 backdrop-blur-md rounded-full text-white font-inter text-sm md:text-base font-semibold border border-white/30 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Musician
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Dr. Pravina */}
      <section className="py-24" style={{ backgroundColor: '#e9f5e9' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight text-center">Her Journey</h2>
            
            <div className="relative">
              <div className="float-left mr-8 mb-6 animate-scale-in">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse-glow"></div>
                  <img 
                    src="/photos/founder1.png" 
                    alt="Dr. Pravina Kale" 
                    className="relative w-80 h-auto rounded-2xl shadow-elevated hover:shadow-glow transition-all duration-500 hover:scale-105"
                  />
                </div>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p className="font-inter text-base leading-relaxed">
                  I once dreamt of becoming a <span className="font-semibold text-foreground">Pediatrician & Neonatologist</span> to hold tiny lives in my hands. I wanted to be an <span className="font-semibold text-foreground">OBGYN</span> to empower women during their most transformative phases. But my own body taught me a deeper lesson.
                </p>
                
                <p className="font-inter text-base leading-relaxed">
                  As a pathologist and lifestyle medicine physician, I've spent years understanding disease under the microscope. But what truly lights me up is helping women <span className="font-semibold text-foreground">prevent disease, reclaim their health, and rediscover their power</span> through lifestyle.
                </p>
                
                <p className="font-inter text-base leading-relaxed">
                  So many women suffer silently from irregular periods, fertility struggles, weight battles, postpartum challenges, or simply the exhaustion of doing it all alone. What they often need isn't just a prescription. They need <span className="font-semibold text-foreground">education, guidance, and hand-holding</span>.
                </p>
                
                <p className="font-inter text-base leading-relaxed">
                  That's why I created <span className="font-playfair font-bold text-primary">Path'o'Life</span> - a safe, supportive space where science meets real life solutions. Where women aren't told what to do, but are empowered to make choices aligned with their unique phase of life.
                </p>
                
                <p className="font-inter text-base leading-relaxed">
                  Through my workshops, consultations, and programs, my goal is to be:
                </p>
                
                <div className="space-y-2 ml-6 mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">🩺</span>
                    <span className="font-inter text-base font-medium">A guiding hand</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">🩺</span>
                    <span className="font-inter text-base font-medium">A voice of reason</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">🩺</span>
                    <span className="font-inter text-base font-medium">A doctor who reminds you ... you are not alone.</span>
                  </div>
                </div>
                
                <p className="font-inter text-base leading-relaxed">
                  I believe women don't just need medicines. They need <span className="font-semibold text-foreground">clarity, connection, and care</span>. Because science should empower, not overwhelm. And small, meaningful lifestyle changes have the power to transform a woman's hormones, health, and happiness and through her, generations to come.
                </p>
              </div>
              

            </div>
          </div>
        </div>
      </section>

      {/* Professional Highlights Carousel */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center mb-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-foreground/30 to-foreground/30"></div>
            <h2 className="font-playfair text-5xl font-bold text-foreground mx-8">Qualifications & Expertise</h2>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-foreground/30 to-foreground/30"></div>
          </div>
            <p className="font-inter text-xl text-muted-foreground">Evidence-based credentials that make a difference</p>
          </div>
          
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex group" style={{ animation: 'scroll-left 20s linear infinite' }}>
                {/* First set of cards */}
                {professionalHighlights.map((highlight, index) => (
                  <div key={`first-${index}`} className="flex-shrink-0 w-80 mx-4">
                    <Card className="h-full bg-white shadow-lg border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105 group-hover:pause">
                      <CardContent className="p-6 text-center">
                        <div className={`w-16 h-16 bg-gradient-to-br ${highlight.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
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
                {professionalHighlights.map((highlight, index) => (
                  <div key={`second-${index}`} className="flex-shrink-0 w-80 mx-4">
                    <Card className="h-full bg-white shadow-lg border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105 group-hover:pause">
                      <CardContent className="p-6 text-center">
                        <div className={`w-16 h-16 bg-gradient-to-br ${highlight.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
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

      {/* Philosophy */}
      <section className="py-24 bg-foreground text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-16 text-white">Philosophy: Evidence, Empathy, Empowerment</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-white mb-3">Evidence</h3>
                <p className="font-inter text-gray-300 text-lg text-center">Every recommendation is backed by scientific research and proven medical principles</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6">
                  <Heart className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-white mb-3">Empathy</h3>
                <p className="font-inter text-gray-300 text-lg text-center">Understanding that every woman's journey is unique and deserves compassionate support</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6">
                  <BookOpen className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-white mb-3">Empowerment</h3>
                <p className="font-inter text-gray-300 text-lg text-center">Providing women with knowledge and tools to take control of their health and well-being</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
