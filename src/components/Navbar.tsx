
import { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    // Our Services will be handled separately
    { name: "About Dr. Pravina", path: "/about" },
    { name: "Our Team", path: "/team" },
    { name: "Community", path: "/community" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    { name: "Workshops", path: "/workshops" },
    { name: "1:1 Consultations", path: "/consultations" },
    { name: "Wellness Plans", path: "/wellness-plans" },
  ];

  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

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
            {/* Home */}
            <Link
              key="Home"
              to="/"
              className={`text-sm font-medium transition-all duration-300 font-inter hover:text-primary hover:scale-105 ${
                location.pathname === "/"
                  ? "text-primary border-b-2 border-primary"
                  : "text-foreground"
              }`}
            >
              Home
            </Link>
            {/* Our Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => {
                if (closeTimeout.current) clearTimeout(closeTimeout.current);
                setServicesOpen(true);
              }}
              onMouseLeave={() => {
                closeTimeout.current = setTimeout(() => setServicesOpen(false), 150);
              }}
            >
              <button
                className={`flex items-center text-sm font-medium font-inter transition-all duration-300 hover:text-primary hover:scale-105 px-2 ${
                  services.some(s => s.path === location.pathname)
                    ? "text-primary border-b-2 border-primary"
                    : "text-foreground"
                }`}
                onClick={() => setServicesOpen((open) => !open)}
                type="button"
              >
                Our Services <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {servicesOpen && (
                <div
                  className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-border z-50"
                >
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className={`block px-6 py-3 text-sm font-inter font-medium transition-all duration-200 hover:bg-primary/10 hover:text-primary rounded-xl ${
                        location.pathname === service.path ? "text-primary bg-primary/10" : "text-foreground"
                      }`}
                      onClick={() => setServicesOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {/* Other nav items */}
            {navItems.slice(1).map((item) => (
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
              {/* Home */}
              <Link
                key="Home"
                to="/"
                className={`font-inter text-sm font-medium transition-all duration-300 p-3 rounded-xl hover:bg-primary/10 hover:text-primary ${
                  location.pathname === "/"
                    ? "text-primary bg-primary/10 border-l-4 border-primary"
                    : "text-foreground hover:scale-105"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              {/* Our Services Dropdown (collapsible) */}
              <div className="">
                <button
                  className={`w-full flex items-center justify-between font-inter text-sm font-medium transition-all duration-300 p-3 rounded-xl hover:bg-primary/10 hover:text-primary ${
                    services.some(s => s.path === location.pathname)
                      ? "text-primary bg-primary/10 border-l-4 border-primary"
                      : "text-foreground hover:scale-105"
                  }`}
                  onClick={() => setServicesOpen((open) => !open)}
                  type="button"
                >
                  <span>Our Services</span>
                  <ChevronDown className={`ml-2 w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div className="pl-4 mt-1 flex flex-col gap-1">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className={`block px-4 py-2 text-sm font-inter font-medium transition-all duration-200 rounded-xl hover:bg-primary/10 hover:text-primary ${
                          location.pathname === service.path ? "text-primary bg-primary/10" : "text-foreground"
                        }`}
                        onClick={() => {
                          setIsOpen(false);
                          setServicesOpen(false);
                        }}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              {/* Other nav items */}
              {navItems.slice(1).map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-inter text-sm font-medium transition-all duration-300 p-3 rounded-xl hover:bg-primary/10 hover:text-primary ${
                    location.pathname === item.path
                      ? "text-primary bg-primary/10 border-l-4 border-primary"
                      : "text-foreground hover:scale-105"
                  }`}
                  onClick={() => setIsOpen(false)}
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
