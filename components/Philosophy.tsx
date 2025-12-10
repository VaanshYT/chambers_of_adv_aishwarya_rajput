import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import chamberImage from './chamber_2.jpeg';

const Philosophy: React.FC = () => {
  return (
    <section className="relative w-full py-20 md:py-32 bg-regal-black overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

          {/* Image Side */}
          <div className="w-full lg:w-1/2 h-[500px] relative group">
            <ScrollReveal className="w-full h-full">
              <div className="absolute inset-0 border border-antique-gold/30 translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <div className="relative h-full w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <img
                  src={chamberImage}
                  alt="Modern Architectural Office"
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            </ScrollReveal>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2 space-y-8">
            <ScrollReveal delay={0.2}>
              <h2 className="text-sm font-bold tracking-[0.2em] text-antique-gold uppercase mb-4">
                The Philosophy
              </h2>
              <h3 className="font-serif text-3xl md:text-5xl text-cream leading-tight mb-6">
                Integrated ecosystem where law & finance operate seamlessly.
              </h3>
              <div className="h-[2px] w-16 bg-antique-gold mb-8"></div>
              <p className="text-off-white/70 font-light text-lg leading-relaxed">
                We specialize in Insolvency, Litigation, and Corporate Legal Advisory. Our vision is not just to provide legal counsel, but to architect pathways for client growth by merging financial acumen with rigorous legal strategy.
              </p>
              <p className="text-off-white/70 font-light text-lg leading-relaxed mt-4">
                By understanding the numbers behind the law, we offer a distinct advantage in complex commercial disputes and restructuring matters.
              </p>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Philosophy;