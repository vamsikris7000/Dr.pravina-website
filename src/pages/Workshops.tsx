
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Users, BookOpen, CheckCircle, Mail } from "lucide-react";
import { chatbotEvents } from "@/lib/chatbot-events";
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { fetchWorkshops } from "@/services/api";

interface Workshop {
  _id: string;
  title: string;
  subtitle: string;
  audience: string;
  icon: string;
  day: string;
  date: string;
  time: string;
  price: number;
  features: string[];
  description: string;
  isActive: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

const Workshops = () => {
  const [workshops, setWorkshops] = useState<Workshop[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchWorkshopsData = async () => {
    try {
      const data = await fetchWorkshops();
      setWorkshops(data);
    } catch (error) {
      console.error('Error fetching workshops:', error);
      // Fallback to default workshops if backend is not available
      const fallbackWorkshops = [
        {
          _id: "1",
          title: "The Weight Reset for Women",
          subtitle: "Not Just Weight Loss, A Full Body Reset",
          audience: "For All Women 18+",
          icon: "👩🏻‍⚕️",
          day: "Sunday",
          date: "8th Aug",
          time: "4:50 PM - 7:00 PM",
          price: 499,
          features: [
            "Understand your hormones & weight connection",
            "Tackle belly fat, cravings & low energy",
            "Anti-inflammatory nutrition made practical",
            "Smart movement & strength strategies",
            "Stress, sleep & metabolism mastery",
            "Build habits that last, not bounce back"
          ],
          description: "Transform your relationship with weight through hormone-aware strategies.",
          isActive: true,
          order: 1,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          _id: "2",
          title: "PCOS Unplugged",
          subtitle: "Your Hormones, Hair, Skin & Sanity",
          audience: "For Teens & Young Women",
          icon: "🌸",
          day: "Saturday",
          date: "10th Aug",
          time: "3:00 PM - 6:30 PM",
          price: 499,
          features: [
            "Decode your hormones & cycle",
            "Period problems & PCOS types", 
            "Skin, hair, mood & weight tips",
            "Menstrual cup basics & hygiene",
            "PCOS-friendly food & movement",
            "Cycle syncing & stress hacks"
          ],
          description: "Navigate PCOS with confidence through practical lifestyle strategies.",
          isActive: true,
          order: 2,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          _id: "3",
          title: "Pre-Pregnancy Power Couple",
          subtitle: "Plan Parenthood with Purpose",
          audience: "For Couples Planning Pregnancy",
          icon: "👫🏻",
          day: "Friday",
          date: "15th Aug",
          time: "5:00 PM - 8:30 PM",
          price: 499,
          features: [
            "Fertility nutrition for both partners",
            "Cycle tracking & fertile window basics",
            "Lifestyle shifts to boost conception",
            "Detox, stress & sleep prep",
            "Emotional alignment & partner mindset",
            "Myths vs science of getting pregnant"
          ],
          description: "Prepare for pregnancy with evidence-based strategies for both partners.",
          isActive: true,
          order: 3,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          _id: "4",
          title: "Pregnancy Wellness Workshop",
          subtitle: "Feel Nourished, Calm & Connected",
          audience: "For Expecting Mothers (All Trimesters)",
          icon: "🤱🏻",
          day: "Wednesday",
          date: "20th Aug",
          time: "4:00 PM - 7:30 PM",
          price: 499,
          features: [
            "Pregnancy nutrition & meal planning",
            "Safe movement & exercise guidelines",
            "Stress management & mental wellness",
            "Sleep optimization & comfort tips",
            "Partner support & relationship dynamics",
            "Birth preparation & postpartum planning"
          ],
          description: "Nurture yourself and your baby through every trimester with confidence.",
          isActive: true,
          order: 4,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          _id: "5",
          title: "Postpartum Recovery & Beyond",
          subtitle: "Heal, Nourish & Thrive",
          audience: "For New Mothers (0-12 months postpartum)",
          icon: "👶🏻",
          day: "Tuesday",
          date: "25th Aug",
          time: "3:30 PM - 7:00 PM",
          price: 499,
          features: [
            "Postpartum healing & recovery timeline",
            "Nutrition for healing & breastfeeding",
            "Sleep training & baby care basics",
            "Mental health & emotional support",
            "Pelvic floor & core restoration",
            "Return to exercise & self-care"
          ],
          description: "Navigate the postpartum journey with strength and support.",
          isActive: true,
          order: 5,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          _id: "6",
          title: "Parenting with Purpose",
          subtitle: "Raising Confident, Happy Children",
          audience: "For Parents of Children 0-12 years",
          icon: "👨‍👩‍👧‍👦",
          day: "Monday",
          date: "30th Aug",
          time: "4:30 PM - 8:00 PM",
          price: 499,
          features: [
            "Child development milestones & expectations",
            "Positive discipline & behavior management",
            "Nutrition for growing children",
            "Screen time & digital wellness",
            "Family communication & bonding",
            "Self-care for parents & work-life balance"
          ],
          description: "Build a strong foundation for your family's health and happiness.",
          isActive: true,
          order: 6,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      ];
      setWorkshops(fallbackWorkshops);
    } finally {
      setLoading(false);
    }
  };



  useEffect(() => {
    fetchWorkshopsData();

    // Set up polling to refresh workshops every 30 seconds
    const interval = setInterval(fetchWorkshopsData, 30000);

    return () => clearInterval(interval);
  }, []);
  
  const handleWorkshopRegistration = (workshopTitle: string) => {
    const message = `Hi, I want to register for the ${workshopTitle} workshop`;
    chatbotEvents.openChat(message);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e9f5e9' }}>
      {/* Hero Section */}
      <section className="relative py-24 text-white overflow-hidden" style={{ backgroundColor: '#1a5f57' }}>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="relative container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
            <h1 className="font-playfair text-6xl md:text-7xl font-bold mb-6 leading-tight">Path'o'Life Signature Workshops</h1>
            <p className="font-inter text-xl md:text-2xl mb-8 opacity-90">Live • Interactive • Transformational Sessions for Every Phase of Womanhood</p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 min-h-[80px]">
                <Clock className="h-6 w-6" />
                <span className="font-inter font-medium">2-hour deep-dive workshops</span>
              </div>
              <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 min-h-[80px]">
                <Users className="h-6 w-6" />
                <span className="font-inter font-medium">Live on Google Meet</span>
              </div>

            </div>

            <div className="max-w-2xl mx-auto text-center">
              <p className="font-inter text-lg text-white/90">
                Includes: Downloadable checklists & lifestyle toolkits
              </p>
              <p className="font-inter text-lg text-white/90">
                Q&A's
              </p>
              <p className="font-inter text-lg text-white/90">
                Free resources you'll actually use
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12" style={{ backgroundColor: '#e9f5e9' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-playfair text-3xl md:text-4xl font-semibold mb-4 text-foreground">
              💫 Your journey to healing starts here.
            </p>
            <p className="font-inter text-lg text-muted-foreground">
              Choose your workshop and join us live from the comfort of your home.
            </p>
          </div>
        </div>
      </section>

      {/* Workshops Grid */}
      <section className="pt-8 pb-24" style={{ backgroundColor: '#e9f5e9' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-playfair text-3xl font-bold text-foreground">Available Workshops</h2>
            </div>
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                <p className="mt-4 text-muted-foreground">Loading workshops...</p>
              </div>
            ) : workshops.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No workshops available at the moment.</p>
                <p className="text-sm text-muted-foreground mt-2">Please check back later.</p>
              </div>
            ) : (
              <>
                {workshops.filter(workshop => workshop.isActive).map((workshop, index) => (
                <Card key={workshop._id} className="group hover:shadow-elevated hover:-translate-y-2 transition-all duration-500 animate-fade-in mb-8 overflow-hidden border-0 shadow-lg" style={{animationDelay: `${index * 100}ms`}}>
                <CardContent className="p-6 md:p-8 bg-gradient-to-br from-white to-gray-50/50">
                  {/* Mobile Layout */}
                  <div className="md:hidden">
                    <div className="flex items-start mb-4">
                      <div className="mr-4 flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/20 rounded-full flex items-center justify-center shadow-sm">
                          <span className="text-2xl">{workshop.icon}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-playfair text-lg font-bold text-foreground mb-1">{workshop.title}</h3>
                        <p className="font-inter text-primary font-semibold text-sm mb-2">{workshop.subtitle}</p>
                        <div className="inline-flex items-center px-2 py-1 bg-primary/10 rounded-full">
                          <span className="text-primary text-xs font-medium">{workshop.audience}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Mobile Timing Information */}
                    <div className="bg-primary/5 rounded-lg p-3 border border-primary/10 mb-4">
                      <div className="grid grid-cols-2 gap-2 text-center">
                        <div className="flex flex-col items-center">
                          <Calendar className="h-4 w-4 text-primary mb-1" />
                          <span className="font-inter text-xs font-semibold text-primary">{workshop.day}, {workshop.date}</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <Clock className="h-4 w-4 text-primary mb-1" />
                          <span className="font-inter text-xs font-semibold text-primary">{workshop.time}</span>
                        </div>
                      </div>
                      <div className="text-center mt-2 pt-2 border-t border-primary/20">
                        <span className="font-inter text-lg font-bold text-green-600">₹{workshop.price}</span>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden md:flex items-start mb-8">
                    <div className="mr-6 flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-full flex items-center justify-center shadow-sm">
                        <span className="text-3xl">{workshop.icon}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">{workshop.title}</h3>
                      <p className="font-inter text-primary font-semibold text-lg mb-2">{workshop.subtitle}</p>
                      <div className="inline-flex items-center px-3 py-1 bg-primary/10 rounded-full">
                        <span className="text-primary text-sm font-medium">{workshop.audience}</span>
                      </div>
                    </div>
                    {/* Timing Information - Right Side */}
                    <div className="ml-6 flex-shrink-0 text-right">
                      <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                        <div className="flex items-center justify-center mb-2">
                          <Calendar className="h-4 w-4 text-primary mr-2" />
                          <span className="font-inter text-sm font-semibold text-primary">{workshop.day}, {workshop.date}</span>
                        </div>
                        <div className="flex items-center justify-center mb-2">
                          <Clock className="h-4 w-4 text-primary mr-2" />
                          <span className="font-inter text-sm font-semibold text-primary">{workshop.time}</span>
                        </div>
                        <div className="flex items-center justify-center">
                          <span className="font-inter text-lg font-bold text-green-600">₹{workshop.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6 max-h-0 group-hover:max-h-96 transition-all duration-500 overflow-hidden">
                    {workshop.features && workshop.features.length > 0 ? (
                      workshop.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-primary stroke-2 flex-shrink-0 mt-0.5" />
                          <span className="font-inter text-muted-foreground leading-relaxed">{feature}</span>
                        </div>
                      ))
                    ) : (
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary stroke-2 flex-shrink-0 mt-0.5" />
                        <span className="font-inter text-muted-foreground leading-relaxed">Comprehensive workshop content</span>
                      </div>
                    )}
                  </div>
                  <Button 
                    variant="soft" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-primary to-primary/90 text-white hover:from-primary/90 hover:to-primary font-inter font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border-0"
                    onClick={() => handleWorkshopRegistration(workshop.title)}
                  >
                    Register for This Workshop
                  </Button>
                </CardContent>
              </Card>
            ))}
              </>
            )}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center mb-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-foreground/30 to-foreground/30"></div>
            <h2 className="font-playfair text-5xl font-bold text-foreground mx-8">How Our Workshops Work</h2>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-foreground/30 to-foreground/30"></div>
          </div>
            <p className="font-inter text-xl text-muted-foreground">Simple steps to transform your wellness journey</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center group animate-fade-in" style={{animationDelay: '100ms'}}>
              <div className="w-18 h-18 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">1</div>
              <h3 className="font-playfair text-xl font-bold text-foreground mb-3">Register Online</h3>
              <p className="font-inter text-muted-foreground">Choose your workshop and secure your spot with easy online registration</p>
            </div>
            <div className="text-center group animate-fade-in" style={{animationDelay: '200ms'}}>
              <div className="w-18 h-18 bg-gradient-to-br from-success to-success/80 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">2</div>
              <h3 className="font-playfair text-xl font-bold text-foreground mb-3">Join Live Session</h3>
              <p className="font-inter text-muted-foreground">Attend the 2-hour interactive session via Google Meet with Q&A</p>
            </div>
            <div className="text-center group animate-fade-in" style={{animationDelay: '300ms'}}>
              <div className="w-18 h-18 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">3</div>
              <h3 className="font-playfair text-xl font-bold text-foreground mb-3">Get Resources</h3>
              <p className="font-inter text-muted-foreground">Receive comprehensive toolkits, checklists, and actionable materials</p>
            </div>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-foreground text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 mb-16">
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
              <h4 className="font-inter text-xl font-semibold mb-6 text-white">Legal</h4>
              <div className="space-y-4 font-inter text-gray-300">
                <Link to="/privacy-policy" className="block hover:text-primary-glow transition-colors hover:translate-x-1 duration-300">Privacy Policy</Link>
                <Link to="/returns-refund-policy" className="block hover:text-primary-glow transition-colors hover:translate-x-1 duration-300">Returns & Refund Policy</Link>
                <Link to="/terms-conditions" className="block hover:text-primary-glow transition-colors hover:translate-x-1 duration-300">Terms & Conditions</Link>
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

export default Workshops;

