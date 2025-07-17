
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MessageCircle, Clock, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F6E7E0' }}>
      {/* Hero Section */}
      <section className="relative py-24 text-white overflow-hidden" style={{ backgroundColor: '#338B81' }}>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="relative container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
            <h1 className="font-playfair text-6xl md:text-7xl font-bold mb-6 leading-tight">Get in Touch</h1>
            <p className="font-inter text-xl md:text-2xl mb-10 opacity-90">We're here to support your wellness journey every step of the way</p>
            <Button variant="soft" size="xl" className="bg-white/95 text-primary hover:bg-white hover:text-primary font-inter font-semibold backdrop-blur-sm border border-white/20">
              <MessageCircle className="mr-3 h-5 w-5" />
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-playfair text-5xl font-bold text-foreground mb-6">Contact Information</h2>
            <p className="font-inter text-xl text-muted-foreground">Multiple ways to reach us for your wellness needs</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Details */}
            <div className="space-y-8">
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
              
              <div className="flex items-start space-x-6 group animate-fade-in" style={{animationDelay: '200ms'}}>
                <div className="w-16 h-16 bg-gradient-to-br from-success to-success/80 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-2">Phone</h3>
                  <p className="font-inter text-muted-foreground">+91 9421829899</p>
                  <p className="font-inter text-sm text-muted-foreground">Available Monday to Friday, 9 AM - 6 PM</p>
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
              
              <div className="flex items-start space-x-6 group animate-fade-in" style={{animationDelay: '400ms'}}>
                <div className="w-16 h-16 bg-gradient-to-br from-success to-success/80 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-2">Office Hours</h3>
                  <p className="font-inter text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="font-inter text-muted-foreground">Saturday: 9:00 AM - 2:00 PM</p>
                  <p className="font-inter text-muted-foreground">Sunday: Closed</p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-playfair text-2xl font-bold text-foreground mb-6">Quick Actions</h3>
                <div className="flex flex-col space-y-4">
                  <Button variant="wellness" size="lg" className="justify-start font-inter font-semibold">
                    <MessageCircle className="mr-3 h-5 w-5" />
                    Join WhatsApp Community
                  </Button>
                  <Button variant="outline" size="lg" className="justify-start font-inter font-semibold">
                    <Phone className="mr-3 h-5 w-5" />
                    Book a Consultation
                  </Button>
                </div>
              </div>
            </div>

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
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-playfair text-5xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <p className="font-inter text-xl text-muted-foreground">Common questions about our services and processes</p>
          </div>
          <div className="max-w-5xl mx-auto space-y-6">
            <Card className="group hover:shadow-elevated transition-all duration-300 animate-fade-in" style={{animationDelay: '100ms'}}>
              <CardContent className="p-8">
                <h3 className="font-playfair text-xl font-bold text-foreground mb-3">How quickly can I expect a response?</h3>
                <p className="font-inter text-muted-foreground">We typically respond to emails within 24 hours during business days. For urgent matters, please call or WhatsApp us directly.</p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-elevated transition-all duration-300 animate-fade-in" style={{animationDelay: '200ms'}}>
              <CardContent className="p-8">
                <h3 className="font-playfair text-xl font-bold text-foreground mb-3">Do you offer consultations in languages other than English?</h3>
                <p className="font-inter text-muted-foreground">Yes! Our sessions are conducted in an English-Marathi mix, and Dr. Pravina is comfortable communicating in both languages.</p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-elevated transition-all duration-300 animate-fade-in" style={{animationDelay: '300ms'}}>
              <CardContent className="p-8">
                <h3 className="font-playfair text-xl font-bold text-foreground mb-3">Can I get a refund if I'm not satisfied?</h3>
                <p className="font-inter text-muted-foreground">We stand behind our services. If you're not satisfied within the first week of any program, please contact us to discuss your concerns.</p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-elevated transition-all duration-300 animate-fade-in" style={{animationDelay: '400ms'}}>
              <CardContent className="p-8">
                <h3 className="font-playfair text-xl font-bold text-foreground mb-3">Are your services covered by insurance?</h3>
                <p className="font-inter text-muted-foreground">Currently, our lifestyle medicine services are not covered by insurance. However, we offer flexible payment options and affordable plans.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 text-white" style={{ backgroundColor: '#338B81' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 leading-tight">Our Practice</h2>
            <div className="flex items-center justify-center space-x-3 mb-6">
              <MapPin className="h-8 w-8 text-white" />
              <p className="font-inter text-xl opacity-90">Serving women across India through online consultations</p>
            </div>
            <p className="font-inter text-lg mb-10 max-w-3xl mx-auto opacity-90">
              While our consultations are conducted online, our impact reaches women across India. 
              We believe that quality healthcare should be accessible regardless of location.
            </p>
            <div className="flex flex-col lg:flex-row gap-6 justify-center">
              <Button variant="soft" size="xl" className="bg-white/95 text-primary hover:bg-primary hover:text-white font-inter font-semibold backdrop-blur-sm border border-white/20">
                Schedule Your Online Consultation
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

export default Contact;
