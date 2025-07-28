
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Users, BookOpen } from "lucide-react";

const Workshops = () => {
  const workshops = [
    {
      title: "🌸 PCOS Unplugged",
      subtitle: "Your Hormones, Hair, Skin & Sanity",
      audience: "For Teens & Young Women",
      features: [
        "Decode your hormones & cycle",
        "Period problems & PCOS types", 
        "Skin, hair, mood & weight tips",
        "Menstrual cup basics & hygiene",
        "PCOS-friendly food & movement",
        "Cycle syncing & stress hacks"
      ]
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
            <h1 className="font-playfair text-6xl md:text-7xl font-bold mb-6 leading-tight">✨ Path'o'Life Signature Workshops</h1>
            <p className="font-inter text-xl md:text-2xl mb-8 opacity-90">Live • Interactive • Transformational Sessions for Every Phase of Womanhood</p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8 max-w-5xl mx-auto">
              <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 min-h-[80px]">
                <Clock className="h-6 w-6" />
                <span className="font-inter font-medium">🕒 2-hour deep-dive workshops</span>
              </div>
              <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 min-h-[80px]">
                <Users className="h-6 w-6" />
                <span className="font-inter font-medium">📍 Live on Google Meet | 🗓️ Flexible slots</span>
              </div>
              <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 min-h-[80px]">
                <Calendar className="h-6 w-6" />
                <span className="font-inter font-medium">🗣️ Available in English • Hindi • Marathi</span>
              </div>
            </div>

            <div className="max-w-2xl mx-auto">
              <p className="font-inter text-lg text-white/90">
                🎁 Includes: • Downloadable checklists & lifestyle toolkits
              </p>
              <p className="font-inter text-lg text-white/90 ml-8">
                • Expert Q&A
              </p>
              <p className="font-inter text-lg text-white/90 ml-8">
                • Free resources you'll actually use
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12" style={{ backgroundColor: '#e9f5e9' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-playfair text-3xl md:text-4xl font-semibold mb-4 text-foreground">
              💫 Your journey to healing starts here.
            </p>
            <p className="font-inter text-lg text-muted-foreground">
              Choose your workshop and join us live from the comfort of your home.
            </p>
          </div>
        </div>
      </section>

      {/* Workshops Grid */}
      <section className="pt-8 pb-24" style={{ backgroundColor: '#e9f5e9' }}>
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
                      <p className="font-inter text-sm text-muted-foreground mt-1">{workshop.audience}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {workshop.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <span className="text-primary mt-1">•</span>
                        <span className="font-inter text-muted-foreground leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
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

