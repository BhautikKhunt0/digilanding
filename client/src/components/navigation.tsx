import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "glass-effect bg-white/95" : "glass-effect"
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-montserrat font-bold text-deep-black">
              <span className="text-gradient">Nexus</span> Digital
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection("services")}
                className="text-charcoal hover:text-vibrant-orange transition-colors duration-300 font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("portfolio")}
                className="text-charcoal hover:text-vibrant-orange transition-colors duration-300 font-medium"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-charcoal hover:text-vibrant-orange transition-colors duration-300 font-medium"
              >
                About
              </button>
              <Button 
                onClick={() => scrollToSection("contact")}
                className="bg-vibrant-orange text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all duration-300 font-medium"
              >
                Contact
              </Button>
            </div>
          </div>
          
          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-charcoal" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-6 mt-8">
                  <button 
                    onClick={() => scrollToSection("services")}
                    className="text-charcoal hover:text-vibrant-orange transition-colors duration-300 font-medium text-left"
                  >
                    Services
                  </button>
                  <button 
                    onClick={() => scrollToSection("portfolio")}
                    className="text-charcoal hover:text-vibrant-orange transition-colors duration-300 font-medium text-left"
                  >
                    Portfolio
                  </button>
                  <button 
                    onClick={() => scrollToSection("about")}
                    className="text-charcoal hover:text-vibrant-orange transition-colors duration-300 font-medium text-left"
                  >
                    About
                  </button>
                  <Button 
                    onClick={() => scrollToSection("contact")}
                    className="bg-vibrant-orange text-white rounded-full hover:bg-opacity-90 transition-all duration-300 font-medium w-fit"
                  >
                    Contact
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
