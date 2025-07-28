
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, Heart, Users, BookOpen, Mail, Calendar } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Community = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [postText, setPostText] = useState("");
  const [sharedPosts, setSharedPosts] = useState<{text: string, tags: string[]}[]>([]);

  const tags = ["Progress Update", "Question", "Success Story"];

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  };

  const handleShare = () => {
    if (!postText.trim() || selectedTags.length === 0) return;
    setSharedPosts([{ text: postText, tags: selectedTags }, ...sharedPosts]);
    setPostText("");
    setSelectedTags([]);
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
            <h1 className="font-playfair text-6xl md:text-7xl font-bold mb-6 leading-tight">Join Our Community</h1>
            <p className="font-inter text-xl md:text-2xl mb-10 opacity-90">Connect, Learn, and Grow with Fellow Women on Their Wellness Journey</p>
            <Button variant="soft" size="xl" className="bg-white/95 text-primary hover:bg-white hover:text-primary font-inter font-semibold backdrop-blur-sm border border-white/20">
              <MessageCircle className="mr-3 h-5 w-5" />
              Join WhatsApp Community
            </Button>
          </div>
        </div>
      </section>

      {/* Share Your Journey & Upcoming Events Section */}
      <section className="py-16" style={{ backgroundColor: '#EAF8F6' }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Share Your Journey (2/3 width) */}
            <div className="md:col-span-2 space-y-6">
              <Card className="p-6">
                <h3 className="font-playfair text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary text-3xl font-bold">+</span> Share Your Journey</h3>
                <Textarea
                  className="w-full mb-4"
                  placeholder="Share your progress, ask questions, or celebrate wins with the community..."
                  rows={3}
                  value={postText}
                  onChange={e => setPostText(e.target.value)}
                />
                <div className="flex flex-wrap gap-2 mb-4">
                  {tags.map(tag => (
                    <button
                      key={tag}
                      type="button"
                      className={`px-5 py-2 rounded-xl border text-base font-semibold transition-all duration-200 focus:outline-none ${selectedTags.includes(tag) ? 'bg-primary text-white border-primary' : 'bg-white text-foreground border-gray-300'}`}
                      onClick={() => toggleTag(tag)}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
                <div className="flex justify-end">
                  <Button className="bg-primary text-white px-6" onClick={handleShare} disabled={!postText.trim() || selectedTags.length === 0}>Share</Button>
                </div>
              </Card>
              {/* Shared Posts - now scrollable */}
              <div className="max-h-96 overflow-y-auto space-y-4 pr-2">
                {sharedPosts.map((post, idx) => (
                  <Card className="p-6 bg-white" key={idx}>
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-blue-400 flex items-center justify-center text-white font-bold text-lg mr-3">U</div>
                      <div>
                        <span className="font-inter font-semibold">You</span>
                        {post.tags.map(tag => (
                          <span key={tag} className="ml-2 px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full font-medium">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div className="mb-4 font-inter text-foreground">{post.text}</div>
                    {/* Static action bar */}
                    <div className="flex items-center gap-8 pt-2 text-gray-500">
                      <div className="flex items-center gap-1">
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='1.5'>
                          <path strokeLinecap='round' strokeLinejoin='round' d='M12 21C12 21 4 13.5 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.5 16 21 16 21H12Z' />
                        </svg>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='1.5'>
                          <path strokeLinecap='round' strokeLinejoin='round' d='M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z' />
                        </svg>
                      </div>
                      <div className="flex items-center gap-1">
                        {/* Lucide Share2 icon */}
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='1.5'>
                          <circle cx='18' cy='5' r='3'/>
                          <circle cx='6' cy='12' r='3'/>
                          <circle cx='18' cy='19' r='3'/>
                          <path d='M8.59 13.51l6.83 3.98'/>
                          <path d='M15.41 6.51l-6.82 3.98'/>
                        </svg>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            {/* Upcoming Events (1/3 width) */}
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="font-playfair text-2xl font-bold mb-4 flex items-center gap-2"><Calendar className="w-6 h-6 text-primary" /> Upcoming Events</h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl border border-gray-200 bg-white">
                    <div className="font-inter font-semibold mb-1">Live Q&A: Decoding Your Blood Report</div>
                    <div className="text-sm text-muted-foreground mb-1 flex items-center gap-2"><Calendar className="w-4 h-4" /> Dec 15, 2024 <span>•</span> 7:00 PM IST</div>
                    <div className="text-xs text-muted-foreground mb-2">156 attending</div>
                    <Button size="sm" variant="outline">Join</Button>
                  </div>
                  <div className="p-4 rounded-xl border border-gray-200 bg-white">
                    <div className="font-inter font-semibold mb-1">Community Cook-Along: Anti-Inflammatory Recipes</div>
                    <div className="text-sm text-muted-foreground mb-1 flex items-center gap-2"><Calendar className="w-4 h-4" /> Dec 18, 2024 <span>•</span> 6:30 PM IST</div>
                    <div className="text-xs text-muted-foreground mb-2">89 attending</div>
                    <Button size="sm" variant="outline">Join</Button>
                  </div>
                  <div className="p-4 rounded-xl border border-gray-200 bg-white">
                    <div className="font-inter font-semibold mb-1">Success Stories Sharing Circle</div>
                    <div className="text-sm text-muted-foreground mb-1 flex items-center gap-2"><Calendar className="w-4 h-4" /> Dec 20, 2024 <span>•</span> 8:00 PM IST</div>
                    <div className="text-xs text-muted-foreground mb-2">47 attending</div>
                    <Button size="sm" variant="outline">Join</Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Community Benefits */}
      <section className="py-24" style={{ backgroundColor: '#e9f5e9' }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center mb-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-foreground/30 to-foreground/30"></div>
            <h2 className="font-playfair text-5xl font-bold text-foreground mx-8">Why Join Our Community?</h2>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-foreground/30 to-foreground/30"></div>
          </div>
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
            <div className="flex items-center justify-center mb-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-foreground/30 to-foreground/30"></div>
            <h2 className="font-playfair text-5xl font-bold text-foreground mx-8">What You'll Receive</h2>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-foreground/30 to-foreground/30"></div>
          </div>
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
      <section className="py-24 bg-foreground text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
            <div className="flex items-center justify-center mb-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/30 to-white/30"></div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mx-8">Stay Updated with Our Newsletter</h2>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-white/30 to-white/30"></div>
          </div>
            <p className="font-inter text-xl text-gray-300 mb-10">Get weekly wellness tips, healthy recipes, and motivation delivered to your inbox</p>
            
            <div className="bg-white/10 backdrop-blur-sm p-10 rounded-2xl shadow-xl max-w-2xl mx-auto border border-white/20">
              <div className="flex flex-col md:flex-row gap-4">
                <Input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Button variant="wellness" size="lg" className="font-inter font-semibold">
                  <Mail className="mr-2 h-4 w-4" />
                  Subscribe
                </Button>
              </div>
              <p className="font-inter text-sm text-gray-400 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Community;
