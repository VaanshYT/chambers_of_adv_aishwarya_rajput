import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import PracticeAreas from './components/PracticeAreas';
import Collaboration from './components/Collaboration';
import WhyUs from './components/WhyUs';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-regal-black text-off-white font-sans selection:bg-antique-gold selection:text-regal-black">

      {/* Sticky Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-regal-black/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'
          }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="font-serif font-bold text-lg md:text-xl text-cream tracking-wide">
            A<span className="text-antique-gold">.</span>R<span className="text-antique-gold">.</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-off-white/80">
            <a href="#" className="hover:text-antique-gold transition-colors">Home</a>
            <a href="#about" className="hover:text-antique-gold transition-colors">Philosophy</a>
            <a href="#practices" className="hover:text-antique-gold transition-colors">Practice Areas</a>
            <a href="#contact" className="px-4 py-2 border border-antique-gold/50 text-antique-gold hover:bg-antique-gold hover:text-black transition-all">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <div id="about">
          <Philosophy />
        </div>
        <div id="practices">
          <PracticeAreas />
        </div>
        <Collaboration />
        <WhyUs />
        <div id="contact">
          <ContactForm />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;