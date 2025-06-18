'use client'

import { motion } from "framer-motion";

export default function StatsSection() {
  const stats = [
    { value: "150+", label: "Successful Campaigns", color: "text-vibrant-orange" },
    { value: "$50M+", label: "Revenue Generated", color: "text-accent-teal" },
    { value: "98%", label: "Client Retention", color: "text-highlight-purple" },
    { value: "24h", label: "Response Time", color: "text-vibrant-orange" },
  ];

  return (
    <section id="about" className="py-24 bg-off-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`text-5xl lg:text-6xl font-montserrat font-black ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {stat.value}
              </div>
              <div className="text-charcoal font-medium text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
