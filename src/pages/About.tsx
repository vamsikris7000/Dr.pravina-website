
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Award, Heart, BookOpen } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-green-50 to-emerald-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Meet Dr. Pravina Kale</h1>
            <p className="text-xl mb-8">Lifestyle Medicine Physician, Pathologist & Women's Wellness Expert</p>
          </div>
        </div>
      </section>

      {/* About Dr. Pravina */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <img 
                src="/lovable-uploads/b6aeaa4f-b346-4225-81f7-15c3c238960f.png" 
                alt="Dr. Pravina Kale" 
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Her Journey</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Dr. Pravina Kale's path from pathology to lifestyle medicine represents a profound shift from treating disease to preventing it. After years of diagnosing ailments under the microscope, she realized the true power lies in empowering women to take control of their health through lifestyle choices.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                As a certified Lifestyle Medicine physician and pathologist, Dr. Pravina combines clinical expertise with evidence-based wellness strategies, making complex medical knowledge accessible and actionable for every woman.
              </p>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Qualifications & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "MD Pathology", desc: "Medical expertise in disease diagnosis" },
              { icon: Star, title: "Lifestyle Medicine Certified", desc: "Evidence-based wellness approach" },
              { icon: Heart, title: "Women's Health Specialist", desc: "PCOS, fertility, pregnancy care" },
              { icon: BookOpen, title: "Corporate Wellness Expert", desc: "Stress management for working women" }
            ].map((qual, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <qual.icon className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-800 mb-2">{qual.title}</h3>
                  <p className="text-gray-600 text-sm">{qual.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-gradient-to-r from-teal-100 to-green-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Her Philosophy</h2>
            <blockquote className="text-xl text-gray-700 italic leading-relaxed mb-8 bg-white p-8 rounded-2xl shadow-xl">
              "Every woman deserves to feel powerful in her own body. My mission is not just to treat symptoms, but to educate and empower women to make lifestyle choices that prevent disease and enhance vitality through every phase of life."
            </blockquote>
            <p className="text-lg text-gray-600 mb-8">
              Dr. Pravina believes in the intersection of science and support—where clinical knowledge meets compassionate guidance, helping women navigate their health journey with confidence and clarity.
            </p>
            <Button className="bg-green-500 hover:bg-green-600 text-white">
              Join Our Community
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
