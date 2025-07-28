
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Calendar, Heart, Baby, Stethoscope, User, Users2 } from "lucide-react";

const Consultations = () => {
  const experts = [
    {
      name: "PCOS, Weight Management, Pre-Pregnancy and Pregnancy Lifestyle",
      specialty: "👩‍⚕️ Dr. Pravina Kale",
      description: "Root-cause PCOS and hormone balancing • Natural weight and metabolism support • Lifestyle prep for fertility and conception",
      icon: Heart,
      areas: ["PCOS Management", "Weight Loss", "Lifestyle Medicine", "Preventive Health"]
    },
    {
      name: "Breastfeeding & Lactation Support",
      specialty: "👩‍⚕️ Dr. Pratibha Kale – Pediatrician, Neonatologist & Lactation Expert",
      description: "Latching, milk supply, feeding schedule • Nipple pain, blocked ducts, postnatal nutrition • Mental wellness during lactation",
      icon: Baby,
      areas: ["Lactation Support", "Child Nutrition", "Pediatric Care", "Maternal Psychology"]
    },
    {
      name: "Child Nutrition & Immunity",
      specialty: "👩‍⚕️ Dr. Pratibha Kale / Dr. Apurva Kale",
      description: "Weaning, toddler nutrition, immunity building • Gut health, picky eating • Growth tracking and feeding routine",
      icon: Baby,
      areas: ["Newborn Care", "Child Development", "Pediatric Health", "Neonatal Care"]
    },
    {
      name: "Fertility & Infertility Consultations",
      specialty: "👩‍⚕️ Dr. Sonal Deshmukh / Dr. Kalyani Kale – Infertility & ObGyn Experts",
      description: "Infertility evaluation & treatment options • Lifestyle, hormones, and menstrual cycle mapping • Fertility planning with or without medications",
      icon: Stethoscope,
      areas: ["Infertility Treatment", "Reproductive Health", "Gynecological Care", "Fertility Planning"]
    },
    {
      name: "Senior Obstetrics & Gynaecology Consultations",
      specialty: "👩‍⚕️ Dr. Pushpa Junghare / Dr. Sandhya Kale",
      description: "Second opinions, high-risk cases • Medical guidance beyond lifestyle changes • Trusted senior guidance from 30+ years experience",
      icon: Users2,
      areas: ["High-Risk Pregnancy", "Maternal Care", "Obstetrics", "Gynecology"]
    },
    {
      name: "Corporate Lifestyle Consults for Women",
      specialty: "👩‍⚕️ Dr. Pravina Kale",
      description: "Managing stress, burnout, and work-life balance • Hormone-friendly lifestyle for working women • Simple tools for busy routines",
      icon: User,
      areas: ["PCOS Management", "Weight Loss", "Lifestyle Medicine", "Preventive Health"]
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
            <h1 className="font-playfair text-6xl md:text-7xl font-bold mb-6 leading-tight">1:1 Expert Consultations</h1>
            <p className="font-inter text-xl md:text-2xl mb-10 opacity-90">Personalized guidance with our team of women's health specialists</p>
            <Button variant="soft" size="xl" className="bg-white/95 text-primary hover:bg-white hover:text-primary font-inter font-semibold backdrop-blur-sm border border-white/20">
              Book Your Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center mb-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-foreground/30 to-foreground/30"></div>
            <h2 className="font-playfair text-5xl font-bold text-foreground mx-8">How It Works</h2>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-foreground/30 to-foreground/30"></div>
          </div>
            <p className="font-inter text-xl text-muted-foreground">Simple steps to get personalized care</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center group animate-fade-in" style={{animationDelay: '100ms'}}>
              <div className="w-18 h-18 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">1</div>
              <h3 className="font-playfair text-xl font-bold text-foreground mb-3">Choose Your Concern</h3>
              <p className="font-inter text-muted-foreground">Select the area you need help with from our specialties</p>
            </div>
            <div className="text-center group animate-fade-in" style={{animationDelay: '200ms'}}>
              <div className="w-18 h-18 bg-gradient-to-br from-success to-success/80 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">2</div>
              <h3 className="font-playfair text-xl font-bold text-foreground mb-3">We Match You</h3>
              <p className="font-inter text-muted-foreground">We connect you with the right expert for your specific needs</p>
            </div>
            <div className="text-center group animate-fade-in" style={{animationDelay: '300ms'}}>
              <div className="w-18 h-18 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">3</div>
              <h3 className="font-playfair text-xl font-bold text-foreground mb-3">Fill the Form</h3>
              <p className="font-inter text-muted-foreground">Complete our consultation form with your health details</p>
            </div>
            <div className="text-center group animate-fade-in" style={{animationDelay: '400ms'}}>
              <div className="w-18 h-18 bg-gradient-to-br from-success to-success/80 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">4</div>
              <h3 className="font-playfair text-xl font-bold text-foreground mb-3">Get Your Call</h3>
              <p className="font-inter text-muted-foreground">Receive a call with your consultation link and next steps</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Experts */}
      <section className="py-24" style={{ backgroundColor: '#e9f5e9' }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center mb-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-foreground/30 to-foreground/30"></div>
            <h2 className="font-playfair text-5xl font-bold text-foreground mx-8">Our Expert Team</h2>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-foreground/30 to-foreground/30"></div>
          </div>
            <p className="font-inter text-xl text-muted-foreground">Specialized care from experienced women's health professionals</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {experts.map((expert, index) => (
              <Card key={index} className="group hover:shadow-elevated hover:-translate-y-1 transition-all duration-500 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <CardContent className="p-8">
                  <div className="flex items-start mb-6">
                    <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-glow transition-all duration-300 flex-shrink-0">
                      <expert.icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-playfair text-xl font-bold text-foreground">{expert.name}</h3>
                      <p className="font-inter text-primary font-semibold">{expert.specialty}</p>
                    </div>
                  </div>
                  <p className="font-inter text-muted-foreground mb-6 leading-relaxed">{expert.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {expert.areas.map((area, areaIndex) => (
                      <span key={areaIndex} className="inline-block bg-primary/10 text-primary text-xs px-3 py-1 rounded-full font-medium border border-primary/20">
                        {area}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-foreground text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 leading-tight">Ready to Get Started?</h2>
            <p className="font-inter text-xl mb-10 text-gray-300">Book your personalized consultation today and take the first step towards better health</p>
            <div className="flex flex-col lg:flex-row gap-6 justify-center">
              <Button variant="soft" size="xl" className="bg-white/95 text-primary hover:bg-white hover:text-primary font-inter font-semibold backdrop-blur-sm border border-white/20">
                <Calendar className="mr-3 h-5 w-5" />
                Book Consultation Now
              </Button>
              <Button variant="soft" size="xl" className="bg-white/95 text-primary hover:bg-primary hover:text-white font-inter font-semibold backdrop-blur-sm border border-white/20">
                View Our Wellness Plans
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consultations;
