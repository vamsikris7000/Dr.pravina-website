
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Award, Heart, BookOpen } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-bg">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="font-playfair text-6xl md:text-7xl font-bold mb-6 leading-tight">Meet Dr. Pravina Kale</h1>
            <p className="font-inter text-xl md:text-2xl mb-8 opacity-90">Lifestyle Medicine Physician, Pathologist & Women's Wellness Expert</p>
          </div>
        </div>
      </section>

      {/* About Dr. Pravina */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="order-2 lg:order-1 animate-scale-in">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse-glow"></div>
                <img 
                  src="/lovable-uploads/b6aeaa4f-b346-4225-81f7-15c3c238960f.png" 
                  alt="Dr. Pravina Kale" 
                  className="relative w-full max-w-md mx-auto rounded-2xl shadow-elevated hover:shadow-glow transition-all duration-500 hover:scale-105"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 animate-fade-in-up">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">Her Journey</h2>
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
            <h2 className="font-playfair text-5xl font-bold text-foreground mb-6">Qualifications & Expertise</h2>
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
      <section className="py-24 bg-gradient-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-12">Her Philosophy</h2>
            <blockquote className="relative bg-white p-12 rounded-3xl shadow-elevated hover:shadow-glow transition-all duration-500 hover:-translate-y-1 mb-12 group">
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <span className="text-3xl text-white font-bold">"</span>
              </div>
              <p className="font-inter text-xl md:text-2xl text-foreground italic leading-relaxed group-hover:text-primary transition-colors duration-300">
                "Every woman deserves to feel powerful in her own body. My mission is not just to treat symptoms, but to educate and empower women to make lifestyle choices that prevent disease and enhance vitality through every phase of life."
              </p>
            </blockquote>
            <p className="font-inter text-lg text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
              Dr. Pravina believes in the intersection of science and support—where clinical knowledge meets compassionate guidance, helping women navigate their health journey with confidence and clarity.
            </p>
            <Button variant="premium" size="xl" className="font-inter font-semibold">
              Join Our Community
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
