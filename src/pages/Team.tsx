
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Award, Heart, Users } from "lucide-react";

const Team = () => {
  const advisoryBoard = [
    {
      name: "Dr. Sandhya Kale",
      title: "Senior Obstetrician & Gynecologist",
      description: "Expert in women's reproductive health with over 25 years of experience in obstetrics and gynecology. Specializes in high-risk pregnancies and comprehensive women's healthcare.",
      experience: "25+ years"
    },
    {
      name: "Dr. Pushpa Junghare",
      title: "Senior Obstetrician & Gynecologist", 
      description: "Specializing in high-risk pregnancies and maternal care with extensive experience in complex obstetric cases and women's health management.",
      experience: "20+ years"
    },
    {
      name: "Dr. Pratibha Kale",
      title: "Pediatrician, Neonatologist, Psychologist & Lactation Expert",
      description: "Comprehensive child and maternal care specialist providing integrated care from birth through early childhood, including psychological support and lactation expertise.",
      experience: "15+ years"
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Pravina Kale",
      title: "Founder, Lifestyle & Pathology Expert",
      description: "Certified Lifestyle Medicine Physician and Pathologist dedicated to preventing disease through evidence-based lifestyle interventions.",
      specialties: ["Lifestyle Medicine", "PCOS Management", "Weight Management", "Preventive Health"]
    },
    {
      name: "Dr. Sonal Deshmukh",
      title: "Infertility & ObGyn",
      description: "Specialized in fertility treatments and reproductive health, helping couples achieve their dream of parenthood through comprehensive care.",
      specialties: ["Infertility Treatment", "IVF", "Reproductive Medicine", "Gynecological Surgery"]
    },
    {
      name: "Dr. Kalyani Gade",
      title: "Infertility & ObGyn",
      description: "Expert in fertility management and women's reproductive health with a focus on personalized treatment approaches.",
      specialties: ["Fertility Management", "PCOS Treatment", "Reproductive Endocrinology", "Gynecology"]
    },
    {
      name: "Dr. Apurva Kale",
      title: "Pediatrician & Neonatologist",
      description: "Dedicated to providing exceptional care for newborns and children, ensuring healthy development and growth.",
      specialties: ["Newborn Care", "Pediatric Medicine", "Child Development", "Vaccination Programs"]
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
            <h1 className="font-playfair text-6xl md:text-7xl font-bold mb-6 leading-tight">Our Expert Team</h1>
            <p className="font-inter text-xl md:text-2xl mb-10 opacity-90">Experienced professionals dedicated to women's health and wellness</p>
            <Button variant="soft" size="xl" className="bg-white/95 text-primary hover:bg-white hover:text-primary font-inter font-semibold backdrop-blur-sm border border-white/20">
              <Users className="mr-3 h-5 w-5" />
              Meet Our Team
            </Button>
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-playfair text-5xl font-bold text-foreground mb-6">Advisory Board</h2>
            <p className="font-inter text-xl text-muted-foreground">Senior experts guiding our mission</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {advisoryBoard.map((doctor, index) => (
              <Card key={index} className="group hover:shadow-elevated hover:-translate-y-2 transition-all duration-500 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <CardContent className="p-10 text-center">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                      <Star className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-foreground mb-3">{doctor.name}</h3>
                  <p className="font-inter text-primary font-semibold mb-4">{doctor.title}</p>
                  <div className="mb-6">
                    <span className="inline-block bg-primary/10 text-primary text-xs px-3 py-1 rounded-full font-medium border border-primary/20">
                      {doctor.experience}
                    </span>
                  </div>
                  <p className="font-inter text-muted-foreground leading-relaxed">{doctor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-playfair text-5xl font-bold text-foreground mb-6">Meet Our Core Team</h2>
            <p className="font-inter text-xl text-muted-foreground">Dedicated specialists working together for your health</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-elevated hover:-translate-y-1 transition-all duration-500 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <CardContent className="p-10">
                  <div className="flex items-start space-x-6 mb-8">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                      {index === 0 ? <Award className="h-8 w-8 text-white" /> :
                       index === 3 ? <Heart className="h-8 w-8 text-white" /> : 
                       <Users className="h-8 w-8 text-white" />}
                    </div>
                    <div>
                      <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">{member.name}</h3>
                      <p className="font-inter text-primary font-semibold">{member.title}</p>
                    </div>
                  </div>
                  
                  <p className="font-inter text-muted-foreground mb-6 leading-relaxed">{member.description}</p>
                  
                  <div className="space-y-3">
                    <p className="font-inter text-sm font-semibold text-foreground mb-3">Specialties:</p>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, specialtyIndex) => (
                        <span key={specialtyIndex} className="inline-block bg-primary/10 text-primary text-xs px-3 py-1 rounded-full font-medium border border-primary/20">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-24 bg-gradient-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-playfair text-5xl font-bold text-foreground mb-6">Our Team Values</h2>
            <p className="font-inter text-xl text-muted-foreground">The principles that guide our approach to women's health</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center group animate-fade-in" style={{animationDelay: '100ms'}}>
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">Compassionate Care</h3>
              <p className="font-inter text-muted-foreground">We treat every woman with empathy, understanding, and personalized attention</p>
            </div>
            <div className="text-center group animate-fade-in" style={{animationDelay: '200ms'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-success to-success/80 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">Evidence-Based</h3>
              <p className="font-inter text-muted-foreground">All our recommendations are backed by scientific research and clinical expertise</p>
            </div>
            <div className="text-center group animate-fade-in" style={{animationDelay: '300ms'}}>
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">Collaborative</h3>
              <p className="font-inter text-muted-foreground">We work together as a team to provide comprehensive, holistic care</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
