
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Mail, BookOpen, Heart, Star, Users, Phone, Instagram, Facebook, Linkedin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-green-50 to-emerald-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-teal-600 via-teal-500 to-green-500 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 text-center animate-fade-in">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/68d9c8ae-c9bc-4365-b332-ec694fda90af.png" 
              alt="Path'o'Life Logo" 
              className="w-32 h-32 mx-auto mb-6"
            />
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-teal-100 bg-clip-text text-transparent">
              Path'o'Life
            </h1>
            <p className="text-xl md:text-2xl mb-2">Women's Wellness by Dr. Pravina</p>
            <p className="text-lg opacity-90">Evidence-based Lifestyle Medicine – From Periods to Pregnancy to Parenting</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-4xl mx-auto">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-teal-50 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Calendar className="mr-2 h-5 w-5" />
              Join Our Next Workshop
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-teal-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Heart className="mr-2 h-5 w-5" />
              Book a 1:1 Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <BookOpen className="mr-2 h-5 w-5" />
              Explore Wellness Plans
            </Button>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-teal-200 to-green-200 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-72 h-72 bg-gradient-to-br from-teal-400 to-green-400 rounded-full flex items-center justify-center text-white text-6xl font-bold">
                  Dr. P
                </div>
              </div>
            </div>
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Welcome to Path'o'Life</h2>
              <h3 className="text-2xl text-teal-600 font-semibold mb-6">Empowering Women Through Every Life Phase</h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From the first period to planning a pregnancy, from postpartum to parenting, and even through career and corporate stress—we support every phase of womanhood.
              </p>
              <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Users className="mr-2 h-5 w-5" />
                Join Our Community
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="py-20 bg-gradient-to-r from-teal-100 to-green-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Dr. Pravina Kale, Founder & CEO</h2>
            <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-8 bg-white p-8 rounded-2xl shadow-xl">
              "As a lifestyle medicine physician and pathologist, I've spent years understanding disease—but what truly lights me up is helping women prevent it and reclaim their power through lifestyle.
              <br/><br/>
              So many women suffer silently—irregular periods, weight struggles, fertility challenges, postpartum blues—and they don't need just prescriptions.
              <br/><br/>
              They need education, guidance, and hand-holding.
              <br/><br/>
              That's why I created Path'o'Life—where science meets support. Where women are not told what to do, but empowered to choose what works for their phase of life."
            </blockquote>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">What We Offer</h2>
          <p className="text-xl text-center text-gray-600 mb-12">Workshops | 1:1 Consultations | Wellness Plans</p>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              "PCOS & Hormone Health",
              "Weight Management", 
              "Fertility & Pre-Pregnancy",
              "Pregnancy Lifestyle",
              "Lactation & Postpartum",
              "Child Nutrition",
              "Corporate Wellness for Women"
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in border-2 border-teal-100 hover:border-teal-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800">{service}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20 bg-gradient-to-r from-green-100 to-teal-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Advisory Board</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Dr. Sandhya Kale",
                title: "Senior Obstetrician & Gynecologist",
                description: "Expert in women's reproductive health with over 25 years of experience"
              },
              {
                name: "Dr. Pushpa Junghare", 
                title: "Senior Obstetrician & Gynecologist",
                description: "Specializing in high-risk pregnancies and maternal care"
              },
              {
                name: "Dr. Pratibha Kale",
                title: "Pediatrician, Neonatologist, Psychologist & Lactation Expert",
                description: "Comprehensive child and maternal care specialist"
              }
            ].map((doctor, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{doctor.name}</h3>
                  <p className="text-teal-600 font-semibold mb-3">{doctor.title}</p>
                  <p className="text-gray-600 text-sm">{doctor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Meet the Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                name: "Dr. Pravina Kale",
                title: "Founder, Lifestyle & Pathology Expert"
              },
              {
                name: "Dr. Sonal Deshmukh",
                title: "Infertility & ObGyn"
              },
              {
                name: "Dr. Kalyani Gade", 
                title: "Infertility & ObGyn"
              },
              {
                name: "Dr. Apurva Kale",
                title: "Pediatrician & Neonatologist"
              }
            ].map((doctor, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-teal-400 to-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">{doctor.name.split(' ')[1][0]}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{doctor.name}</h3>
                  <p className="text-teal-600 text-sm">{doctor.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-green-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Path'o'Life Signature Webinars</h2>
          <p className="text-xl text-center mb-12 opacity-90">Live, 3-hour transformative sessions</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {[
              { title: "PCOS Lifestyle", subtitle: "Empower Your Hormones", color: "bg-teal-500" },
              { title: "Weight Management", subtitle: "For the Female Body", color: "bg-yellow-500" },
              { title: "Pre-Pregnancy & Fertility Prep", subtitle: "Prepare Your Body", color: "bg-green-500" },
              { title: "Pregnancy Wellness", subtitle: "Nurture & Thrive", color: "bg-emerald-500" },
              { title: "Lactation & Postpartum Care", subtitle: "Recovery & Bonding", color: "bg-orange-500" },
              { title: "Child Nutrition & Early Habits", subtitle: "Foundation for Life", color: "bg-blue-500" },
              { title: "Corporate Wellness for Working Women", subtitle: "Balance & Success", color: "bg-gray-600" }
            ].map((workshop, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 ${workshop.color} rounded-full flex items-center justify-center mb-4`}>
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{workshop.title}</h3>
                  <p className="text-sm opacity-80">{workshop.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mb-8">
            <p className="text-lg mb-4">📍 Every Tuesday & Friday | 5:30–8:30 PM | Google Meet</p>
            <p className="mb-4">🎓 Includes checklists, toolkits, Q&A | 🎤 English-Marathi mix</p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-teal-50 font-semibold px-8 py-3 rounded-full">
              Register for Workshop
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-teal-600 font-semibold px-8 py-3 rounded-full">
              Join WhatsApp Community
            </Button>
          </div>
        </div>
      </section>

      {/* Wellness Plans */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Wellness Plans</h2>
          <p className="text-xl text-center text-gray-600 mb-12">Personalized Women's Coaching by Dr. Pravina</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "1-Month Reset", price: "₹5,000", color: "from-green-400 to-green-600" },
              { name: "3-Month Healing", price: "₹12,000", color: "from-teal-400 to-green-500" },
              { name: "6-Month Transformation", price: "₹20,000", color: "from-teal-400 to-teal-600" }
            ].map((plan, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in border-2 border-transparent hover:border-teal-200">
                <CardContent className="p-8 text-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${plan.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <Heart className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{plan.name}</h3>
                  <p className="text-3xl font-bold text-teal-600 mb-6">{plan.price}</p>
                  <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-full">
                    Join This Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-teal-300">Path'o'Life</h3>
              <p className="text-gray-300 mb-4">Empowering women through evidence-based lifestyle medicine</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center"><Mail className="h-4 w-4 mr-2" /> drpravina.patholife@gmail.com</p>
                <p className="flex items-center"><Phone className="h-4 w-4 mr-2" /> 9421829899</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-300 mb-4">Get weekly tips, recipes & wellness updates</p>
              <Button variant="outline" className="border-teal-400 text-teal-300 hover:bg-teal-400 hover:text-white">
                Subscribe
              </Button>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Instagram className="h-6 w-6 text-gray-300 hover:text-teal-300 cursor-pointer transition-colors" />
                <Facebook className="h-6 w-6 text-gray-300 hover:text-teal-300 cursor-pointer transition-colors" />
                <Linkedin className="h-6 w-6 text-gray-300 hover:text-teal-300 cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-lg text-teal-300 italic mb-4">
              "A woman empowered with the right lifestyle becomes unstoppable – not just for her own life, but for generations ahead."
            </p>
            <p className="text-gray-400">— Dr. Pravina Kale</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
