
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Users, BookOpen, CheckCircle } from "lucide-react";
import { chatbotEvents } from "@/lib/chatbot-events";
import { useWorkshops } from "@/contexts/WorkshopContext";

const Workshops = () => {
  const { workshops } = useWorkshops();
  
  const handleWorkshopRegistration = (workshopTitle: string) => {
    const message = `Hi, I want to register for the ${workshopTitle} workshop`;
    chatbotEvents.openChat(message);
  };

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
            
            <div className="grid md:grid-cols-2 gap-8 mb-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 min-h-[80px]">
                <Clock className="h-6 w-6" />
                <span className="font-inter font-medium">🕒 2-hour deep-dive workshops</span>
              </div>
              <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 min-h-[80px]">
                <Users className="h-6 w-6" />
                <span className="font-inter font-medium">📍 Live on Google Meet</span>
              </div>

            </div>

            <div className="max-w-2xl mx-auto text-center">
              <p className="font-inter text-lg text-white/90">
                🎁 Includes: Downloadable checklists & lifestyle toolkits
              </p>
              <p className="font-inter text-lg text-white/90">
                Q&A's
              </p>
              <p className="font-inter text-lg text-white/90">
                Free resources you'll actually use
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
              <Card key={index} className="group hover:shadow-elevated hover:-translate-y-2 transition-all duration-500 animate-fade-in mb-8 overflow-hidden border-0 shadow-lg" style={{animationDelay: `${index * 100}ms`}}>
                <CardContent className="p-8 bg-gradient-to-br from-white to-gray-50/50">
                  <div className="flex items-start mb-8">
                    <div className="mr-6 flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-full flex items-center justify-center shadow-sm">
                        <span className="text-3xl">{workshop.emoji}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">{workshop.title}</h3>
                      <p className="font-inter text-primary font-semibold text-lg mb-2">{workshop.subtitle}</p>
                      <div className="inline-flex items-center px-3 py-1 bg-primary/10 rounded-full">
                        <span className="text-primary text-sm font-medium">{workshop.audience}</span>
                      </div>
                    </div>
                    {/* Timing Information - Right Side */}
                    <div className="ml-6 flex-shrink-0 text-right">
                      <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                        <div className="flex items-center justify-center mb-2">
                          <Calendar className="h-4 w-4 text-primary mr-2" />
                          <span className="font-inter text-sm font-semibold text-primary">{workshop.day}</span>
                        </div>
                        <div className="flex items-center justify-center">
                          <Clock className="h-4 w-4 text-primary mr-2" />
                          <span className="font-inter text-sm font-semibold text-primary">{workshop.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6 max-h-0 group-hover:max-h-96 transition-all duration-500 overflow-hidden">
                    {workshop.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary stroke-2 flex-shrink-0 mt-0.5" />
                        <span className="font-inter text-muted-foreground leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    variant="soft" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-primary to-primary/90 text-white hover:from-primary/90 hover:to-primary font-inter font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border-0"
                    onClick={() => handleWorkshopRegistration(workshop.title)}
                  >
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

          </div>
        </div>
      </section>
    </div>
  );
};

export default Workshops;

