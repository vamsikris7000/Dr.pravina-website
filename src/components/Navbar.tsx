
import { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Live Workshops", path: "/workshops" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    { name: "1:1 Consultations", path: "/consultations" },
    { name: "Lifestyle Plans", path: "/wellness-plans" },
  ];

  const aboutDropdown = [
    { name: "Founder", path: "/about" },
    { name: "Path'o'Life", path: "/patholife" },
  ];
  const [aboutOpen, setAboutOpen] = useState(false);
  const aboutCloseTimeout = useRef<NodeJS.Timeout | null>(null);

  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  return (
    <nav className="backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-border" style={{ backgroundColor: '#e9f5e9' }}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-2.5">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-white rounded-full p-2 shadow-sm">
            <img 
              src="/photos/logo.png" 
              alt="Path'o'Life Logo" 
              className="h-[36px] w-auto transition-transform duration-300 group-hover:scale-105"
              style={{ minWidth: 36 }}
            />
            </div>
            <div className="flex flex-col justify-center leading-tight">
              <h1 className="text-2xl font-bold font-playfair mb-0 pb-0" style={{ color: '#338B81', lineHeight: 1.1 }}>Path'o'Life</h1>
              <span className="text-[11px] font-medium mt-0 tracking-wide" style={{ color: '#338B81', lineHeight: 1.2, fontFamily: 'Playfair Display, serif' }}>Periods • Pregnancy • Parenting</span>
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
            {/* Live Workshops */}
            <Link
              key="Live Workshops"
              to="/workshops"
              className={`text-sm font-medium transition-all duration-300 font-inter hover:text-primary hover:scale-105 ${
                location.pathname === "/workshops"
                  ? "text-primary border-b-2 border-primary"
                  : "text-foreground"
              }`}
            >
              Live Workshops
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
                Other Services <ChevronDown className="ml-1 w-4 h-4" />
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
            {/* About Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => {
                if (aboutCloseTimeout.current) clearTimeout(aboutCloseTimeout.current);
                setAboutOpen(true);
              }}
              onMouseLeave={() => {
                aboutCloseTimeout.current = setTimeout(() => setAboutOpen(false), 150);
              }}
            >
              <button
                className={`flex items-center text-sm font-medium font-inter transition-all duration-300 hover:text-primary hover:scale-105 px-2 ${
                  location.pathname === "/about" ? "text-primary border-b-2 border-primary" : "text-foreground"
                }`}
                onClick={() => setAboutOpen((open) => !open)}
                type="button"
              >
                About <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {aboutOpen && (
                <div
                  className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-border z-50"
                >
                  {aboutDropdown.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`block px-6 py-3 text-sm font-inter font-medium transition-all duration-200 hover:bg-primary/10 hover:text-primary rounded-xl ${
                        location.pathname === item.path ? "text-primary bg-primary/10" : "text-foreground"
                      }`}
                      onClick={() => setAboutOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {/* Contact */}
            <Link
              key="Contact"
              to="/contact"
              className={`text-sm font-medium transition-all duration-300 font-inter hover:text-primary hover:scale-105 ${
                location.pathname === "/contact"
                  ? "text-primary border-b-2 border-primary"
                  : "text-foreground"
              }`}
            >
              Contact
            </Link>
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
                  <span>Other Services</span>
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
              {/* About Dropdown (collapsible) */}
              <div className="">
                <button
                  className={`w-full flex items-center justify-between font-inter text-sm font-medium transition-all duration-300 p-3 rounded-xl hover:bg-primary/10 hover:text-primary ${
                    location.pathname === "/about"
                      ? "text-primary bg-primary/10 border-l-4 border-primary"
                      : "text-foreground hover:scale-105"
                  }`}
                  onClick={() => setAboutOpen((open) => !open)}
                  type="button"
                >
                  <span>About</span>
                  <ChevronDown className={`ml-2 w-4 h-4 transition-transform ${aboutOpen ? "rotate-180" : ""}`} />
                </button>
                {aboutOpen && (
                  <div className="pl-4 mt-1 flex flex-col gap-1">
                    {aboutDropdown.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className={`block px-4 py-2 text-sm font-inter font-medium transition-all duration-200 rounded-xl hover:bg-primary/10 hover:text-primary ${
                          location.pathname === item.path ? "text-primary bg-primary/10" : "text-foreground"
                        }`}
                        onClick={() => {
                          setIsOpen(false);
                          setAboutOpen(false);
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              {/* Other nav items */}
              {navItems.slice(2).map((item) => (
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
