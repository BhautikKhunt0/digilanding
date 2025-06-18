'use client'

import { motion } from "framer-motion";
import { Lightbulb, Palette, Megaphone, Search, Share2, Check } from "lucide-react";

export default function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl lg:text-6xl font-montserrat font-black text-deep-black mb-6">
            OUR <span className="text-gradient">EXPERTISE</span>
          </h2>
          <p className="text-xl text-charcoal max-w-3xl mx-auto leading-relaxed">
            We deliver comprehensive digital marketing solutions that amplify your brand's reach and drive measurable growth across all channels.
          </p>
        </motion.div>
        
        {/* Asymmetric Services Grid */}
        <motion.div 
          className="asymmetric-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Strategy & Consulting */}
          <motion.div 
            variants={itemVariants}
            className="bg-deep-black text-white p-12 rounded-3xl hover-lift group cursor-pointer"
          >
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-vibrant-orange rounded-2xl flex items-center justify-center mr-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-montserrat font-bold">Strategy & Consulting</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Data-driven strategies that align with your business objectives and market positioning.
            </p>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-accent-teal mr-3" />
                Market Analysis
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-accent-teal mr-3" />
                Competitor Research
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-accent-teal mr-3" />
                Growth Planning
              </li>
            </ul>
          </motion.div>
          
          {/* Creative Design */}
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-br from-vibrant-orange to-highlight-purple text-white p-12 rounded-3xl hover-lift group cursor-pointer"
          >
            <div className="mb-8">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mb-6">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-montserrat font-bold">Creative Design</h3>
            </div>
            <p className="text-white text-opacity-90 text-lg leading-relaxed">
              Stunning visuals that capture attention and communicate your brand story effectively.
            </p>
          </motion.div>
          
          {/* Digital Advertising */}
          <motion.div 
            variants={itemVariants}
            className="bg-accent-teal text-white p-12 rounded-3xl hover-lift group cursor-pointer"
          >
            <div className="mb-8">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mb-6">
                <Megaphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-montserrat font-bold">Digital Advertising</h3>
            </div>
            <p className="text-white text-opacity-90 text-lg leading-relaxed mb-8">
              Targeted campaigns across all major platforms with optimized ROI.
            </p>
            <div className="flex space-x-4">
              <div className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Google Ads</div>
              <div className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">Facebook</div>
            </div>
          </motion.div>
          
          {/* SEO & Content */}
          <motion.div 
            variants={itemVariants}
            className="bg-off-white border-2 border-gray-200 p-12 rounded-3xl hover-lift group cursor-pointer col-span-2"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-highlight-purple rounded-2xl flex items-center justify-center mr-6">
                    <Search className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-montserrat font-bold text-deep-black">SEO & Content Marketing</h3>
                </div>
                <p className="text-charcoal text-lg leading-relaxed mb-8 max-w-2xl">
                  Comprehensive content strategies that improve search visibility and engage your target audience with compelling, valuable content.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center text-charcoal">
                    <Check className="w-5 h-5 text-vibrant-orange mr-3" />
                    Technical SEO
                  </div>
                  <div className="flex items-center text-charcoal">
                    <Check className="w-5 h-5 text-vibrant-orange mr-3" />
                    Content Strategy
                  </div>
                  <div className="flex items-center text-charcoal">
                    <Check className="w-5 h-5 text-vibrant-orange mr-3" />
                    Link Building
                  </div>
                  <div className="flex items-center text-charcoal">
                    <Check className="w-5 h-5 text-vibrant-orange mr-3" />
                    Analytics
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Social Media */}
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-br from-highlight-purple to-accent-teal text-white p-12 rounded-3xl hover-lift group cursor-pointer"
          >
            <div className="mb-8">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mb-6">
                <Share2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-montserrat font-bold">Social Media</h3>
            </div>
            <p className="text-white text-opacity-90 text-lg leading-relaxed">
              Build communities and drive engagement across all social platforms.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
