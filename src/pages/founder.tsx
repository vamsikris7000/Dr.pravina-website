import { Button } from "@/components/ui/button";

const Founder = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e9f5e9' }}>
      <section className="relative py-24 text-white overflow-hidden" style={{ backgroundColor: '#338B81' }}>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="font-playfair text-6xl md:text-7xl font-bold mb-6 leading-tight">Founder</h1>
            <p className="font-inter text-xl md:text-2xl mb-8 opacity-90">This is the Founder page. Content coming soon.</p>
          </div>
        </div>
      </section>
      <section className="py-24 bg-foreground text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="order-2 lg:order-1 animate-scale-in">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse-glow"></div>
                <img 
                  src="/photos/founder.png" 
                  alt="Founder" 
                  className="relative w-full max-w-md mx-auto rounded-2xl shadow-elevated hover:shadow-glow transition-all duration-500 hover:scale-105"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 animate-fade-in-up">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">About the Founder</h2>
              <p className="font-inter text-lg text-gray-300 mb-6 leading-relaxed">
                This is a placeholder for the founder's story and credentials. You can update this content later.
              </p>
              <Button variant="wellness" size="lg" className="font-inter font-semibold">
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Founder; 