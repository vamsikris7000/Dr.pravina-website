
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
    <nav className="bg-white/98 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-border/20 transition-all duration-300">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          {/* Logo - Enhanced */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="relative">
              <img 
                src="/lovable-uploads/68d9c8ae-c9bc-4365-b332-ec694fda90af.png" 
                alt="Path'o'Life Logo" 
                className="w-11 h-11 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
              />
              <div className="absolute inset-0 bg-primary/10 rounded-full scale-0 group-hover:scale-125 transition-transform duration-300"></div>
            </div>
            <div className="transition-all duration-300 group-hover:translate-x-1">
              <h1 className="text-2xl font-bold text-primary font-playfair tracking-tight">Path'o'Life</h1>
              <p className="text-xs text-muted-foreground font-inter font-medium tracking-wide">Women's Wellness by Dr. Pravina</p>
            </div>
          </Link>

          {/* Desktop Navigation - Enhanced */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 font-inter rounded-lg group ${
                  location.pathname === item.path
                    ? "text-primary bg-primary/8 shadow-sm"
                    : "text-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 scale-0 group-hover:scale-100 transition-transform duration-300 ${
                  location.pathname === item.path ? "scale-100" : ""
                }`}></div>
                {location.pathname === item.path && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-primary rounded-full"></div>
                )}
              </Link>
            ))}
            <div className="ml-6">
              <Button 
                variant="wellness" 
                size="lg" 
                className="font-inter font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Book Consultation
              </Button>
            </div>
          </div>

          {/* Mobile menu button - Enhanced */}
          <button
            className="lg:hidden relative p-2 rounded-lg hover:bg-primary/5 transition-all duration-300 group"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            <div className="relative w-6 h-6">
              {isOpen ? (
                <X className="h-6 w-6 text-foreground group-hover:text-primary transition-colors duration-300" />
              ) : (
                <Menu className="h-6 w-6 text-foreground group-hover:text-primary transition-colors duration-300" />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Navigation - Enhanced */}
        {isOpen && (
          <div className="lg:hidden pb-6 border-t border-border/20 mt-2 pt-6 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-4 py-3 text-sm font-medium transition-all duration-300 font-inter rounded-lg group ${
                    location.pathname === item.path
                      ? "text-primary bg-primary/8 shadow-sm"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </Link>
              ))}
              <div className="pt-4">
                <Button 
                  variant="wellness" 
                  size="lg" 
                  className="w-full font-inter font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Book Consultation
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
