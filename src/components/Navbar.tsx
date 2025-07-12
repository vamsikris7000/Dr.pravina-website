
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
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/68d9c8ae-c9bc-4365-b332-ec694fda90af.png" 
              alt="Path'o'Life Logo" 
              className="w-10 h-10"
            />
            <div>
              <h1 className="text-xl font-bold text-teal-600">Path'o'Life</h1>
              <p className="text-xs text-gray-600">Women's Wellness by Dr. Pravina</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors text-teal-600 hover:text-teal-800 ${
                  location.pathname === item.path
                    ? "border-b-2 border-teal-600"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-teal-600 hover:bg-teal-700 text-white">
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
          <div className="lg:hidden pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-teal-600 ${
                    location.pathname === item.path
                      ? "text-teal-600"
                      : "text-gray-700"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="bg-teal-600 hover:bg-teal-700 text-white w-fit">
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
