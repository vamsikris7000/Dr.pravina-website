
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Dr. Pravina", path: "/about" },
    { name: "Workshops", path: "/workshops" },
    { name: "1:1 Consultations", path: "/consultations" },
    { name: "Wellness Plans", path: "/wellness-plans" },
    { name: "Our Team", path: "/team" },
    { name: "Community", path: "/community" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="/lovable-uploads/68d9c8ae-c9bc-4365-b332-ec694fda90af.png" 
              alt="Path'o'Life Logo" 
              className="w-12 h-12 transition-transform duration-300 group-hover:scale-110"
            />
            <div>
              <h1 className="text-2xl font-bold text-primary font-playfair">Path'o'Life</h1>
              <p className="text-sm text-muted-foreground font-inter">Women's Wellness by Dr. Pravina</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-all duration-300 font-inter hover:text-primary hover:scale-105 ${
                  location.pathname === item.path
                    ? "text-primary border-b-2 border-primary"
                    : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button variant="wellness" size="lg" className="font-inter font-semibold">
              Book Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-6 animate-fade-in">
            <div className="flex flex-col space-y-4 bg-gradient-card rounded-2xl p-6 mt-4 shadow-elevated border border-border/50">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-inter text-sm font-medium transition-all duration-300 p-3 rounded-xl hover:bg-primary/10 hover:text-primary ${
                    location.pathname === item.path
                      ? "text-primary bg-primary/10 border-l-4 border-primary"
                      : "text-foreground hover:scale-105"
                  }`}
                  onClick={() => setIsOpen(false)}
                  style={{animationDelay: `${index * 50}ms`}}
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="wellness" size="lg" className="w-full font-inter font-semibold mt-4">
                Book Consultation
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
