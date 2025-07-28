
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MessageCircle, Clock, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e9f5e9' }}>
      {/* Hero Section */}
      <section className="relative py-24 text-white overflow-hidden" style={{ backgroundColor: '#1a5f57' }}>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="relative container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
            <h1 className="font-playfair text-6xl md:text-7xl font-bold mb-6 leading-tight">Get in Touch</h1>
            <p className="font-inter text-xl md:text-2xl mb-10 opacity-90">We're here to support your wellness journey every step of the way</p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center mb-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-foreground/30 to-foreground/30"></div>
            <h2 className="font-playfair text-5xl font-bold text-foreground mx-8">Contact Information</h2>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-foreground/30 to-foreground/30"></div>
          </div>
            <p className="font-inter text-xl text-muted-foreground">Multiple ways to reach us for your wellness needs</p>
          </div>
          {/* Contact Details */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="flex items-start space-x-6 group animate-fade-in" style={{animationDelay: '100ms'}}>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-2">Email</h3>
                  <p className="font-inter text-muted-foreground">drpravina.patholife@gmail.com</p>
                  <p className="font-inter text-sm text-muted-foreground">We typically respond within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 group animate-fade-in" style={{animationDelay: '300ms'}}>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-2">WhatsApp</h3>
                  <p className="font-inter text-muted-foreground">+91 9421829899</p>
                  <p className="font-inter text-sm text-muted-foreground">Quick questions and community updates</p>
                </div>
              </div>
            </div>
          </div>

          {/* Forms Section */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card className="shadow-elevated hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-10">
                    <h2 className="font-playfair text-3xl font-bold text-foreground mb-8">Send us a Message</h2>
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-inter text-sm font-medium text-foreground mb-2">First Name</label>
                          <Input placeholder="Your first name" />
                        </div>
                        <div>
                          <label className="block font-inter text-sm font-medium text-foreground mb-2">Last Name</label>
                          <Input placeholder="Your last name" />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block font-inter text-sm font-medium text-foreground mb-2">Email</label>
                        <Input type="email" placeholder="your.email@example.com" />
                      </div>
                      
                      <div>
                        <label className="block font-inter text-sm font-medium text-foreground mb-2">Phone Number</label>
                        <Input type="tel" placeholder="+91 XXXXX XXXXX" />
                      </div>
                      
                      <div>
                        <label className="block font-inter text-sm font-medium text-foreground mb-2">Subject</label>
                        <Input placeholder="What's this about?" />
                      </div>
                      
                      <div>
                        <label className="block font-inter text-sm font-medium text-foreground mb-2">Message</label>
                        <Textarea 
                          placeholder="Tell us how we can help you..." 
                          rows={5}
                        />
                      </div>
                      
                      <Button variant="wellness" size="lg" className="w-full font-inter font-semibold">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Share Your Journey */}
              <div>
                <Card className="shadow-elevated hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-10">
                    <h2 className="font-playfair text-3xl font-bold text-foreground mb-8 flex items-center">
                      <span className="text-primary mr-3">+</span>
                      Share Your Journey
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <Textarea 
                          placeholder="Share your progress, ask questions, or celebrate wins with the community..." 
                          rows={6}
                          className="resize-none"
                        />
                      </div>
                      
                      <div className="flex flex-wrap gap-3">
                        <Button variant="outline" size="sm" className="font-inter font-medium">
                          Progress Update
                        </Button>
                        <Button variant="outline" size="sm" className="font-inter font-medium">
                          Question
                        </Button>
                        <Button variant="outline" size="sm" className="font-inter font-medium">
                          Success Story
                        </Button>
                      </div>
                      
                      <div className="flex justify-end">
                        <Button variant="wellness" size="lg" className="font-inter font-semibold">
                          Share
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Newsletter Section */}
      <section className="py-24 bg-foreground text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
            <div className="flex items-center justify-center mb-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/30 to-white/30"></div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mx-8">Stay Updated with Our Newsletter</h2>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-white/30 to-white/30"></div>
          </div>
            <p className="font-inter text-xl text-gray-300 mb-10">Get weekly wellness tips, healthy recipes, and motivation delivered to your inbox</p>
            
            <div className="bg-white/10 backdrop-blur-sm p-10 rounded-2xl shadow-xl max-w-2xl mx-auto border border-white/20">
              <div className="flex flex-col md:flex-row gap-4">
                <Input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Button variant="wellness" size="lg" className="font-inter font-semibold">
                  <Mail className="mr-2 h-4 w-4" />
                  Subscribe
                </Button>
              </div>
              <p className="font-inter text-sm text-gray-400 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
