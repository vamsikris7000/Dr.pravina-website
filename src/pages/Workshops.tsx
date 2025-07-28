
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Users, BookOpen } from "lucide-react";

const Workshops = () => {
  const workshops = [
    {
      title: "PCOS Lifestyle",
      subtitle: "Empower Your Hormones",
      description: "Comprehensive lifestyle strategies for managing PCOS, hormone balance, and improving fertility naturally through evidence-based nutrition and wellness practices."
    },
    {
      title: "Weight Management for Women",
      subtitle: "Science-Based Approach",
      description: "Understanding female metabolism, hormonal influences on weight, and sustainable lifestyle changes that work with your body's natural rhythms."
    },
    {
      title: "Fertility & Pre-Pregnancy",
      subtitle: "Prepare Your Body",
      description: "Optimize your fertility through nutrition, lifestyle modifications, and stress management techniques. Prepare your body for healthy conception and pregnancy."
    },
    {
      title: "Pregnancy Wellness",
      subtitle: "Nurture & Thrive",
      description: "Navigate pregnancy with confidence through proper nutrition, safe exercise, and lifestyle practices that support both mother and baby's health."
    },
    {
      title: "Lactation & Postpartum",
      subtitle: "Recovery & Bonding",
      description: "Support your postpartum recovery with nutrition for breastfeeding, managing postpartum changes, and establishing healthy routines with your baby."
    },
    {
      title: "Child Nutrition & Immunity",
      subtitle: "Foundation for Life",
      description: "Build strong immunity and healthy eating habits in children through age-appropriate nutrition, meal planning, and lifestyle practices for growing families."
    },
    {
      title: "Corporate Wellness for Working Women",
      subtitle: "Balance & Success",
      description: "Manage career stress, maintain work-life balance, and prioritize health while excelling professionally. Practical strategies for busy working women."
    },

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
            <h1 className="font-playfair text-6xl md:text-7xl font-bold mb-6 leading-tight">Path'o'Life Signature Workshops</h1>
            <p className="font-inter text-xl md:text-2xl mb-10 opacity-90">Live, interactive 3-hour transformative sessions</p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-10 max-w-3xl mx-auto">
              <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
                <Calendar className="h-6 w-6" />
                <span className="font-inter font-medium">Every Tuesday & Friday</span>
              </div>
              <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
                <Clock className="h-6 w-6" />
                <span className="font-inter font-medium">5:30 – 8:30 PM</span>
              </div>
              <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
                <Users className="h-6 w-6" />
                <span className="font-inter font-medium">Google Meet</span>
              </div>
            </div>

            <p className="font-inter text-lg mb-10 opacity-90">
              🎓 Includes checklists, toolkits, Q&A | 🎤 English-Marathi mix
            </p>
            <div className="max-w-2xl mx-auto mt-10">
              <p className="font-playfair text-2xl md:text-3xl font-semibold mb-4 text-white">🎯 Ready to take the first step toward healing?</p>
              <p className="font-inter text-lg mb-8 text-white">Choose your workshop and join us live from the comfort of your home.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops Grid */}
      <section className="py-24" style={{ backgroundColor: '#e9f5e9' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {workshops.map((workshop, index) => (
              <Card key={index} className="group hover:shadow-elevated hover:-translate-y-1 transition-all duration-500 animate-fade-in mb-8" style={{animationDelay: `${index * 100}ms`}}>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-glow transition-all duration-300">
                      <BookOpen className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-playfair text-xl font-bold text-foreground">{workshop.title}</h3>
                      <p className="font-inter text-primary font-semibold">{workshop.subtitle}</p>
                    </div>
                  </div>
                  <p className="font-inter text-muted-foreground mb-6 leading-relaxed">{workshop.description}</p>
                  <Button variant="soft" size="lg" className="w-full bg-white/95 text-primary hover:bg-white hover:text-primary font-inter font-semibold backdrop-blur-sm border border-primary/20">
                    Register for This Workshop
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center mb-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-foreground/30 to-foreground/30"></div>
            <h2 className="font-playfair text-5xl font-bold text-foreground mx-8">How Our Workshops Work</h2>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-foreground/30 to-foreground/30"></div>
          </div>
            <p className="font-inter text-xl text-muted-foreground">Simple steps to transform your wellness journey</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center group animate-fade-in" style={{animationDelay: '100ms'}}>
              <div className="w-18 h-18 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">1</div>
              <h3 className="font-playfair text-xl font-bold text-foreground mb-3">Register Online</h3>
              <p className="font-inter text-muted-foreground">Choose your workshop and secure your spot with easy online registration</p>
            </div>
            <div className="text-center group animate-fade-in" style={{animationDelay: '200ms'}}>
              <div className="w-18 h-18 bg-gradient-to-br from-success to-success/80 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">2</div>
              <h3 className="font-playfair text-xl font-bold text-foreground mb-3">Join Live Session</h3>
              <p className="font-inter text-muted-foreground">Attend the 3-hour interactive session via Google Meet with Q&A</p>
            </div>
            <div className="text-center group animate-fade-in" style={{animationDelay: '300ms'}}>
              <div className="w-18 h-18 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">3</div>
              <h3 className="font-playfair text-xl font-bold text-foreground mb-3">Get Resources</h3>
              <p className="font-inter text-muted-foreground">Receive comprehensive toolkits, checklists, and actionable materials</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-foreground text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 leading-tight">Ready to Transform Your Wellness?</h2>
            <p className="font-inter text-xl mb-10 text-gray-300">Register for a workshop today and start your journey with Path'o'Life</p>
            <div className="flex flex-col lg:flex-row gap-6 justify-center">
              <Button variant="soft" size="xl" className="bg-white/95 text-primary hover:bg-primary hover:text-white font-inter font-semibold backdrop-blur-sm border border-white/20">
                <Calendar className="mr-3 h-5 w-5" />
                Register for Workshop
              </Button>
              <Button variant="soft" size="xl" className="bg-white/95 text-primary hover:bg-primary hover:text-white font-inter font-semibold backdrop-blur-sm border border-white/20">
                View All Wellness Plans
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Workshops;
