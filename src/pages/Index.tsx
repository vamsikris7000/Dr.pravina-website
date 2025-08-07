
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Calendar, Mail, BookOpen, Heart, Star, Users, MessageSquare, Instagram, Facebook, Linkedin, Youtube, Award, ChevronLeft, ChevronRight } from "lucide-react";
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
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const testimonials = [
    {
      name: "Neha Janokar",
      location: "Pune",
      photo: "/photos/Testimonials1.png",
      message: "When I met Dr. Pravina, I was overwhelmed with conflicting fertility advice. Her calm, science-backed, and deeply personal approach gave me the clarity and confidence I needed. From nutrition to stress management, she guided me step-by-step. I feel so much more in tune with my body now and ready for this next phase of life."
    },
    {
      name: "Tejashree Vidhale",
      location: "Bangalore",
      photo: "/photos/Testimonials2.png",
      message: "I had tried everything for weight loss, but nothing felt sustainable until I met Dr. Pravina. She didn't just give me a diet; she gave me a lifestyle. I've lost over 9kg and gained back my self-worth. Also, I'm one size down. Her compassion, her methods, and her personal follow-ups kept me going when I wanted to quit. I'm lighter, healthier, and happier inside out."
    },
    {
      name: "Amruta Bharsakale",
      location: "Gurgaon",
      photo: "/photos/Testimonials3.jpeg",
      message: "PCOS had affected everything from my skin to my confidence. Dr. Pravina simplified things for me. Her structured, yet gentle method helped me stay consistent. My cravings reduced, I lost inches, and I even started enjoying movement again. She made me feel seen, heard, and empowered."
    },
    {
      name: "Monika Bahurupi",
      location: "Munich, Germany",
      photo: "/photos/Testimonials4.jpeg",
      message: "Working with Pravina through Path'o'Life has been a deeply healing experience. As a pathologist, she brings medical knowledge and holistic wisdom that made me feel truly seen. During challenging times, Pravina was my calm, reassuring presence. She helped me become more mindful of my eating habits with compassion and practical advice. The yoga and mental wellness practices she introduced became my anchors for inner peace. What makes Pravina special is her supportive nature and how sincerely she cares. She listens deeply, encourages without pressure, and walks with you through every step. I'm deeply grateful – she helped me not only feel better, but reconnect with myself."
    },
    {
      name: "Dr. Kshitija Pawade",
      location: "Amravati",
      photo: "/photos/Testimonials5.jpeg",
      message: "Being a doctor myself, I had tried many options for PCOS. But nothing felt as personalized and effective as Dr. Pravina's approach. My cycles became regular, I lost excess weight, and I felt more centered than I had in years. She brought the missing 'lifestyle' piece into my healing puzzle."
    },
    {
      name: "Dipali Tidke",
      location: "Pune",
      photo: "/photos/Testimonials6.png",
      message: "When I conceived, I was nervous about doing everything 'right'. Dr. Pravina's pregnancy guidance helped me focus on what truly matters... nourishing my body, bonding with my baby, and enjoying this sacred time. My energy stayed high throughout and my baby thrived. She was more than a doctor...she was my health coach and emotional anchor."
    },
    {
      name: "Divyata Shegokar",
      location: "Akola",
      photo: "/photos/Testimonials7.png",
      message: "From pregnancy to postpartum healing and my baby's nutrition, Dr. Pravina was with me at every step. Her practical tools, emotional support, and timely nudges made me feel prepared and powerful. My recovery was smooth, my breastfeeding journey was joyful, and my baby's diet is now rooted in wholesome traditions. I'm so grateful!"
    },

  ];

  // Preload all testimonial images
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = testimonials.map((testimonial) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = testimonial.photo;
        });
      });

      try {
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error('Error preloading images:', error);
        setImagesLoaded(true); // Continue anyway
      }
    };

    preloadImages();
  }, []);

  // Scroll to top only on page refresh, not on navigation
  useEffect(() => {
    // Only scroll to top if this is a page refresh (not navigation)
    if (window.performance && window.performance.navigation.type === 1) {
      window.scrollTo(0, 0);
    }
  }, []);

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
              <section className="relative overflow-hidden text-white min-h-screen flex items-center" role="banner" data-aos="fade-up" style={{ backgroundColor: '#e9f5e9' }}>
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
              
              <div className="mt-8 md:mt-10 max-w-4xl mx-auto lg:mx-0">
                <Link to="/workshops" className="inline-block">
                  <div className="bg-white border border-gray-200 rounded-xl px-6 py-3 hover:bg-gray-50 hover:scale-105 transition-all duration-300 cursor-pointer group shadow-sm">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h3 className="font-playfair text-lg md:text-xl font-bold text-primary text-center group-hover:text-primary">
                        Upcoming Workshops
                      </h3>
                    </div>
                  </div>
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
                  <p className="font-inter text-sm text-primary font-medium mt-auto opacity-90 group-hover:opacity-100 transition-opacity duration-300">Book a consultation</p>
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
                "A woman empowered with the right lifestyle becomes unstoppable, not just for her own life, but for generations ahead."
              </p>
            </blockquote>
            <p className="font-inter text-base text-white mb-6">
              Dr. Pravina Kale Shegokar, Founder
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
                  <div className="font-inter text-sm text-muted-foreground italic mb-3 hover:text-primary/80 transition-colors duration-300">
                    {doctor.title.split(' • ').map((qualification, index) => (
                      <p key={index} className="mb-1">{qualification}</p>
                    ))}
                  </div>
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
                  <div className="font-inter text-sm text-muted-foreground italic mb-3 group-hover:text-primary/80 transition-colors duration-300">
                    {member.title.split(' • ').map((qualification, index) => (
                      <p key={index} className="mb-1">{qualification}</p>
                    ))}
                  </div>
                  <p className="font-inter text-sm text-foreground mb-0 leading-normal group-hover:text-foreground/90 transition-colors duration-300">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* Testimonials Section */}
      <section className="py-16 relative overflow-hidden" data-aos="fade-up" style={{ backgroundColor: '#1a5f57' }}>
        <div className="relative z-20">
          <div className="text-center mb-6 animate-fade-in-up">
            <div className="flex items-center justify-center mb-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              <h2 className="font-playfair text-4xl font-bold text-white mx-8">Testimonials</h2>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent via-white/30 to-transparent"></div>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative min-h-[600px] md:min-h-[500px]">
              {/* Navigation Buttons */}
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
              >
                <ChevronLeft className="h-6 w-6 text-primary" />
              </button>
              
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
              >
                <ChevronRight className="h-6 w-6 text-primary" />
              </button>
              
              {/* Testimonial Content - Side by Side Layout */}
              <div className="flex flex-col lg:flex-row items-stretch h-full">
                {/* Photo Section - Left Side (35% of widget) */}
                <div className="w-full lg:w-[35%] h-full mb-6 lg:mb-0">
                  <div className="w-full h-64 lg:h-full rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg relative">
                    {!imagesLoaded ? (
                      <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center">
                        <div className="w-16 h-16 bg-gray-300 rounded-full animate-pulse"></div>
                      </div>
                    ) : (
                      <img 
                        src={testimonials[currentTestimonial].photo} 
                        alt={`${testimonials[currentTestimonial].name}`}
                        className="w-full h-full object-cover transition-opacity duration-300"
                        style={{ minHeight: '250px' }}
                        loading="eager"
                      />
                    )}
                  </div>
                </div>
                
                {/* Text Content - Right Side (65% of widget) */}
                <div className="w-full lg:w-[65%] text-left flex flex-col justify-center p-4 lg:p-8">
                  <div className="mb-8">
                    <h3 className="font-playfair text-3xl font-bold text-foreground mb-3">
                      {testimonials[currentTestimonial].name}
                    </h3>
                    <p className="font-inter text-xl text-primary">
                      {testimonials[currentTestimonial].location}
                    </p>
                  </div>
                  
                  <blockquote className="font-inter text-lg md:text-xl text-muted-foreground leading-relaxed italic">
                    "{testimonials[currentTestimonial].message}"
                  </blockquote>
                </div>
              </div>
              
              {/* Dots Indicator */}
              <div className="flex justify-center space-x-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-primary scale-125' 
                        : 'bg-gray-300 hover:bg-primary/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Walk the Path Together */}
      <section className="py-12 relative overflow-hidden" data-aos="fade-up" style={{ backgroundColor: '#1a5f57' }}>
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-20 right-16 w-16 h-16 border border-white/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-white/20 transform rotate-45"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Enhanced title with better spacing and effects */}
            <div className="mb-12">
              <div className="flex items-center justify-center mb-8">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/40 to-white/40"></div>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mx-8 leading-tight tracking-tight drop-shadow-lg">
                  Let's walk the Path Together
                </h2>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent via-white/40 to-white/40"></div>
              </div>
            </div>
            
            {/* Enhanced description with better typography */}
            <div className="relative">
                             <p className="font-inter text-lg md:text-xl text-white/95 leading-relaxed max-w-4xl mx-auto font-medium tracking-wide drop-shadow-sm">
                You've taken the first step towards transforming your health. Whether you're exploring hormones, preparing for motherhood, or just craving clarity - we're here for you.
              </p>
              
              {/* Decorative accent */}
              <div className="mt-8 flex justify-center">
                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full"></div>
              </div>
            </div>
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
                  <svg className="h-5 w-5 mr-3 text-primary" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
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
                <p className="font-inter text-gray-400">Dr. Pravina Kale</p>
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
