
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Calendar, Mail, BookOpen, Heart, Star, Users, Phone, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import Founder from './founder';
import PathOLife from './patholife';

const advisoryBoardImages = [
  '/photos/Picture1.png',
  '/photos/Picture2.png',
  '/photos/Picture3.png',
];
const coreTeamImages = [
  '/photos/Picture4.png',
  '/photos/Picture5.png',
  '/photos/Picture6.png',
  '/photos/Picture7.png',
];

function HexFlower({ label, text }) {
  return (
    <div style={{ width: 170, height: 150, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{
        width: 170, height: 150, background: 'white', border: '6px solid #338B81',
        clipPath: 'polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)',
        boxShadow: '0 4px 16px 0 rgba(0,0,0,0.07)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
        margin: '0 auto',
      }}>
        <span className="font-playfair text-lg font-bold text-[#338B81] mb-1 text-center">{label}</span>
        <span className="font-inter text-base font-medium text-[#7a5c1c] text-center leading-snug">{text}</span>
      </div>
    </div>
  );
}

const Index = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e9f5e9' }}>
      <style>
        {`
          .advisory-card .advisory-description {
            max-height: 0 !important;
            overflow: hidden !important;
            opacity: 0 !important;
            transform: translateY(-10px) !important;
            transition: all 0.5s ease !important;
            padding: 0 !important;
            margin: 0 !important;
            pointer-events: none !important;
          }
          .advisory-container:hover .advisory-card .advisory-description {
            max-height: 400px !important;
            opacity: 1 !important;
            transform: translateY(0) !important;
            padding: 0.75rem 0 !important;
            margin: 0.75rem 0 !important;
            pointer-events: auto !important;
          }
        `}
      </style>
      {/* Hero Section */}
              <section className="relative overflow-hidden text-white min-h-[90vh] flex items-center" role="banner" data-aos="fade-up" style={{ backgroundColor: '#e9f5e9' }}>
        {/* Background image */}
        <img 
          src="/photos/HeroPageBackgorund.jpg" 
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
              <h1 className="font-playfair text-responsive-5xl font-bold mb-4 md:mb-6 text-white leading-tight tracking-tight drop-shadow-lg" data-aos="fade-up">
                Empowering Women with <br />
                Lifestyle Medicine
              </h1>
              <p className="font-inter text-responsive-lg mb-4 md:mb-5 font-medium text-white/90 drop-shadow-md tracking-wide" data-aos="fade-up" data-aos-delay="100">
                Periods • Pregnancy • Postpartum & Lactation • Parenting • Weight Reset
              </p>
              <p className="font-inter text-responsive-xl text-white/95 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-6 md:mb-8 drop-shadow-sm font-semibold" data-aos="fade-up" data-aos-delay="200">
                Explore Your Wellness Journey with Path'o'Life
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
                <Link to="/workshops">
                  <Button 
                    variant="soft" 
                    size="xl" 
                    className="bg-white/95 text-primary hover:bg-white hover:text-primary font-inter font-semibold backdrop-blur-sm border border-white/20 group w-full sm:w-auto min-w-[320px]"
                    aria-label="Join a wellness workshop"
                  >
                    <Calendar className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" aria-hidden="true" />
                    Live Online Workshops
                  </Button>
                </Link>
                <Link to="/wellness-plans">
                  <Button 
                    variant="soft" 
                    size="xl" 
                    className="bg-white/95 text-primary hover:bg-white hover:text-primary font-inter font-semibold backdrop-blur-sm border border-white/20 group w-full sm:w-auto min-w-[320px]"
                    aria-label="View our lifestyle plans"
                  >
                    <BookOpen className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                    Explore Our Lifestyle Plans
                  </Button>
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 sm:py-20 md:py-24" role="region" aria-labelledby="services-heading" data-aos="fade-up" style={{ backgroundColor: '#e9f5e9' }}>
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up px-4 sm:px-0">
            <div className="flex items-center justify-center mb-6">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-foreground/30 to-foreground/30"></div>
              <h2 id="services-heading" className="font-playfair text-responsive-3xl font-bold text-foreground mx-8" data-aos="fade-up">What We Offer</h2>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent via-foreground/30 to-foreground/30"></div>
            </div>
            <p className="font-inter text-responsive-xl text-muted-foreground">Workshops • 1:1 Consultations • Lifestyle Plans</p>
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
                  <h3 className="font-playfair text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4 group-hover:text-primary transition-colors duration-300">Live Online Workshops</h3>
                  <p className="font-inter text-base md:text-lg text-muted-foreground mb-2 md:mb-3 group-hover:text-foreground transition-colors duration-300 font-semibold">Real Women. Real Phases. Real Transformation.</p>
                  <p className="font-inter text-sm text-muted-foreground mb-3 opacity-80 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed">Whether you're 16 or 36, preparing for motherhood or craving a weight reset, these life-stage workshops help you understand your body, heal your hormones, and build lifelong health habits with science, Lifestyle Medicine and Indian wisdom.</p>
                  <p className="font-inter text-sm text-primary font-medium mt-auto opacity-90 group-hover:opacity-100 transition-opacity duration-300">Live, interactive sessions</p>
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
                  <p className="font-inter text-base md:text-lg text-muted-foreground mb-2 md:mb-3 group-hover:text-foreground transition-colors duration-300 font-semibold">Deeply Personal. Powerfully Transformative.</p>
                  <p className="font-inter text-sm text-muted-foreground mb-3 opacity-80 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed">Tailored video calls for painful periods, weight reset, postpartum healing & lactation or child nutrition.</p>
                  <p className="font-inter text-sm text-primary font-medium mt-auto opacity-90 group-hover:opacity-100 transition-opacity duration-300">Matched with the right expert</p>
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
                  <h3 className="font-playfair text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4 group-hover:text-amber-600 transition-colors duration-300">Lifestyle Plans</h3>
                  <p className="font-inter text-base md:text-lg text-muted-foreground mb-2 md:mb-3 group-hover:text-foreground transition-colors duration-300 font-semibold">1, 3 to 6 Month Lifestyle Programs</p>
                  <p className="font-inter text-sm text-muted-foreground mb-3 opacity-80 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed">Personalized coaching & Hand Holding by Dr. Pravina & Team to heal your hormones, reset your weight & elevate your life.</p>
                  <p className="font-inter text-sm text-primary font-medium mt-auto opacity-90 group-hover:opacity-100 transition-opacity duration-300">Includes trackers, plans, check-ins, and more.</p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" aria-hidden="true"></div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Founder Message (Moved & Resized) */}
      <section className="py-16 relative overflow-hidden" data-aos="fade-up" style={{ backgroundColor: '#e9f5e9' }}>
        {/* Background image */}
        <img 
          src="/photos/image.png" 
          alt="Dr. Pravina Kale, Founder & CEO" 
          className="absolute inset-0 w-full h-full object-cover z-0" 
          style={{ pointerEvents: 'none', objectPosition: 'center 80%' }}
          aria-hidden="true"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" aria-hidden="true"></div>
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
            <div className="relative flex justify-center mb-8">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse-glow"></div>
              <img 
                src="/photos/founder.png" 
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
      <section className="py-24" data-aos="fade-up" style={{ backgroundColor: '#e9f5e9' }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center mb-6">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-foreground/30 to-foreground/30"></div>
              <h2 className="font-playfair text-5xl font-bold text-foreground mx-8">Meet Our Team</h2>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent via-foreground/30 to-foreground/30"></div>
            </div>
          </div>

          {/* Advisory Board */}
          <div className="mb-20">
            <h3 className="font-playfair text-3xl font-bold text-foreground mb-10 text-center">Advisory Board</h3>
            <div className="advisory-container grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-6xl mx-auto items-start">
              {[
                { 
                  name: "Dr. Sandhya Kale", 
                  title: "MBBS DGO (OBGY) • Consultant Obstetrician & Gynecologist • Kale Nursing Home, Amravati", 
                  description: "With over four decades of dedicated service in women's health, Dr. Sandhya Kale is a respected name in Amravati's medical landscape. A seasoned obstetrician and gynecologist, she has successfully managed countless high-risk pregnancies and complex gynecological cases with clinical excellence and deep compassion. Her commitment to providing quality care to both urban and rural populations reflects her belief that every woman deserves dignified, accessible, and personalized healthcare.", 
                  color: "#338B81" 
                },
                { 
                  name: "Dr. Pushpa Junghare", 
                  title: "MBBS MD (OBGY) • Head of Department, Obstetrics & Gynecology • Dr. Panjabrao Alias Bhausaheb Deshmukh Memorial Medical College, Amravati", 
                  description: "With over 40 years of unparalleled experience in women's health, Dr. Pushpa Junghare is one of the most respected and senior obstetricians and gynecologists in Amravati. As the Head of the Department of OBGY, she has mentored generations of doctors while handling most of the complex cases in high-risk pregnancies, maternal care, and women's health management. Her wisdom, clinical excellence, and compassionate approach continue to inspire our work at Path'o'Life.", 
                  color: "#0d9488" 
                },
                { 
                  name: "Dr. Pratibha Kale", 
                  title: "MBBS DCH DNB (Pediatrics) BA (Psychology) • Head of Department, Pediatrics • Dr. Panjabrao Alias Bhausaheb Deshmukh Memorial Medical College, Amravati", 
                  description: "Dr. Pratibha Kale, a pediatrician, neonatologist, psychologist, and lactation expert with 25+ years of experience, is a leading voice in maternal and child health. She specializes in neonatal care, pediatric wellness, and breastfeeding support, including induced lactation for adoptive mothers. As Head of the Human Milk Bank and Lactation Centre, she has shaped key breastfeeding protocols. Her psychology training enhances her holistic approach to mother-child care.", 
                  color: "#059669" 
                }
              ].map((doctor, idx) => (
                <div
                  key={doctor.name}
                  className={`advisory-card advisory-card-${idx} flex flex-col items-center text-center bg-white/80 backdrop-blur-sm rounded-3xl p-8 h-full justify-start cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:bg-white/95 border border-gray-200/50 hover:border-gray-300`}
                >
                  <div className="relative mb-6">
                    <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gray-100 flex items-center justify-center mx-auto transition-all duration-500 hover:shadow-2xl hover:scale-105" style={{ borderColor: doctor.color }}>
                      <img
                        src={advisoryBoardImages[idx]}
                        alt={doctor.name}
                        className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
                        style={{ objectPosition: 'center 30%' }}
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110" style={{ backgroundColor: doctor.color }}>
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-1 hover:text-primary transition-colors duration-300">{doctor.name}</h3>
                  <p className="font-inter text-sm text-muted-foreground italic mb-3 hover:text-primary/80 transition-colors duration-300">{doctor.title}</p>
                  <div className="advisory-description space-y-3 mb-0">
                    <p className="font-inter text-sm text-foreground leading-normal">{doctor.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Team */}
          <div>
            <h3 className="font-playfair text-3xl font-bold text-foreground mb-10 text-center">Core Team</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-4xl mx-auto items-start">
              {[
                { 
                  name: "Dr. Pravina Kale", 
                  title: "MBBS MD (Pathology) • DipIBLM (American College of Lifestyle Medicine) • Lifestyle Medicine Physician • Pathologist & Dermatopathologist", 
                  description: "Certified Lifestyle Medicine Physician and Pathologist dedicated to preventing disease through evidence-based lifestyle interventions.", 
                  color: "#338B81" 
                },
                { 
                  name: "Dr. Sonal Deshmukh", 
                  title: "MBBS DGO • ICOG Fellowship in Reproductive Medicine • OBGY & Infertility expert", 
                  description: "Specialized in fertility treatments and reproductive health, helping couples achieve their dream of parenthood through comprehensive care.", 
                  color: "#0d9488" 
                },
                { 
                  name: "Dr. Kalyani Gade", 
                  title: "MBBS MS (Obstetrics & Gynaecology) • DNB, DFP, FMAS, MNAMS • Fellowship in Reproductive Medicine, Pune • OBGY & Infertility expert", 
                  description: "Expert in fertility management and women's reproductive health with a focus on personalized treatment approaches.", 
                  color: "#059669" 
                },
                { 
                  name: "Dr. Apurva Kale", 
                  title: "MBBS MD (Pediatrics) • Pediatrician, Neonatologist & Pediatric Intensivist", 
                  description: "Dedicated to providing exceptional care for newborns and children, ensuring healthy development and growth.", 
                  color: "#047857" 
                }
              ].map((member, idx) => (
                <div
                  key={member.name}
                  className="group flex flex-col items-center text-center bg-white/80 backdrop-blur-sm rounded-3xl p-8 h-full justify-start cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:bg-white/95 border border-gray-200/50 hover:border-gray-300"
                >
                  <div className="relative mb-6">
                    <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gray-100 flex items-center justify-center mx-auto transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105" style={{ borderColor: member.color }}>
                      <img
                        src={coreTeamImages[idx]}
                        alt={member.name}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                        style={{ 
                          objectPosition: member.name === "Dr. Kalyani Gade" || member.name === "Dr. Sonal Deshmukh" || member.name === "Dr. Pratibha Kale" ? 'center 20%' : 'center 30%',
                          transform: member.name === "Dr. Pratibha Kale" ? 'scale(1.6)' : 'scale(1)'
                        }}
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: member.color }}>
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">{member.name}</h3>
                  <p className="font-inter text-sm text-muted-foreground italic mb-3 group-hover:text-primary/80 transition-colors duration-300">{member.title}</p>
                  <p className="font-inter text-sm text-foreground mb-0 leading-normal group-hover:text-foreground/90 transition-colors duration-300">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Let's Walk the Path Together */}
      <section className="py-12 relative overflow-hidden" data-aos="fade-up" style={{ backgroundColor: '#e9f5e9' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <div className="flex items-center justify-center mb-4">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mx-8">Let's walk the Path Together</h2>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent via-primary/30 to-transparent"></div>
              </div>
            </div>
            <p className="font-inter text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
              You've taken the first step towards transforming your health. Whether you're exploring hormones, preparing for motherhood, or just craving clarity - we're here for you.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative overflow-hidden" data-aos="fade-up" style={{ backgroundColor: '#1a5f57' }}>
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
                <a href="https://www.instagram.com/path.o.life?igsh=bHF1b2ZkbW43bnZo" target="_blank" rel="noopener noreferrer" className="p-3 bg-primary/20 rounded-full hover:bg-primary hover:scale-110 transition-all duration-300 cursor-pointer group">
                  <Instagram className="h-6 w-6 text-primary group-hover:text-white" />
                </a>
                <a href="https://www.facebook.com/share/1Zui5tjBi9/" target="_blank" rel="noopener noreferrer" className="p-3 bg-primary/20 rounded-full hover:bg-primary hover:scale-110 transition-all duration-300 cursor-pointer group">
                  <Facebook className="h-6 w-6 text-primary group-hover:text-white" />
                </a>
                <a href="https://www.linkedin.com/in/dr-pravina-kale-6226b31b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="p-3 bg-primary/20 rounded-full hover:bg-primary hover:scale-110 transition-all duration-300 cursor-pointer group">
                  <Linkedin className="h-6 w-6 text-primary group-hover:text-white" />
                </a>
                <a href="https://youtube.com/@patholife?si=gyNQBsKA4yvk0VhI" target="_blank" rel="noopener noreferrer" className="p-3 bg-primary/20 rounded-full hover:bg-primary hover:scale-110 transition-all duration-300 cursor-pointer group">
                  <Youtube className="h-6 w-6 text-primary group-hover:text-white" />
                </a>
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
            </div>


          </div>
          
          <div className="border-t border-gray-700 pt-12">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
              <div className="text-center lg:text-left">
                <p className="font-inter text-xl text-primary-glow italic mb-3 leading-relaxed max-w-2xl">
                  "Path'o'Life was born from science, shaped by experience, and guided by wisdom to help every woman heal, thrive, and rewrite her health story through Lifestyle Medicine with grace and power."
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
