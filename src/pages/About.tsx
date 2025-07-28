
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Award, Heart, BookOpen } from "lucide-react";



const About = () => {
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
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="order-2 lg:order-1 animate-scale-in">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse-glow"></div>
                <img 
                  src="/photos/founder.png" 
                  alt="Dr. Pravina Kale" 
                  className="relative w-full max-w-md mx-auto rounded-2xl shadow-elevated hover:shadow-glow transition-all duration-500 hover:scale-105"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 animate-fade-in-up">
              <div className="flex items-center justify-center mb-8">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-foreground/30 to-foreground/30"></div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mx-8 leading-tight">Her Journey</h2>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent via-foreground/30 to-foreground/30"></div>
            </div>
              <p className="font-inter text-lg text-muted-foreground mb-6 leading-relaxed">
                Dr. Pravina Kale's path from pathology to lifestyle medicine represents a profound shift from treating disease to preventing it. After years of diagnosing ailments under the microscope, she realized the true power lies in empowering women to take control of their health through lifestyle choices.
              </p>
              <p className="font-inter text-lg text-muted-foreground mb-8 leading-relaxed">
                As a certified Lifestyle Medicine physician and pathologist, Dr. Pravina combines clinical expertise with evidence-based wellness strategies, making complex medical knowledge accessible and actionable for every woman.
              </p>
              <Button variant="wellness" size="lg" className="font-inter font-semibold">
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>



      {/* Qualifications */}
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Award, title: "MD Pathology", desc: "Medical expertise in disease diagnosis", color: "from-amber-400 to-orange-500" },
              { icon: Star, title: "Lifestyle Medicine Certified", desc: "Evidence-based wellness approach", color: "from-purple-400 to-purple-600" },
              { icon: Heart, title: "Women's Health Specialist", desc: "PCOS, fertility, pregnancy care", color: "from-pink-400 to-rose-500" },
              { icon: BookOpen, title: "Corporate Wellness Expert", desc: "Stress management for working women", color: "from-blue-400 to-blue-600" }
            ].map((qual, index) => (
              <Card key={index} className="text-center group hover:shadow-elevated hover:-translate-y-2 transition-all duration-500 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${qual.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-glow transition-all duration-300`}>
                      <qual.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-3">{qual.title}</h3>
                  <p className="font-inter text-muted-foreground">{qual.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
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
