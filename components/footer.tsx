import { Linkedin, Twitter, Instagram, Dribbble } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-deep-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-montserrat font-bold mb-6">
              <span className="text-gradient">Nexus</span> Digital
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
              We create digital experiences that drive results. Your success is our passion, and innovation is our craft.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="w-12 h-12 bg-white bg-opacity-10 rounded-xl flex items-center justify-center hover:bg-vibrant-orange transition-colors duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-white bg-opacity-10 rounded-xl flex items-center justify-center hover:bg-vibrant-orange transition-colors duration-300">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-white bg-opacity-10 rounded-xl flex items-center justify-center hover:bg-vibrant-orange transition-colors duration-300">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-white bg-opacity-10 rounded-xl flex items-center justify-center hover:bg-vibrant-orange transition-colors duration-300">
                <Dribbble className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-xl font-montserrat font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-vibrant-orange transition-colors duration-300">Digital Strategy</a></li>
              <li><a href="#" className="hover:text-vibrant-orange transition-colors duration-300">Creative Design</a></li>
              <li><a href="#" className="hover:text-vibrant-orange transition-colors duration-300">SEO & Content</a></li>
              <li><a href="#" className="hover:text-vibrant-orange transition-colors duration-300">Social Media</a></li>
              <li><a href="#" className="hover:text-vibrant-orange transition-colors duration-300">Paid Advertising</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-xl font-montserrat font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li>+1 (555) 123-4567</li>
              <li>hello@nexusdigital.com</li>
              <li>123 Innovation Drive<br />San Francisco, CA 94105</li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white border-opacity-10 pt-8 flex flex-col lg:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 lg:mb-0">
            © 2024 Nexus Digital. All rights reserved.
          </div>
          <div className="flex space-x-8 text-gray-400">
            <a href="#" className="hover:text-vibrant-orange transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-vibrant-orange transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-vibrant-orange transition-colors duration-300">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
