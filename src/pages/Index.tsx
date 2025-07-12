
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Mail, BookOpen, Heart, Star, Users, Phone, Instagram, Facebook, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

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
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4 text-white">
              Path'o'Life
            </h1>
            <p className="font-poppins text-xl md:text-2xl mb-2">Women's Wellness by Dr. Pravina</p>
            <p className="font-poppins text-lg opacity-90">Lifestyle Medicine for Every Phase of Womanhood</p>
            <p className="font-poppins text-base opacity-80 mt-2">From Periods to Parenting — Explore Wellness with Dr. Pravina Kale</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-4xl mx-auto">
            <Link to="/workshops">
              <Button size="lg" className="bg-white text-teal-600 hover:bg-teal-50 hover:text-teal-800 font-poppins font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-teal-600">
                <Calendar className="mr-2 h-5 w-5 text-teal-600" />
                Join Our Next Workshop
              </Button>
            </Link>
            <Link to="/consultations">
              <Button size="lg" className="bg-white text-teal-600 hover:bg-teal-50 hover:text-teal-800 font-poppins font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-teal-600">
                <Heart className="mr-2 h-5 w-5 text-teal-600" />
                Book a 1:1 Consultation
              </Button>
            </Link>
            <Link to="/wellness-plans">
              <Button size="lg" className="bg-white text-teal-600 hover:bg-teal-50 hover:text-teal-800 font-poppins font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-teal-600">
                <BookOpen className="mr-2 h-5 w-5 text-teal-600" />
                Explore Wellness Plans
              </Button>
            </Link>
            <Link to="/community">
              <Button size="lg" className="bg-white text-teal-600 hover:bg-teal-50 hover:text-teal-800 font-poppins font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-teal-600">
                <Users className="mr-2 h-5 w-5 text-teal-600" />
                Join WhatsApp Community
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-teal-200 to-green-200 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-72 h-72 bg-gradient-to-br from-teal-400 to-green-400 rounded-full flex items-center justify-center text-white text-6xl font-bold font-playfair">
                  Dr. P
                </div>
              </div>
            </div>
            <div className="animate-fade-in">
              <h2 className="font-playfair text-4xl font-bold text-gray-800 mb-6">Welcome to Path'o'Life</h2>
              <h3 className="font-poppins text-2xl text-teal-600 font-semibold mb-6">Empowering Women Through Every Life Phase</h3>
              <p className="font-poppins text-lg text-gray-600 mb-8 leading-relaxed">
                From the first period to planning a pregnancy, from postpartum to parenting, and even through career and corporate stress—we support every phase of womanhood with evidence-based lifestyle medicine.
              </p>
              <Link to="/community">
                <Button className="bg-green-500 hover:bg-green-600 text-white font-poppins font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <Users className="mr-2 h-5 w-5" />
                  Join Our Community
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="py-20 bg-gradient-to-r from-teal-100 to-green-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto animate-fade-in">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="font-playfair text-3xl font-bold text-gray-800 mb-6">Dr. Pravina Kale, Founder & CEO</h2>
                <blockquote className="font-poppins text-lg text-gray-700 leading-relaxed mb-8 bg-white p-8 rounded-2xl shadow-xl">
                  <span className="italic">
                    "As a lifestyle medicine physician and pathologist, I've spent years understanding disease—but what truly lights me up is helping women prevent it and reclaim their power through lifestyle.
                    <br/><br/>
                    So many women suffer silently—irregular periods, weight struggles, fertility challenges, postpartum blues—and they don't need just prescriptions.
                    <br/><br/>
                    They need education, guidance, and hand-holding.
                    <br/><br/>
                    That's why I created Path'o'Life—where science meets support. Where women are not told what to do, but empowered to choose what works for their phase of life."
                  </span>
                </blockquote>
                <Link to="/about">
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white font-poppins">
                    Learn More About Dr. Pravina
                  </Button>
                </Link>
              </div>
              <div className="order-1 md:order-2">
                <div className="flex justify-center">
                  <img 
                    src="/lovable-uploads/b6aeaa4f-b346-4225-81f7-15c3c238960f.png" 
                    alt="Dr. Pravina Kale, Founder & CEO" 
                    className="w-80 h-80 object-cover rounded-full shadow-2xl border-4 border-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-center text-gray-800 mb-4">What We Offer</h2>
          <p className="font-poppins text-xl text-center text-gray-600 mb-12">Workshops | 1:1 Consultations | Wellness Plans</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <Link to="/workshops">
              <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in border-2 border-teal-100 hover:border-teal-300 cursor-pointer">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="font-poppins font-bold text-xl text-gray-800 mb-2">Workshops</h3>
                  <p className="font-poppins text-gray-600 text-sm">Learn, Interact, Transform</p>
                  <p className="font-poppins text-gray-500 text-xs mt-2">Live 3-hour sessions every Tue & Fri</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/consultations">
              <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in border-2 border-green-100 hover:border-green-300 cursor-pointer">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="font-poppins font-bold text-xl text-gray-800 mb-2">1:1 Consultations</h3>
                  <p className="font-poppins text-gray-600 text-sm">Personal guidance, video calls</p>
                  <p className="font-poppins text-gray-500 text-xs mt-2">Matched with the right expert</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/wellness-plans">
              <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in border-2 border-yellow-100 hover:border-yellow-300 cursor-pointer">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="font-poppins font-bold text-xl text-gray-800 mb-2">Wellness Plans</h3>
                  <p className="font-poppins text-gray-600 text-sm">1, 3, 6-month lifestyle plans</p>
                  <p className="font-poppins text-gray-500 text-xs mt-2">Personalized coaching by Dr. Pravina</p>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="text-center">
            <Link to="/team">
              <Button variant="outline" className="font-poppins">
                Meet Our Expert Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-teal-100 to-green-100">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-center text-gray-800 mb-12">What Our Community Says</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <p className="font-poppins text-gray-600 italic mb-4">"Dr. Pravina's PCOS workshop changed my life. Finally, someone who understands the female body and gives practical, science-based solutions."</p>
                <p className="font-poppins font-semibold text-gray-800">- Priya, Mumbai</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <p className="font-poppins text-gray-600 italic mb-4">"The 3-month wellness plan helped me lose 12 kg sustainably. No crash diets, just lifestyle changes that actually work."</p>
                <p className="font-poppins font-semibold text-gray-800">- Sneha, Pune</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <p className="font-poppins text-gray-600 italic mb-4">"As a working mom, the corporate wellness workshop gave me tools to manage stress and prioritize my health."</p>
                <p className="font-poppins font-semibold text-gray-800">- Kavya, Bangalore</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-playfair text-2xl font-bold mb-4 text-teal-300">Path'o'Life</h3>
              <p className="font-poppins text-gray-300 mb-4">Empowering women through evidence-based lifestyle medicine</p>
            </div>
            
            <div>
              <h4 className="font-poppins text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 font-poppins text-gray-300">
                <Link to="/about" className="block hover:text-teal-300 transition-colors">About Dr. Pravina</Link>
                <Link to="/workshops" className="block hover:text-teal-300 transition-colors">Workshops</Link>
                <Link to="/consultations" className="block hover:text-teal-300 transition-colors">Consultations</Link>
                <Link to="/wellness-plans" className="block hover:text-teal-300 transition-colors">Wellness Plans</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-poppins text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 font-poppins text-gray-300">
                <p className="flex items-center"><Mail className="h-4 w-4 mr-2" /> drpravina.patholife@gmail.com</p>
                <p className="flex items-center"><Phone className="h-4 w-4 mr-2" /> 9421829899</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-poppins text-lg font-semibold mb-4">Newsletter</h4>
              <p className="font-poppins text-gray-300 mb-4">Get weekly tips, recipes & wellness updates</p>
              <Link to="/community">
                <Button variant="outline" className="border-teal-400 text-teal-300 hover:bg-teal-400 hover:text-white font-poppins">
                  Subscribe
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="font-poppins text-lg text-teal-300 italic mb-2">
                  "A woman empowered with the right lifestyle becomes unstoppable – not just for her own life, but for generations ahead."
                </p>
                <p className="font-poppins text-gray-400">— Dr. Pravina Kale</p>
              </div>
              <div className="flex space-x-4">
                <Instagram className="h-6 w-6 text-gray-300 hover:text-teal-300 cursor-pointer transition-colors" />
                <Facebook className="h-6 w-6 text-gray-300 hover:text-teal-300 cursor-pointer transition-colors" />
                <Linkedin className="h-6 w-6 text-gray-300 hover:text-teal-300 cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
