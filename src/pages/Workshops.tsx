
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Users, BookOpen } from "lucide-react";

const Workshops = () => {
  const workshops = [
    {
      title: "PCOS Lifestyle",
      subtitle: "Empower Your Hormones",
      description: "Comprehensive lifestyle strategies for managing PCOS, hormone balance, and improving fertility naturally through evidence-based nutrition and wellness practices.",
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "Weight Management for Women",
      subtitle: "Science-Based Approach",
      description: "Understanding female metabolism, hormonal influences on weight, and sustainable lifestyle changes that work with your body's natural rhythms.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Fertility & Pre-Pregnancy",
      subtitle: "Prepare Your Body",
      description: "Optimize your fertility through nutrition, lifestyle modifications, and stress management techniques. Prepare your body for healthy conception and pregnancy.",
      color: "from-green-400 to-green-600"
    },
    {
      title: "Pregnancy Wellness",
      subtitle: "Nurture & Thrive",
      description: "Navigate pregnancy with confidence through proper nutrition, safe exercise, and lifestyle practices that support both mother and baby's health.",
      color: "from-emerald-400 to-teal-500"
    },
    {
      title: "Lactation & Postpartum",
      subtitle: "Recovery & Bonding",
      description: "Support your postpartum recovery with nutrition for breastfeeding, managing postpartum changes, and establishing healthy routines with your baby.",
      color: "from-orange-400 to-red-500"
    },
    {
      title: "Child Nutrition & Immunity",
      subtitle: "Foundation for Life",
      description: "Build strong immunity and healthy eating habits in children through age-appropriate nutrition, meal planning, and lifestyle practices for growing families.",
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Corporate Wellness for Working Women",
      subtitle: "Balance & Success",
      description: "Manage career stress, maintain work-life balance, and prioritize health while excelling professionally. Practical strategies for busy working women.",
      color: "from-gray-500 to-gray-700"
    },
    {
      title: "Emotional & Mental Wellness",
      subtitle: "Mind-Body Connection",
      description: "Understanding the connection between emotional health and physical wellness. Stress management, mindfulness, and building resilience through life's challenges.",
      color: "from-pink-400 to-rose-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-green-50 to-emerald-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Path'o'Life Signature Workshops</h1>
            <p className="text-xl mb-8">Live, interactive 3-hour transformative sessions</p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-2">
                <Calendar className="h-6 w-6" />
                <span>Every Tuesday & Friday</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Clock className="h-6 w-6" />
                <span>5:30 – 8:30 PM</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Users className="h-6 w-6" />
                <span>Google Meet</span>
              </div>
            </div>

            <p className="text-lg mb-8">🎓 Includes checklists, toolkits, Q&A | 🎤 English-Marathi mix</p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-teal-600 hover:bg-teal-50 hover:text-teal-800 border border-teal-600 font-poppins font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Register for Workshop
              </Button>
              <Button size="lg" className="bg-white text-teal-600 hover:bg-teal-50 hover:text-teal-800 border border-teal-600 font-poppins font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Join WhatsApp Community
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {workshops.map((workshop, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${workshop.color} rounded-full flex items-center justify-center mb-6`}>
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{workshop.title}</h3>
                  <p className="text-teal-600 font-semibold mb-4">{workshop.subtitle}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{workshop.description}</p>
                  <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                    Register for This Workshop
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">How Our Workshops Work</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">1</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Register Online</h3>
              <p className="text-gray-600">Choose your workshop and secure your spot with easy online registration</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">2</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Join Live Session</h3>
              <p className="text-gray-600">Attend the 3-hour interactive session via Google Meet with Q&A</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">3</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Get Resources</h3>
              <p className="text-gray-600">Receive comprehensive toolkits, checklists, and actionable materials</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Workshops;
