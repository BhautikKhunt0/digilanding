'use client'

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function PortfolioSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-deep-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl lg:text-6xl font-montserrat font-black mb-6">
            SUCCESS <span className="text-accent-teal">STORIES</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real results for real businesses. See how we've transformed brands and driven growth across industries.
          </p>
        </motion.div>
        
        {/* Portfolio Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Case Study 1 */}
          <motion.div 
            className="group cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-3xl mb-8">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="E-commerce success metrics dashboard" 
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-vibrant-orange text-white px-4 py-2 rounded-full text-sm inline-block mb-4">E-commerce</div>
                <h3 className="text-2xl font-montserrat font-bold mb-2">TechStore Revolution</h3>
                <p className="text-gray-300">300% increase in online sales through strategic digital transformation</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Conversion Rate</span>
                <span className="text-accent-teal font-bold text-xl">+245%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Revenue Growth</span>
                <span className="text-accent-teal font-bold text-xl">+300%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Timeline</span>
                <span className="text-white font-bold">6 months</span>
              </div>
            </div>
          </motion.div>
          
          {/* Case Study 2 */}
          <motion.div 
            className="group cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-3xl mb-8">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Healthcare digital marketing campaign analytics" 
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-highlight-purple text-white px-4 py-2 rounded-full text-sm inline-block mb-4">Healthcare</div>
                <h3 className="text-2xl font-montserrat font-bold mb-2">HealthCare Plus</h3>
                <p className="text-gray-300">Brand awareness campaign reaching 2M+ potential patients</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Brand Awareness</span>
                <span className="text-accent-teal font-bold text-xl">+180%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Social Reach</span>
                <span className="text-accent-teal font-bold text-xl">2.1M</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Timeline</span>
                <span className="text-white font-bold">4 months</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Featured Case Study */}
        <motion.div 
          className="bg-gradient-to-r from-vibrant-orange to-highlight-purple rounded-3xl p-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-montserrat font-black mb-6">Ready to Be Our Next Success Story?</h3>
          <p className="text-xl text-white text-opacity-90 mb-8 max-w-3xl mx-auto">
            Join the ranks of industry leaders who've transformed their digital presence with our proven strategies.
          </p>
          <Button 
            onClick={() => scrollToSection("contact")}
            className="bg-white text-deep-black px-12 py-4 rounded-full font-montserrat font-bold text-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105"
          >
            Start Your Transformation
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
