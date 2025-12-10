import React from 'react';
import { ScrollReveal } from './ScrollReveal';

const Collaboration: React.FC = () => {
  return (
    <section className="py-32 bg-[#0a0c0e] relative overflow-hidden">
      {/* Decorative Texture */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-antique-gold/5 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto border border-antique-gold/20 p-8 md:p-12 bg-gradient-to-br from-charcoal/50 to-transparent backdrop-blur-sm">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-8">
               <div className="space-y-2">
                 <h4 className="text-antique-gold tracking-widest text-xs uppercase font-bold">Premium Service</h4>
                 <h2 className="font-serif text-3xl md:text-5xl text-cream">Strategic Advisory for CAs</h2>
               </div>
               <div className="hidden md:block w-16 h-[1px] bg-antique-gold"></div>
            </div>
            
            <p className="text-xl text-off-white/80 font-light leading-relaxed mb-10">
              We collaborate with Chartered Accountants to translate financial discrepancies into defensible legal positions. 
              Our symbiotic relationship enhances client value through comprehensive risk management.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                "Legal Review of Audit Notes",
                "ROC Filings & Compliance",
                "Due Diligence Reports"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3 p-4 bg-white/5 border border-white/5 rounded-sm hover:border-antique-gold/30 transition-colors">
                  <div className="w-2 h-2 bg-antique-gold rotate-45"></div>
                  <span className="text-sm font-medium text-off-white">{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;