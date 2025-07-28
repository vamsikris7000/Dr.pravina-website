import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, GraduationCap, Heart, Users, BookOpen, Microscope, PenTool, Brain } from "lucide-react";

const Founder = () => {
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
      <section className="relative py-24 text-white overflow-hidden" style={{ backgroundColor: '#1a5f57' }}>
        <div className="absolute inset-0 bg-black/10"></div>
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
                <span className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white font-inter text-sm md:text-base font-medium border border-white/20">
                  Pathologist
                </span>
                <span className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white font-inter text-sm md:text-base font-medium border border-white/20">
                  Dermatopathologist
                </span>
                <span className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white font-inter text-sm md:text-base font-medium border border-white/20">
                  Lifestyle Medicine Physician
                </span>
                <span className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white font-inter text-sm md:text-base font-medium border border-white/20">
                  Researcher
                </span>
                <span className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white font-inter text-sm md:text-base font-medium border border-white/20">
                  Medical Writer
                </span>
                <span className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white font-inter text-sm md:text-base font-medium border border-white/20">
                  National Athlete
                </span>
                <span className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white font-inter text-sm md:text-base font-medium border border-white/20">
                  Musician
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Highlights Carousel */}
      <section className="py-24 bg-foreground text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mx-8">Professional Highlights</h2>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent via-white/30 to-transparent"></div>
            </div>
            <p className="font-inter text-xl text-gray-300">Evidence-based credentials that make a difference</p>
          </div>
          
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex group" style={{ animation: 'scroll-left 60s linear infinite' }}>
                {/* First set of cards */}
                {professionalHighlights.map((highlight, index) => (
                  <div key={`first-${index}`} className="flex-shrink-0 w-80 mx-4">
                    <Card className="h-full bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group-hover:pause">
                      <CardContent className="p-6 text-center">
                        <div className={`w-16 h-16 bg-gradient-to-br ${highlight.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                          <highlight.icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="font-playfair text-lg font-bold text-white mb-3 leading-tight">
                          {highlight.title}
                        </h3>
                        <p className="font-inter text-sm text-gray-300 leading-relaxed">
                          {highlight.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
                
                {/* Duplicate set for seamless loop */}
                {professionalHighlights.map((highlight, index) => (
                  <div key={`second-${index}`} className="flex-shrink-0 w-80 mx-4">
                    <Card className="h-full bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group-hover:pause">
                      <CardContent className="p-6 text-center">
                        <div className={`w-16 h-16 bg-gradient-to-br ${highlight.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                          <highlight.icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="font-playfair text-lg font-bold text-white mb-3 leading-tight">
                          {highlight.title}
                        </h3>
                        <p className="font-inter text-sm text-gray-300 leading-relaxed">
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
    </div>
  );
};

export default Founder; 