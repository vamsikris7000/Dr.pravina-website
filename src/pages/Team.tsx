
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
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-green-50 to-emerald-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Expert Team</h1>
            <p className="text-xl mb-8">Experienced professionals dedicated to women's health and wellness</p>
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Advisory Board</h2>
          <p className="text-xl text-center text-gray-600 mb-12">Senior experts guiding our mission</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {advisoryBoard.map((doctor, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{doctor.name}</h3>
                  <p className="text-teal-600 font-semibold mb-3">{doctor.title}</p>
                  <div className="mb-4">
                    <span className="inline-block bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-full">
                      {doctor.experience}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{doctor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Meet Our Core Team</h2>
          <p className="text-xl text-center text-gray-600 mb-12">Dedicated specialists working together for your health</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                      {index === 0 ? <Award className="h-8 w-8 text-white" /> :
                       index === 3 ? <Heart className="h-8 w-8 text-white" /> : 
                       <Users className="h-8 w-8 text-white" />}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                      <p className="text-teal-600 font-semibold text-sm">{member.title}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{member.description}</p>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Specialties:</p>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, specialtyIndex) => (
                        <span key={specialtyIndex} className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
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
      <section className="py-20 bg-gradient-to-r from-teal-100 to-green-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Team Values</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Compassionate Care</h3>
              <p className="text-gray-600">We treat every woman with empathy, understanding, and personalized attention</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Evidence-Based</h3>
              <p className="text-gray-600">All our recommendations are backed by scientific research and clinical expertise</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Collaborative</h3>
              <p className="text-gray-600">We work together as a team to provide comprehensive, holistic care</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
