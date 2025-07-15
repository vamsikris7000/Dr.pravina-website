
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Calendar, Heart, Baby, Stethoscope } from "lucide-react";

const Consultations = () => {
  const experts = [
    {
      name: "Dr. Pravina Kale",
      specialty: "PCOS, Weight & Lifestyle Medicine",
      description: "Founder & Lifestyle Medicine Physician specializing in hormonal health, weight management, and evidence-based lifestyle interventions.",
      icon: Heart,
      areas: ["PCOS Management", "Weight Loss", "Lifestyle Medicine", "Preventive Health"]
    },
    {
      name: "Dr. Pratibha Kale",
      specialty: "Pediatrics & Lactation",
      description: "Pediatrician, Neonatologist, Psychologist & Lactation Expert providing comprehensive maternal and child care.",
      icon: Baby,
      areas: ["Lactation Support", "Child Nutrition", "Pediatric Care", "Maternal Psychology"]
    },
    {
      name: "Dr. Sonal Deshmukh",
      specialty: "Infertility & ObGyn",
      description: "Specialized in fertility treatments, reproductive health, and comprehensive gynecological care for women.",
      icon: Stethoscope,
      areas: ["Infertility Treatment", "Reproductive Health", "Gynecological Care", "Fertility Planning"]
    },
    {
      name: "Dr. Kalyani Gade",
      specialty: "Infertility & ObGyn",
      description: "Expert in fertility management, pregnancy care, and women's reproductive health across all life stages.",
      icon: Stethoscope,
      areas: ["Fertility Management", "Pregnancy Care", "Reproductive Health", "Women's Wellness"]
    },
    {
      name: "Dr. Pushpa Junghare",
      specialty: "Senior ObGyn",
      description: "Senior Obstetrician & Gynecologist with extensive experience in high-risk pregnancies and maternal care.",
      icon: Users,
      areas: ["High-Risk Pregnancy", "Maternal Care", "Obstetrics", "Gynecology"]
    },
    {
      name: "Dr. Apurva Kale",
      specialty: "Pediatrics & Neonatology",
      description: "Pediatrician & Neonatologist specializing in newborn care, child development, and pediatric health.",
      icon: Baby,
      areas: ["Newborn Care", "Child Development", "Pediatric Health", "Neonatal Care"]
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
            <h2 className="font-playfair text-5xl font-bold text-foreground mb-6">How It Works</h2>
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
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-playfair text-5xl font-bold text-foreground mb-6">Our Expert Team</h2>
            <p className="font-inter text-xl text-muted-foreground">Specialized care from experienced women's health professionals</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {experts.map((expert, index) => (
              <Card key={index} className="group hover:shadow-elevated hover:-translate-y-1 transition-all duration-500 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-glow transition-all duration-300">
                      <expert.icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
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
      <section className="py-24 bg-gradient-hero text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 leading-tight">Ready to Get Started?</h2>
            <p className="font-inter text-xl mb-10 opacity-90">Book your personalized consultation today and take the first step towards better health</p>
            <div className="flex flex-col lg:flex-row gap-6 justify-center">
              <Button variant="soft" size="xl" className="bg-white/95 text-primary hover:bg-white hover:text-primary font-inter font-semibold backdrop-blur-sm border border-white/20">
                <Calendar className="mr-3 h-5 w-5" />
                Book Consultation Now
              </Button>
              <Button variant="outline" size="xl" className="border-2 border-white/50 text-white hover:bg-white hover:text-primary backdrop-blur-sm font-inter font-semibold">
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
