'use client'

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      >
        <div className="absolute inset-0 gradient-overlay"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-6xl lg:text-8xl font-montserrat font-black text-white mb-6 leading-none">
            WE CREATE
            <br />
            <span className="text-accent-teal">DIGITAL</span>
            <br />
            EXCELLENCE
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Transform your brand with cutting-edge digital marketing strategies that drive real results. From concept to conversion, we craft experiences that matter.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-white text-deep-black px-12 py-4 rounded-full font-montserrat font-bold text-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105"
            >
              Start Your Journey
            </Button>
            <Button 
              variant="outline"
              onClick={() => scrollToSection("portfolio")}
              className="border-2 border-white text-white px-12 py-4 rounded-full font-montserrat font-bold text-lg hover:bg-white hover:text-deep-black transition-all duration-300 bg-transparent"
            >
              View Our Work
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="text-white text-2xl" />
      </motion.div>
    </section>
  );
}
