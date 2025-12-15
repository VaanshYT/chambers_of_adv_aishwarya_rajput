import React from 'react';
import { motion, Variants } from 'framer-motion';

// Use a direct relative path string. 
// This relies on the server serving the 'components' directory relative to the index.html.
import heroBg from './abb.jpeg';

const Hero: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center text-center px-4">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-regal-black/60 via-regal-black/20 to-regal-black"></div>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={childVariants} className="flex flex-col items-center">
          <div className="h-[1px] w-24 bg-antique-gold mb-6"></div>
          <p className="text-antique-gold tracking-[0.2em] text-sm uppercase font-semibold">Legal Excellence & Financial Insight</p>
        </motion.div>

        <motion.h1 variants={childVariants} className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream leading-tight">
          Chambers of <br />
          <span className="italic text-antique-gold">Adv Aishwarya Rajput</span>
        </motion.h1>

        <motion.p variants={childVariants} className="text-lg md:text-xl text-off-white/80 font-light max-w-2xl mx-auto mt-6">
          Bridging the gap between <span className="text-white font-medium">Financial</span> and <span className="text-white font-medium">Legal</span> domains.
        </motion.p>

        <motion.div variants={childVariants} className="pt-8">
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-serif font-medium tracking-tighter text-white border border-antique-gold transition-all duration-300 hover:text-regal-black hover:border-antique-gold"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-antique-gold rounded-full group-hover:w-80 group-hover:h-56"></span>
            <span className="relative">Book Consultation</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-antique-gold to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;