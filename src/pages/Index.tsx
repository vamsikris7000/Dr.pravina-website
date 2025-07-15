
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Mail, BookOpen, Heart, Star, Users, Phone, Instagram, Facebook, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-bg">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
        
        {/* Floating decoration elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
        
        <div className="relative container mx-auto px-6 py-24 text-center">
          <div className="mb-12 animate-fade-in-up">
            <div className="mb-8 relative">
              <img 
                src="/lovable-uploads/68d9c8ae-c9bc-4365-b332-ec694fda90af.png" 
                alt="Path'o'Life Logo" 
                className="w-36 h-36 mx-auto mb-8 animate-scale-in"
              />
              <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl opacity-50 animate-pulse-glow"></div>
            </div>
            <h1 className="font-playfair text-6xl md:text-7xl font-bold mb-6 text-white leading-tight">
              Path'o'Life
            </h1>
            <p className="font-inter text-2xl md:text-3xl mb-4 font-medium">Women's Wellness by Dr. Pravina</p>
            <p className="font-inter text-xl opacity-95 max-w-3xl mx-auto leading-relaxed">Lifestyle Medicine for Every Phase of Womanhood</p>
            <p className="font-inter text-lg opacity-85 mt-4 max-w-4xl mx-auto">From Periods to Parenting — Explore Wellness with Dr. Pravina Kale</p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center max-w-5xl mx-auto animate-slide-in-right">
            <Link to="/workshops">
              <Button variant="soft" size="xl" className="bg-white/95 text-primary hover:bg-white hover:text-primary font-inter font-semibold backdrop-blur-sm border border-white/20">
                <Calendar className="mr-3 h-5 w-5" />
                Join Our Next Workshop
              </Button>
            </Link>
            <Link to="/consultations">
              <Button variant="soft" size="xl" className="bg-white/95 text-primary hover:bg-white hover:text-primary font-inter font-semibold backdrop-blur-sm border border-white/20">
                <Heart className="mr-3 h-5 w-5" />
                Book a 1:1 Consultation
              </Button>
            </Link>
            <Link to="/wellness-plans">
              <Button variant="soft" size="xl" className="bg-white/95 text-primary hover:bg-white hover:text-primary font-inter font-semibold backdrop-blur-sm border border-white/20">
                <BookOpen className="mr-3 h-5 w-5" />
                Explore Wellness Plans
              </Button>
            </Link>
            <Link to="/community">
              <Button variant="soft" size="xl" className="bg-white/95 text-primary hover:bg-white hover:text-primary font-inter font-semibold backdrop-blur-sm border border-white/20">
                <Users className="mr-3 h-5 w-5" />
                Join WhatsApp Community
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in order-2 lg:order-1">
              <div className="relative w-96 h-96 mx-auto">
                <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-20 animate-pulse-glow"></div>
                <div className="relative w-full h-full bg-gradient-primary rounded-full flex items-center justify-center shadow-2xl">
                  <div className="w-80 h-80 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-7xl font-bold font-playfair border border-white/20">
                    Dr. P
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-up order-1 lg:order-2">
              <div className="space-y-6">
                <h2 className="font-playfair text-5xl font-bold text-foreground leading-tight">Welcome to Path'o'Life</h2>
                <h3 className="font-inter text-3xl text-primary font-semibold">Empowering Women Through Every Life Phase</h3>
                <p className="font-inter text-xl text-muted-foreground leading-relaxed">
                  From the first period to planning a pregnancy, from postpartum to parenting, and even through career and corporate stress—we support every phase of womanhood with evidence-based lifestyle medicine.
                </p>
                <div className="pt-4">
                  <Link to="/community">
                    <Button variant="wellness" size="lg" className="font-inter font-semibold">
                      <Users className="mr-3 h-5 w-5" />
                      Join Our Community
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="py-24 bg-gradient-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 animate-fade-in-up">
                <div className="space-y-8">
                  <h2 className="font-playfair text-4xl font-bold text-foreground leading-tight">Dr. Pravina Kale, Founder & CEO</h2>
                  <blockquote className="relative bg-white p-10 rounded-2xl shadow-xl border border-border">
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-2xl text-white font-bold">"</span>
                    </div>
                    <p className="font-inter text-lg text-foreground leading-relaxed italic">
                      As a lifestyle medicine physician and pathologist, I've spent years understanding disease—but what truly lights me up is helping women prevent it and reclaim their power through lifestyle.
                    </p>
                    <p className="font-inter text-lg text-foreground leading-relaxed italic mt-6">
                      So many women suffer silently—irregular periods, weight struggles, fertility challenges, postpartum blues—and they don't need just prescriptions.
                    </p>
                    <p className="font-inter text-lg text-foreground leading-relaxed italic mt-6">
                      They need education, guidance, and hand-holding.
                    </p>
                    <p className="font-inter text-lg text-foreground leading-relaxed italic mt-6">
                      That's why I created Path'o'Life—where science meets support. Where women are not told what to do, but empowered to choose what works for their phase of life.
                    </p>
                  </blockquote>
                  <Link to="/about">
                    <Button variant="default" size="lg" className="font-inter font-semibold">
                      Learn More About Dr. Pravina
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="order-1 lg:order-2 animate-scale-in">
                <div className="relative flex justify-center">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse-glow"></div>
                  <img 
                    src="/lovable-uploads/b6aeaa4f-b346-4225-81f7-15c3c238960f.png" 
                    alt="Dr. Pravina Kale, Founder & CEO" 
                    className="relative w-96 h-96 object-cover rounded-full shadow-2xl border-8 border-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-playfair text-5xl font-bold text-foreground mb-6">What We Offer</h2>
            <p className="font-inter text-2xl text-muted-foreground">Workshops • 1:1 Consultations • Wellness Plans</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <Link to="/workshops" className="group">
              <Card className="h-full hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border-0 bg-gradient-to-br from-primary-light to-primary/5">
                <CardContent className="p-10 text-center h-full flex flex-col">
                  <div className="relative mb-8">
                    <div className="w-24 h-24 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-glow transition-all duration-300">
                      <BookOpen className="h-12 w-12 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">Workshops</h3>
                  <p className="font-inter text-lg text-muted-foreground mb-3">Learn, Interact, Transform</p>
                  <p className="font-inter text-sm text-muted-foreground mt-auto">Live 3-hour sessions every Tuesday & Friday</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/consultations" className="group">
              <Card className="h-full hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border-0 bg-gradient-to-br from-success/10 to-success/5">
                <CardContent className="p-10 text-center h-full flex flex-col">
                  <div className="relative mb-8">
                    <div className="w-24 h-24 bg-gradient-to-br from-success to-success/80 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-glow transition-all duration-300">
                      <Heart className="h-12 w-12 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-success/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">1:1 Consultations</h3>
                  <p className="font-inter text-lg text-muted-foreground mb-3">Personal guidance, video calls</p>
                  <p className="font-inter text-sm text-muted-foreground mt-auto">Matched with the right expert</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/wellness-plans" className="group">
              <Card className="h-full hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border-0 bg-gradient-to-br from-amber-100 to-orange-50">
                <CardContent className="p-10 text-center h-full flex flex-col">
                  <div className="relative mb-8">
                    <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-glow transition-all duration-300">
                      <Users className="h-12 w-12 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-amber-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">Wellness Plans</h3>
                  <p className="font-inter text-lg text-muted-foreground mb-3">1, 3, 6-month lifestyle plans</p>
                  <p className="font-inter text-sm text-muted-foreground mt-auto">Personalized coaching by Dr. Pravina</p>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="text-center animate-fade-in">
            <Link to="/team">
              <Button variant="outline" size="lg" className="font-inter font-semibold">
                Meet Our Expert Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-playfair text-5xl font-bold text-foreground mb-6">What Our Community Says</h2>
            <div className="flex justify-center mb-8">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-8 w-8 text-amber-400 fill-current" />
                ))}
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-0">
              <CardContent className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="font-inter text-lg text-foreground leading-relaxed mb-6 italic">
                  "Dr. Pravina's PCOS workshop changed my life. Finally, someone who understands the female body and gives practical, science-based solutions."
                </p>
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <p className="font-inter font-semibold text-foreground">Priya</p>
                    <p className="font-inter text-sm text-muted-foreground">Mumbai</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-0">
              <CardContent className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="font-inter text-lg text-foreground leading-relaxed mb-6 italic">
                  "The 3-month wellness plan helped me lose 12 kg sustainably. No crash diets, just lifestyle changes that actually work."
                </p>
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <p className="font-inter font-semibold text-foreground">Sneha</p>
                    <p className="font-inter text-sm text-muted-foreground">Pune</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-0">
              <CardContent className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="font-inter text-lg text-foreground leading-relaxed mb-6 italic">
                  "As a working mom, the corporate wellness workshop gave me tools to manage stress and prioritize my health."
                </p>
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <p className="font-inter font-semibold text-foreground">Kavya</p>
                    <p className="font-inter text-sm text-muted-foreground">Bangalore</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-2">
              <h3 className="font-playfair text-3xl font-bold mb-6 text-primary-glow">Path'o'Life</h3>
              <p className="font-inter text-lg text-gray-300 mb-6 leading-relaxed">
                Empowering women through evidence-based lifestyle medicine
              </p>
              <div className="flex space-x-4">
                <div className="p-3 bg-primary/20 rounded-full hover:bg-primary hover:scale-110 transition-all duration-300 cursor-pointer group">
                  <Instagram className="h-6 w-6 text-primary group-hover:text-white" />
                </div>
                <div className="p-3 bg-primary/20 rounded-full hover:bg-primary hover:scale-110 transition-all duration-300 cursor-pointer group">
                  <Facebook className="h-6 w-6 text-primary group-hover:text-white" />
                </div>
                <div className="p-3 bg-primary/20 rounded-full hover:bg-primary hover:scale-110 transition-all duration-300 cursor-pointer group">
                  <Linkedin className="h-6 w-6 text-primary group-hover:text-white" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-inter text-xl font-semibold mb-6 text-white">Quick Links</h4>
              <div className="space-y-4 font-inter text-gray-300">
                <Link to="/about" className="block hover:text-primary-glow transition-colors hover:translate-x-1 duration-300">About Dr. Pravina</Link>
                <Link to="/workshops" className="block hover:text-primary-glow transition-colors hover:translate-x-1 duration-300">Workshops</Link>
                <Link to="/consultations" className="block hover:text-primary-glow transition-colors hover:translate-x-1 duration-300">Consultations</Link>
                <Link to="/wellness-plans" className="block hover:text-primary-glow transition-colors hover:translate-x-1 duration-300">Wellness Plans</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-inter text-xl font-semibold mb-6 text-white">Contact</h4>
              <div className="space-y-4 font-inter text-gray-300">
                <p className="flex items-center hover:text-primary-glow transition-colors">
                  <Mail className="h-5 w-5 mr-3 text-primary" /> 
                  drpravina.patholife@gmail.com
                </p>
                <p className="flex items-center hover:text-primary-glow transition-colors">
                  <Phone className="h-5 w-5 mr-3 text-primary" /> 
                  9421829899
                </p>
              </div>
              <div className="mt-8">
                <Link to="/community">
                  <Button variant="wellness" size="lg" className="font-inter font-semibold w-full">
                    Join Newsletter
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-12">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
              <div className="text-center lg:text-left">
                <p className="font-inter text-xl text-primary-glow italic mb-3 leading-relaxed max-w-2xl">
                  "A woman empowered with the right lifestyle becomes unstoppable – not just for her own life, but for generations ahead."
                </p>
                <p className="font-inter text-gray-400">— Dr. Pravina Kale</p>
              </div>
              <div className="text-center lg:text-right">
                <p className="font-inter text-gray-400 text-sm">
                  © 2024 Path'o'Life. All rights reserved.
                </p>
                <p className="font-inter text-gray-500 text-xs mt-1">
                  Designed with wellness in mind
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
