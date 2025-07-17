
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Calendar, Mail, BookOpen, Heart, Star, Users, Phone, Instagram, Facebook, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F6E7E0' }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white min-h-[90vh] flex items-center" role="banner" data-aos="fade-up" style={{ backgroundColor: '#F6E7E0' }}>
        {/* Background image */}
        <img 
          src="/lovable-uploads/image.png" 
          alt="Hero Background" 
          className="absolute inset-0 w-full h-full object-cover z-0" 
          style={{ pointerEvents: 'none' }}
          aria-hidden="true"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" aria-hidden="true"></div>
        
        
        <div className="relative container mx-auto py-16 sm:py-20 md:py-24 z-30">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left animate-fade-in-up px-4 sm:px-0 w-full col-span-2">
              <h1 className="font-playfair text-responsive-5xl font-bold mb-4 md:mb-6 text-white leading-tight tracking-tight" data-aos="fade-up">
                Transform Your <br />
                Wellness Journey
              </h1>
              <p className="font-inter text-responsive-xl mb-3 md:mb-4 font-medium opacity-95" data-aos="fade-up" data-aos-delay="100">
                Empowering women with evidence-based, holistic health solutions
              </p>
              <p className="font-inter text-responsive-base opacity-85 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-6 md:mb-8" data-aos="fade-up" data-aos-delay="200">
                From periods to parenting — explore wellness with Dr. Pravina Kale's lifestyle medicine approach
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
                <Link to="/consultations">
                  <Button 
                    variant="soft" 
                    size="xl" 
                    className="bg-white/95 text-primary hover:bg-white hover:text-primary font-inter font-semibold backdrop-blur-sm border border-white/20 group w-full sm:w-auto"
                    aria-label="Book a consultation with Dr. Pravina Kale"
                  >
                    <Heart className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                    Book a Consultation
                  </Button>
                </Link>
                <Link to="/workshops">
                  <Button 
                    variant="soft" 
                    size="xl" 
                    className="bg-white/95 text-primary hover:bg-white hover:text-primary font-inter font-semibold backdrop-blur-sm border border-white/20 group w-full sm:w-auto"
                    aria-label="Join a wellness workshop"
                  >
                    <Calendar className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" aria-hidden="true" />
                    Join a Workshop
                  </Button>
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 sm:py-20 md:py-24" role="region" aria-labelledby="services-heading" data-aos="fade-up" style={{ backgroundColor: '#F6E7E0' }}>
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up px-4 sm:px-0">
            <h2 id="services-heading" className="font-playfair text-responsive-3xl font-bold text-foreground mb-4 md:mb-6" data-aos="fade-up">What We Offer</h2>
            <p className="font-inter text-responsive-xl text-muted-foreground">Workshops • 1:1 Consultations • Wellness Plans</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-12 md:mb-16 px-4 sm:px-0">
            <Link to="/workshops" className="group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-2xl transition-all duration-200" aria-label="Learn more about our workshops">
              <Card className="h-full card-hover cursor-pointer border-0 bg-gradient-card overflow-hidden relative" data-aos="fade-up" data-aos-delay="100">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>
                <CardContent className="p-6 md:p-10 text-center h-full flex flex-col relative z-10">
                  <div className="relative mb-6 md:mb-8">
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                      <BookOpen className="h-10 w-10 md:h-12 md:w-12 text-white group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                    </div>
                    <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>
                  </div>
                  <h3 className="font-playfair text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4 group-hover:text-primary transition-colors duration-300">Workshops</h3>
                  <p className="font-inter text-base md:text-lg text-muted-foreground mb-2 md:mb-3 group-hover:text-foreground transition-colors duration-300">Learn, Interact, Transform</p>
                  <p className="font-inter text-sm text-muted-foreground mt-auto opacity-80 group-hover:opacity-100 transition-opacity duration-300">Live 3-hour sessions every Tuesday & Friday</p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" aria-hidden="true"></div>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/consultations" className="group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-2xl transition-all duration-200" aria-label="Learn more about our 1:1 consultations">
              <Card className="h-full card-hover cursor-pointer border-0 bg-gradient-card overflow-hidden relative" data-aos="fade-up" data-aos-delay="200">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>
                <CardContent className="p-6 md:p-10 text-center h-full flex flex-col relative z-10">
                  <div className="relative mb-6 md:mb-8">
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                      <Heart className="h-10 w-10 md:h-12 md:w-12 text-white group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                    </div>
                    <div className="absolute inset-0 bg-amber-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>
                  </div>
                  <h3 className="font-playfair text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4 group-hover:text-primary transition-colors duration-300">1:1 Consultations</h3>
                  <p className="font-inter text-base md:text-lg text-muted-foreground mb-2 md:mb-3 group-hover:text-foreground transition-colors duration-300">Personal guidance, video calls</p>
                  <p className="font-inter text-sm text-muted-foreground mt-auto opacity-80 group-hover:opacity-100 transition-opacity duration-300">Matched with the right expert</p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" aria-hidden="true"></div>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/wellness-plans" className="group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-2xl transition-all duration-200 sm:col-span-2 lg:col-span-1" aria-label="Learn more about our wellness plans">
              <Card className="h-full card-hover cursor-pointer border-0 bg-gradient-card overflow-hidden relative" data-aos="fade-up" data-aos-delay="300">
                <div className="absolute inset-0 bg-gradient-to-br from-success/5 to-success/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>
                <CardContent className="p-6 md:p-10 text-center h-full flex flex-col relative z-10">
                  <div className="relative mb-6 md:mb-8">
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-success to-success/80 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110 group-hover:-rotate-12">
                      <Users className="h-10 w-10 md:h-12 md:w-12 text-white group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                    </div>
                    <div className="absolute inset-0 bg-success/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>
                  </div>
                  <h3 className="font-playfair text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4 group-hover:text-amber-600 transition-colors duration-300">Wellness Plans</h3>
                  <p className="font-inter text-base md:text-lg text-muted-foreground mb-2 md:mb-3 group-hover:text-foreground transition-colors duration-300">1, 3, 6-month lifestyle plans</p>
                  <p className="font-inter text-sm text-muted-foreground mt-auto opacity-80 group-hover:opacity-100 transition-opacity duration-300">Personalized coaching by Dr. Pravina</p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" aria-hidden="true"></div>
                </CardContent>
              </Card>
            </Link>
          </div>

        </div>
      </section>

      {/* Founder Message (Moved & Resized) */}
      <section className="py-16 relative overflow-hidden" data-aos="fade-up" style={{ backgroundColor: '#F6E7E0' }}>
        {/* Background image */}
        <img 
          src="/lovable-uploads/image copy.png" 
          alt="Dr. Pravina Kale, Founder & CEO" 
          className="absolute inset-0 w-full h-full object-cover z-0" 
          style={{ pointerEvents: 'none' }}
          aria-hidden="true"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" aria-hidden="true"></div>
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
            <div className="relative flex justify-center mb-8">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse-glow"></div>
              <img 
                src="/lovable-uploads/b6aeaa4f-b346-4225-81f7-15c3c238960f.png" 
                alt="Dr. Pravina Kale, Founder & CEO" 
                className="relative w-32 h-32 object-cover rounded-full shadow-2xl border-4 border-white"
              />
            </div>
            <blockquote className="mb-6">
              <p className="font-playfair text-2xl md:text-3xl font-bold text-white leading-relaxed">
                "A woman empowered with the right lifestyle becomes unstoppable – not just for her own life, but for generations ahead."
              </p>
            </blockquote>
            <p className="font-inter text-base text-white mb-6">
              — Dr. Pravina Kale Shegokar, Founder
            </p>
            <Link to="/about">
              <Button variant="wellness" size="lg" className="font-inter font-semibold text-white">
                Learn More About Dr. Pravina
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-24" data-aos="fade-up" style={{ backgroundColor: '#F6E7E0' }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-playfair text-5xl font-bold text-foreground mb-6">Meet Our Team</h2>
            <p className="font-inter text-xl text-muted-foreground">Advisory Board & Core Team</p>
          </div>

          {/* Advisory Board */}
          <div className="mb-20">
            <h3 className="font-playfair text-3xl font-bold text-foreground mb-10 text-center">Advisory Board</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-6xl mx-auto items-start">
              {[
                { name: "Dr. Sandhya Kale", title: "Senior Obstetrician & Gynecologist", description: "Expert in women's reproductive health with over 25 years of experience in obstetrics and gynecology. Specializes in high-risk pregnancies and comprehensive women's healthcare." },
                { name: "Dr. Pushpa Junghare", title: "Senior Obstetrician & Gynecologist", description: "Specializing in high-risk pregnancies and maternal care with extensive experience in complex obstetric cases and women's health management." },
                { name: "Dr. Pratibha Kale", title: "Pediatrician, Neonatologist, Psychologist & Lactation Expert", description: "Comprehensive child and maternal care specialist providing integrated care from birth through early childhood, including psychological support and lactation expertise." }
              ].map((doctor, idx) => (
                <div
                  key={doctor.name}
                  className="flex flex-col items-center text-center bg-transparent shadow-none p-0 h-full justify-start"
                >
                  <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-white shadow mb-6 bg-gray-100 flex items-center justify-center mx-auto">
                    <img
                      src="/lovable-uploads/68d9c8ae-c9bc-4365-b332-ec694fda90af.png"
                      alt={doctor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-1">{doctor.name}</h3>
                  <p className="font-inter text-sm text-muted-foreground italic mb-3">{doctor.title}</p>
                  <p className="font-inter text-sm text-foreground mb-0 leading-normal">{doctor.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Team */}
          <div>
            <h3 className="font-playfair text-3xl font-bold text-foreground mb-10 text-center">Core Team</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-4xl mx-auto items-start">
              {[
                { name: "Dr. Pravina Kale", title: "Founder, Lifestyle & Pathology Expert", description: "Certified Lifestyle Medicine Physician and Pathologist dedicated to preventing disease through evidence-based lifestyle interventions." },
                { name: "Dr. Sonal Deshmukh", title: "Infertility & ObGyn", description: "Specialized in fertility treatments and reproductive health, helping couples achieve their dream of parenthood through comprehensive care." },
                { name: "Dr. Kalyani Gade", title: "Infertility & ObGyn", description: "Expert in fertility management and women's reproductive health with a focus on personalized treatment approaches." },
                { name: "Dr. Apurva Kale", title: "Pediatrician & Neonatologist", description: "Dedicated to providing exceptional care for newborns and children, ensuring healthy development and growth." }
              ].map((member, idx) => (
                <div
                  key={member.name}
                  className="flex flex-col items-center text-center bg-transparent shadow-none p-0 h-full justify-start"
                >
                  <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-white shadow mb-6 bg-gray-100 flex items-center justify-center mx-auto">
                    <img
                      src="/lovable-uploads/68d9c8ae-c9bc-4365-b332-ec694fda90af.png"
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="font-inter text-sm text-muted-foreground italic mb-3">{member.title}</p>
                  <p className="font-inter text-sm text-foreground mb-0 leading-normal">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative overflow-hidden" data-aos="fade-up" style={{ backgroundColor: '#338B81' }}>
        <div className="relative z-20">
          <div className="text-center mb-6 animate-fade-in-up">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-2">What Our Community Says</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              className="testimonial-swiper"
            >
              <SwiperSlide>
                <Card className="bg-white shadow-xl border-0 w-full" style={{ minHeight: 210, maxWidth: 800, margin: '0 auto' }}>
                  <CardContent className="p-4 flex flex-col justify-between h-full">
                    <div className="flex justify-center mb-4">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="font-inter text-xl text-foreground leading-snug mb-4 italic text-center">
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
              </SwiperSlide>
              <SwiperSlide>
                <Card className="bg-white shadow-xl border-0 w-full" style={{ minHeight: 210, maxWidth: 800, margin: '0 auto' }}>
                  <CardContent className="p-4 flex flex-col justify-between h-full">
                    <div className="flex justify-center mb-4">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="font-inter text-xl text-foreground leading-snug mb-4 italic text-center">
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
              </SwiperSlide>
              <SwiperSlide>
                <Card className="bg-white shadow-xl border-0 w-full" style={{ minHeight: 210, maxWidth: 800, margin: '0 auto' }}>
                  <CardContent className="p-4 flex flex-col justify-between h-full">
                    <div className="flex justify-center mb-4">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="font-inter text-xl text-foreground leading-snug mb-4 italic text-center">
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
              </SwiperSlide>
            </Swiper>
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
