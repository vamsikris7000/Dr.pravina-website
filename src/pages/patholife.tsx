import { Button } from "@/components/ui/button";

const PathOLife = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e9f5e9' }}>
      {/* Hero Section */}
      <section className="relative py-24 text-white overflow-hidden" style={{ backgroundColor: '#338B81' }}>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="font-playfair text-6xl md:text-7xl font-bold mb-6 leading-tight">Path'o'Life</h1>
            <p className="font-inter text-xl md:text-2xl mb-8 opacity-90">Your Health Deserves More</p>
          </div>
        </div>
      </section>
      {/* Main Content Section */}
      <section className="py-24 bg-foreground text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* Logo/Visual */}
            <div className="order-2 lg:order-1 animate-scale-in">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse-glow"></div>
                <img 
                  src="/photos/logo.png" 
                  alt="Path'o'Life" 
                  className="relative w-full max-w-md mx-auto rounded-2xl shadow-elevated hover:shadow-glow transition-all duration-500 hover:scale-105"
                />
              </div>
            </div>
            {/* Text Content */}
            <div className="order-1 lg:order-2 animate-fade-in-up">
              <div className="flex items-center justify-center mb-8">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/30 to-white/30"></div>
                <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mx-8 leading-tight">Our Story & Philosophy</h2>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent via-white/30 to-white/30"></div>
              </div>
              <p className="font-inter text-lg text-gray-300 mb-6 leading-relaxed">
                At <span className="text-primary font-semibold">Path’o’Life</span>, we believe that true healthcare goes beyond just treating symptoms. Women deserve education, guidance, and personalized lifestyle solutions that support them through every changing phase of life.
              </p>
              <p className="font-inter text-lg text-gray-300 mb-6 leading-relaxed">
                We are here to help women navigate the complexities of hormonal health, fertility, pregnancy, postpartum recovery, lactation, and parenting through the power of lifestyle medicine, delivered with compassion and care.
              </p>
              <p className="font-inter text-lg text-gray-300 mb-8 leading-relaxed">
                Whether you are struggling with PCOS, preparing for pregnancy, healing after birth, or simply looking to feel like yourself again, Path’o’Life is here to guide you with clarity, confidence, and practical support.
              </p>
              <div className="flex items-center justify-center mb-8">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/30 to-white/30"></div>
                <h3 className="font-inter text-2xl font-bold text-white mx-8">Why the Name Path’o’Life?</h3>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent via-white/30 to-white/30"></div>
              </div>
              <p className="font-inter text-lg text-gray-300 mb-6 leading-relaxed">
                Every woman walks her own unique path through life. From girlhood to womanhood, through periods, pregnancy, postpartum, and beyond, health is not a destination. It is a journey shaped by the daily choices we make.
              </p>
              <p className="font-inter text-lg text-gray-300 mb-8 leading-relaxed">
                The name <span className="text-primary font-semibold">Path’o’Life</span> reflects our purpose. We walk beside you on this path through personalized guidance, support, and science-backed lifestyle medicine. Our goal is to help you move through each life stage feeling informed, empowered, and cared for.
              </p>
              <ul className="mb-8 text-lg text-gray-300 font-inter leading-relaxed list-disc pl-6">
                <li className="mb-2">We do not simply tell you what to do. We help you understand your body, so you can make choices that align with your goals, your health, and your life stage.</li>
                <li className="mb-2">When your lifestyle supports the natural path of your life, health, happiness, and healing become natural outcomes.</li>
              </ul>
              <div className="flex items-center justify-center mb-8">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/30 to-white/30"></div>
                <h3 className="font-inter text-2xl font-bold text-white mx-8">Our Core Philosophy</h3>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent via-white/30 to-white/30"></div>
              </div>
              <ul className="mb-8 text-lg text-gray-300 font-inter leading-relaxed list-none pl-0">
                <li className="mb-2">✔ A lifestyle prescription comes before a medical prescription</li>
                <li className="mb-2">✔ Women deserve personalized, practical, and compassionate care</li>
                <li className="mb-2">✔ Health is more than the absence of disease. It’s energy, confidence, and joy</li>
                <li className="mb-2">✔ When a woman heals, a family thrives, and generations change</li>
              </ul>
              <div className="flex items-center justify-center mb-8">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/30 to-white/30"></div>
                <h3 className="font-inter text-2xl font-bold text-white mx-8">What We Offer</h3>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent via-white/30 to-white/30"></div>
              </div>
              <ul className="mb-8 text-lg text-gray-300 font-inter leading-relaxed list-disc pl-6">
                <li className="mb-2"><span className="text-primary">🔹 Workshops</span> — Group learning for empowerment, clarity, and practical tools.</li>
                <li className="mb-2"><span className="text-primary">🔹 1:1 Consultations</span> — Personalized guidance for deeper, focused health solutions.</li>
                <li className="mb-2"><span className="text-primary">🔹 Lifestyle Medicine Programs</span> — Hand-holding support for lasting change and wellness.</li>
              </ul>
              <p className="font-inter text-lg text-gray-300 mb-8 leading-relaxed">
                To guide women through periods, pregnancy, postpartum, and parenting with evidence-based lifestyle medicine rooted in science, compassion, and care. Through education, consultations, and long term support, we help women reclaim their health, balance their hormones, and restore their energy so they can live with clarity and confidence.
              </p>
              <div className="flex items-center justify-center mb-8">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/30 to-white/30"></div>
                <h3 className="font-inter text-2xl font-bold text-white mx-8">Our Mission</h3>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent via-white/30 to-white/30"></div>
              </div>
              <p className="font-inter text-lg text-gray-300 mb-8 leading-relaxed">
                To create a space where every woman feels empowered, informed, and supported through every phase of her health journey.
              </p>
              <div className="flex items-center justify-center mb-8">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/30 to-white/30"></div>
                <h3 className="font-inter text-2xl font-bold text-white mx-8">Our Vision</h3>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent via-white/30 to-white/30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PathOLife; 