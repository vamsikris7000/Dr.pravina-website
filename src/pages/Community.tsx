
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, Heart, Users, BookOpen, Mail, Calendar } from "lucide-react";

const Community = () => {
  return (
    <div className="min-h-screen bg-gradient-bg">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="relative container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
            <h1 className="font-playfair text-6xl md:text-7xl font-bold mb-6 leading-tight">Join Our Community</h1>
            <p className="font-inter text-xl md:text-2xl mb-10 opacity-90">Connect, Learn, and Grow with Fellow Women on Their Wellness Journey</p>
            <Button variant="soft" size="xl" className="bg-white/95 text-primary hover:bg-white hover:text-primary font-inter font-semibold backdrop-blur-sm border border-white/20">
              <MessageCircle className="mr-3 h-5 w-5" />
              Join WhatsApp Community
            </Button>
          </div>
        </div>
      </section>

      {/* Community Benefits */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-playfair text-5xl font-bold text-foreground mb-6">Why Join Our Community?</h2>
            <p className="font-inter text-xl text-muted-foreground">Discover the benefits of being part of our supportive wellness network</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="group hover:shadow-elevated hover:-translate-y-2 transition-all duration-500 animate-fade-in" style={{animationDelay: '100ms'}}>
              <CardContent className="p-10 text-center">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">Supportive Network</h3>
                <p className="font-inter text-muted-foreground">Connect with like-minded women facing similar health challenges and triumphs</p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-elevated hover:-translate-y-2 transition-all duration-500 animate-fade-in" style={{animationDelay: '200ms'}}>
              <CardContent className="p-10 text-center">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-success to-success/80 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                    <BookOpen className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">Weekly Tips</h3>
                <p className="font-inter text-muted-foreground">Receive evidence-based wellness tips, healthy recipes, and lifestyle guidance</p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-elevated hover:-translate-y-2 transition-all duration-500 animate-fade-in" style={{animationDelay: '300ms'}}>
              <CardContent className="p-10 text-center">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                    <Heart className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">Expert Guidance</h3>
                <p className="font-inter text-muted-foreground">Get direct access to Dr. Pravina and our team of experts for quick questions</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-playfair text-5xl font-bold text-foreground mb-6">What You'll Receive</h2>
            <p className="font-inter text-xl text-muted-foreground">Comprehensive support and resources for your wellness journey</p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start space-x-6 group animate-fade-in" style={{animationDelay: '100ms'}}>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                    <Calendar className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-foreground mb-3">Weekly Wellness Tips</h3>
                    <p className="font-inter text-muted-foreground">Evidence-based tips on nutrition, exercise, stress management, and women's health</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 group animate-fade-in" style={{animationDelay: '200ms'}}>
                  <div className="w-16 h-16 bg-gradient-to-br from-success to-success/80 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-foreground mb-3">Healthy Recipes</h3>
                    <p className="font-inter text-muted-foreground">Nutritious, easy-to-make recipes tailored for women's health needs</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 group animate-fade-in" style={{animationDelay: '300ms'}}>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-foreground mb-3">Motivational Support</h3>
                    <p className="font-inter text-muted-foreground">Daily motivation and encouragement from our community and experts</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6 group animate-fade-in" style={{animationDelay: '400ms'}}>
                  <div className="w-16 h-16 bg-gradient-to-br from-success to-success/80 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-foreground mb-3">Live Q&A Sessions</h3>
                    <p className="font-inter text-muted-foreground">Monthly live sessions with Dr. Pravina to answer your health questions</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 group animate-fade-in" style={{animationDelay: '500ms'}}>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                    <MessageCircle className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-foreground mb-3">Early Access</h3>
                    <p className="font-inter text-muted-foreground">First to know about new workshops, programs, and special offers</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 group animate-fade-in" style={{animationDelay: '600ms'}}>
                  <div className="w-16 h-16 bg-gradient-to-br from-success to-success/80 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-foreground mb-3">Resource Library</h3>
                    <p className="font-inter text-muted-foreground">Access to exclusive health guides, checklists, and wellness tools</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gradient-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">Stay Updated with Our Newsletter</h2>
            <p className="font-inter text-xl text-muted-foreground mb-10">Get weekly wellness tips, healthy recipes, and motivation delivered to your inbox</p>
            
            <div className="bg-white p-10 rounded-2xl shadow-xl max-w-2xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                <Input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-1"
                />
                <Button variant="wellness" size="lg" className="font-inter font-semibold">
                  <Mail className="mr-2 h-4 w-4" />
                  Subscribe
                </Button>
              </div>
              <p className="font-inter text-sm text-muted-foreground mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-24 bg-gradient-hero text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 leading-tight">Ready to Join Our Wellness Community?</h2>
            <p className="font-inter text-xl mb-10 opacity-90">Take the first step towards a healthier, happier you with the support of our amazing community</p>
            <div className="flex flex-col lg:flex-row gap-6 justify-center">
              <Button variant="soft" size="xl" className="bg-white/95 text-primary hover:bg-white hover:text-primary font-inter font-semibold backdrop-blur-sm border border-white/20">
                <MessageCircle className="mr-3 h-5 w-5" />
                Join WhatsApp Community
              </Button>
              <Button variant="outline" size="xl" className="border-2 border-white/50 text-white hover:bg-white hover:text-primary backdrop-blur-sm font-inter font-semibold">
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
