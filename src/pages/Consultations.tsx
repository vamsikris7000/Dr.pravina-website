
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
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-green-50 to-emerald-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">1:1 Expert Consultations</h1>
            <p className="text-xl mb-8">Personalized guidance with our team of women's health specialists</p>
            <Button size="lg" className="bg-white text-teal-600 hover:bg-teal-50">
              Book Your Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">1</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Choose Your Concern</h3>
              <p className="text-gray-600 text-sm">Select the area you need help with from our specialties</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">2</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">We Match You</h3>
              <p className="text-gray-600 text-sm">We connect you with the right expert for your specific needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">3</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Fill the Form</h3>
              <p className="text-gray-600 text-sm">Complete our consultation form with your health details</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">4</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Get Your Call</h3>
              <p className="text-gray-600 text-sm">Receive a call with your consultation link and next steps</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Experts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Our Expert Team</h2>
          <p className="text-xl text-center text-gray-600 mb-12">Specialized care from experienced women's health professionals</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experts.map((expert, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-green-400 rounded-full flex items-center justify-center mr-4">
                      <expert.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{expert.name}</h3>
                      <p className="text-teal-600 text-sm font-semibold">{expert.specialty}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{expert.description}</p>
                  <div className="space-y-1">
                    {expert.areas.map((area, areaIndex) => (
                      <span key={areaIndex} className="inline-block bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-full mr-2 mb-1">
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
      <section className="py-20 bg-gradient-to-r from-teal-600 to-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8">Book your personalized consultation today and take the first step towards better health</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-teal-600 hover:bg-teal-50">
                <Calendar className="mr-2 h-5 w-5" />
                Book Consultation Now
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-teal-600">
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
