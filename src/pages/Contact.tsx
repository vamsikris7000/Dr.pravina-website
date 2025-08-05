
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MessageCircle, Clock, MapPin, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { createMessage } from "@/services/api";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  
  // Journey sharing state
  const [journeyMessage, setJourneyMessage] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [journeyPosts, setJourneyPosts] = useState([]);
  const [sharingLoading, setSharingLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await createMessage(formData);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleJourneyShare = () => {
    if (!journeyMessage.trim()) {
      toast({
        title: "Please enter a message",
        description: "Share your journey with the community.",
        variant: "destructive",
      });
      return;
    }

    setSharingLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const newPost = {
        id: Date.now(),
        message: journeyMessage,
        category: selectedCategory || 'General',
        timestamp: new Date().toLocaleString(),
        author: 'Anonymous' // In real app, this would be the logged-in user
      };
      
      setJourneyPosts(prev => [newPost, ...prev]);
      setJourneyMessage('');
      setSelectedCategory('');
      setSharingLoading(false);
      
      toast({
        title: "Journey shared successfully!",
        description: "Your story has been shared with the community.",
      });
    }, 1000);
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
            <h1 className="font-playfair text-6xl md:text-7xl font-bold mb-6 leading-tight">Get in Touch</h1>
            <p className="font-inter text-xl md:text-2xl mb-10 opacity-90">We're here to support your wellness journey every step of the way</p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center mb-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-foreground/30 to-foreground/30"></div>
            <h2 className="font-playfair text-5xl font-bold text-foreground mx-8">Contact Information</h2>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-foreground/30 to-foreground/30"></div>
          </div>
            <p className="font-inter text-xl text-muted-foreground">Multiple ways to reach us for your wellness needs</p>
          </div>
          {/* Contact Details */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="flex items-start space-x-6 group animate-fade-in" style={{animationDelay: '100ms'}}>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-2">Email</h3>
                  <p className="font-inter text-muted-foreground">drpravina.patholife@gmail.com</p>
                  <p className="font-inter text-sm text-muted-foreground">We typically respond within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 group animate-fade-in" style={{animationDelay: '300ms'}}>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                  <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-2">WhatsApp</h3>
                  <p className="font-inter text-muted-foreground">+91 9421829899</p>
                  <p className="font-inter text-sm text-muted-foreground">Quick questions and community updates</p>
                </div>
              </div>
            </div>
          </div>

          {/* Forms Section */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card className="shadow-elevated hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-10">
                    <h2 className="font-playfair text-3xl font-bold text-foreground mb-8">Send us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-inter text-sm font-medium text-foreground mb-2">First Name</label>
                          <Input 
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder="Your first name" 
                            required
                          />
                        </div>
                        <div>
                          <label className="block font-inter text-sm font-medium text-foreground mb-2">Last Name</label>
                          <Input 
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            placeholder="Your last name" 
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block font-inter text-sm font-medium text-foreground mb-2">Email</label>
                        <Input 
                          name="email"
                          type="email" 
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com" 
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block font-inter text-sm font-medium text-foreground mb-2">Phone Number</label>
                        <Input 
                          name="phoneNumber"
                          type="tel" 
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                          placeholder="+91 XXXXX XXXXX" 
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block font-inter text-sm font-medium text-foreground mb-2">Subject</label>
                        <Input 
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="What's this about?" 
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block font-inter text-sm font-medium text-foreground mb-2">Message</label>
                        <Textarea 
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us how we can help you..." 
                          rows={5}
                          required
                        />
                      </div>
                      
                      <Button 
                        type="submit"
                        variant="wellness" 
                        size="lg" 
                        className="w-full font-inter font-semibold"
                        disabled={loading}
                      >
                        {loading ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Share Your Journey */}
              <div>
                <Card className="shadow-elevated hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-10">
                    <h2 className="font-playfair text-3xl font-bold text-foreground mb-8 flex items-center">
                      <span className="text-primary mr-3">+</span>
                      Share Your Journey
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <Textarea 
                          placeholder="Share your progress, ask questions, or celebrate wins with the community..." 
                          rows={4}
                          className="resize-none"
                          value={journeyMessage}
                          onChange={(e) => setJourneyMessage(e.target.value)}
                        />
                      </div>
                      
                      <div className="flex flex-wrap gap-3">
                        <Button 
                          variant={selectedCategory === 'Progress Update' ? 'default' : 'outline'} 
                          size="sm" 
                          className="font-inter font-medium"
                          onClick={() => setSelectedCategory('Progress Update')}
                        >
                          Progress Update
                        </Button>
                        <Button 
                          variant={selectedCategory === 'Question' ? 'default' : 'outline'} 
                          size="sm" 
                          className="font-inter font-medium"
                          onClick={() => setSelectedCategory('Question')}
                        >
                          Question
                        </Button>
                        <Button 
                          variant={selectedCategory === 'Success Story' ? 'default' : 'outline'} 
                          size="sm" 
                          className="font-inter font-medium"
                          onClick={() => setSelectedCategory('Success Story')}
                        >
                          Success Story
                        </Button>
                      </div>
                      
                      <div className="flex justify-end">
                        <Button 
                          variant="wellness" 
                          size="lg" 
                          className="font-inter font-semibold"
                          onClick={handleJourneyShare}
                          disabled={sharingLoading}
                        >
                          {sharingLoading ? "Sharing..." : "Share"}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Journey Posts Display */}
                {journeyPosts.length > 0 && (
                  <Card className="mt-6 shadow-elevated hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-6">
                      <h3 className="font-playfair text-xl font-bold text-foreground mb-4">Community Journey</h3>
                      <div className="h-60 overflow-y-auto space-y-4 pr-2">
                        {journeyPosts.map((post) => (
                          <div key={post.id} className="border-l-4 border-primary/20 pl-4 py-3 bg-gray-50 rounded-r-lg">
                            <div className="flex items-start justify-between mb-2">
                              <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                                {post.category}
                              </span>
                              <span className="text-xs text-gray-500">{post.timestamp}</span>
                            </div>
                            <p className="font-inter text-sm text-gray-700 leading-relaxed mb-2">
                              {post.message}
                            </p>
                            <p className="text-xs text-gray-500">- {post.author}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-foreground text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-12 mb-16">
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

export default Contact;
