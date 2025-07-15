
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Users, BookOpen } from "lucide-react";

const Workshops = () => {
  const workshops = [
    {
      title: "PCOS Lifestyle",
      subtitle: "Empower Your Hormones",
      description: "Comprehensive lifestyle strategies for managing PCOS, hormone balance, and improving fertility naturally through evidence-based nutrition and wellness practices.",
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "Weight Management for Women",
      subtitle: "Science-Based Approach",
      description: "Understanding female metabolism, hormonal influences on weight, and sustainable lifestyle changes that work with your body's natural rhythms.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Fertility & Pre-Pregnancy",
      subtitle: "Prepare Your Body",
      description: "Optimize your fertility through nutrition, lifestyle modifications, and stress management techniques. Prepare your body for healthy conception and pregnancy.",
      color: "from-green-400 to-green-600"
    },
    {
      title: "Pregnancy Wellness",
      subtitle: "Nurture & Thrive",
      description: "Navigate pregnancy with confidence through proper nutrition, safe exercise, and lifestyle practices that support both mother and baby's health.",
      color: "from-emerald-400 to-teal-500"
    },
    {
      title: "Lactation & Postpartum",
      subtitle: "Recovery & Bonding",
      description: "Support your postpartum recovery with nutrition for breastfeeding, managing postpartum changes, and establishing healthy routines with your baby.",
      color: "from-orange-400 to-red-500"
    },
    {
      title: "Child Nutrition & Immunity",
      subtitle: "Foundation for Life",
      description: "Build strong immunity and healthy eating habits in children through age-appropriate nutrition, meal planning, and lifestyle practices for growing families.",
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Corporate Wellness for Working Women",
      subtitle: "Balance & Success",
      description: "Manage career stress, maintain work-life balance, and prioritize health while excelling professionally. Practical strategies for busy working women.",
      color: "from-gray-500 to-gray-700"
    },
    {
      title: "Emotional & Mental Wellness",
      subtitle: "Mind-Body Connection",
      description: "Understanding the connection between emotional health and physical wellness. Stress management, mindfulness, and building resilience through life's challenges.",
      color: "from-pink-400 to-rose-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-bg">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-hero text-white overflow-hidden">
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

            <p className="font-inter text-lg mb-10 opacity-90">🎓 Includes checklists, toolkits, Q&A | 🎤 English-Marathi mix</p>
            
            <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
              <Button variant="soft" size="xl" className="bg-white/95 text-primary hover:bg-white hover:text-primary font-inter font-semibold backdrop-blur-sm border border-white/20">
                <Calendar className="mr-3 h-5 w-5" />
                Register for Workshop
              </Button>
              <Button variant="soft" size="xl" className="bg-white/95 text-primary hover:bg-white hover:text-primary font-inter font-semibold backdrop-blur-sm border border-white/20">
                <Users className="mr-3 h-5 w-5" />
                Join WhatsApp Community
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {workshops.map((workshop, index) => (
              <Card key={index} className="group hover:shadow-elevated hover:-translate-y-2 transition-all duration-500 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <CardContent className="p-10">
                  <div className="relative mb-8">
                    <div className={`w-20 h-20 bg-gradient-to-br ${workshop.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300`}>
                      <BookOpen className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="font-playfair text-2xl md:text-3xl font-bold text-foreground mb-3">{workshop.title}</h3>
                  <p className="font-inter text-primary font-semibold mb-6 text-lg">{workshop.subtitle}</p>
                  <p className="font-inter text-muted-foreground mb-8 leading-relaxed">{workshop.description}</p>
                  <Button variant="wellness" size="lg" className="w-full font-inter font-semibold">
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
            <h2 className="font-playfair text-5xl font-bold text-foreground mb-6">How Our Workshops Work</h2>
            <p className="font-inter text-xl text-muted-foreground">Simple steps to transform your wellness journey</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center group animate-fade-in" style={{animationDelay: '100ms'}}>
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">1</div>
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">Register Online</h3>
              <p className="font-inter text-muted-foreground leading-relaxed">Choose your workshop and secure your spot with easy online registration</p>
            </div>
            <div className="text-center group animate-fade-in" style={{animationDelay: '200ms'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-success to-success/80 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">2</div>
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">Join Live Session</h3>
              <p className="font-inter text-muted-foreground leading-relaxed">Attend the 3-hour interactive session via Google Meet with Q&A</p>
            </div>
            <div className="text-center group animate-fade-in" style={{animationDelay: '300ms'}}>
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">3</div>
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">Get Resources</h3>
              <p className="font-inter text-muted-foreground leading-relaxed">Receive comprehensive toolkits, checklists, and actionable materials</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Workshops;
