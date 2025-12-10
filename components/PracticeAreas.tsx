import React from 'react';
import { motion } from 'framer-motion';
import { PracticeArea } from '../types';
import { ScrollReveal } from './ScrollReveal';

const practices: PracticeArea[] = [
  {
    id: 'ibc',
    title: 'IBC & Insolvency',
    description: 'Expertise in Insolvency and Bankruptcy Code.',
    details: ['Focus on Sections 7, 9, 10', 'Drafting petitions', 'NCLT representation']
  },
  {
    id: 'corp',
    title: 'Corporate Law',
    description: 'Navigating complex corporate governance.',
    details: ['Oppression & Mismanagement (Sec 241-242)', 'Corporate Restructuring', 'Mergers & Acquisitions']
  },
  {
    id: 'drt',
    title: 'Debt Recovery (DRT)',
    description: 'Protecting financial interests.',
    details: ['Representing Financial Institutions', 'NBFC Representation', 'Recovery Suits & Enforcement']
  },
  {
    id: 'contracts',
    title: 'Commercial Contracts',
    description: 'Mitigating risk through precision.',
    details: ['Drafting Agreements', 'Service MOUs', 'Risk Mitigation Strategy']
  }
];

const PracticeCard: React.FC<{ area: PracticeArea; index: number }> = ({ area, index }) => {
  return (
    <motion.div 
      className="group relative bg-charcoal p-8 border border-white/5 hover:border-antique-gold/50 transition-colors duration-300 h-full flex flex-col justify-between"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-antique-gold/0 to-transparent group-hover:via-antique-gold/100 transition-all duration-700"></div>
      
      <div>
        <h3 className="font-serif text-2xl text-cream mb-2 group-hover:text-antique-gold transition-colors">{area.title}</h3>
        <p className="text-sm text-off-white/50 mb-6 font-light">{area.description}</p>
        
        <ul className="space-y-3">
          {area.details.map((detail, i) => (
            <li key={i} className="flex items-start text-sm text-off-white/80">
              <span className="mr-2 text-antique-gold mt-1">✦</span>
              {detail}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
        <span className="text-xs uppercase tracking-widest text-white/30 group-hover:text-antique-gold transition-colors">Learn More</span>
        <span className="text-antique-gold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span>
      </div>
    </motion.div>
  );
};

const PracticeAreas: React.FC = () => {
  return (
    <section className="py-24 bg-regal-black relative">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal className="mb-16 text-center">
            <h2 className="font-serif text-4xl md:text-5xl text-cream mb-4">Practice Areas</h2>
            <div className="h-[1px] w-24 bg-antique-gold mx-auto"></div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {practices.map((area, index) => (
            <PracticeCard key={area.id} area={area} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;