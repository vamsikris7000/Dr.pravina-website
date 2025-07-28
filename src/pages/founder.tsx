import { Button } from "@/components/ui/button";

const Founder = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e9f5e9' }}>
      <section className="relative py-24 text-white overflow-hidden" style={{ backgroundColor: '#1a5f57' }}>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
            <h1 className="font-playfair text-6xl md:text-7xl font-bold mb-8 leading-tight">Meet the Founder</h1>
            
            <div className="space-y-6 mb-10">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
                Dr. Pravina Kale Shegokar
              </h2>
              
              <p className="font-inter text-xl md:text-2xl text-white/95 mb-6">
                MBBS, MD (Pathology), DipIBLM (USA)
              </p>
              
              <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
                <span className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white font-inter text-sm md:text-base font-medium border border-white/20">
                  Pathologist
                </span>
                <span className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white font-inter text-sm md:text-base font-medium border border-white/20">
                  Dermatopathologist
                </span>
                <span className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white font-inter text-sm md:text-base font-medium border border-white/20">
                  Lifestyle Medicine Physician
                </span>
                <span className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white font-inter text-sm md:text-base font-medium border border-white/20">
                  Researcher
                </span>
                <span className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white font-inter text-sm md:text-base font-medium border border-white/20">
                  Medical Writer
                </span>
                <span className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white font-inter text-sm md:text-base font-medium border border-white/20">
                  National Athlete
                </span>
                <span className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white font-inter text-sm md:text-base font-medium border border-white/20">
                  Musician
                </span>
              </div>
            </div>
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