import React from 'react';
import { motion } from 'framer-motion';

const reasons = [
  "Tribunal Practice Expertise",
  "Time-Bound Execution",
  "Ethical Standards",
  "End-to-End Coordination",
  "Commercial Acumen",
  "Strategic Litigation"
];

const WhyUs: React.FC = () => {
  return (
    <section className="py-16 bg-antique-gold border-y border-white/10 overflow-hidden flex items-center">
      <div className="relative w-full flex overflow-x-hidden">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 20 
          }}
        >
          {/* Double the list to create seamless loop */}
          {[...reasons, ...reasons, ...reasons, ...reasons].map((reason, index) => (
            <div key={index} className="flex items-center mx-8">
              <span className="text-regal-black font-serif text-2xl md:text-4xl font-semibold opacity-90">
                {reason}
              </span>
              <span className="ml-16 w-3 h-3 bg-regal-black rotate-45 opacity-50"></span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;