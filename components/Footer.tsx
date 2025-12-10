import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-regal-black pt-24 pb-12 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          
          <div className="space-y-6">
            <h2 className="font-serif text-4xl text-cream">Chambers of <br/><span className="text-antique-gold">Adv Aishwarya Rajput</span></h2>
            <p className="text-off-white/50 max-w-sm font-light">
              Delivering high-stakes legal solutions with a finance-first approach. Trusted by institutions and corporations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xs font-bold tracking-widest uppercase text-antique-gold">Visit Us</h4>
              <p className="text-off-white/80 font-light leading-relaxed">
                Office No. 13, Apollo House,<br/>
                Near Bombay Samachar Marg,<br/>
                Kala Ghoda, Mumbai.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xs font-bold tracking-widest uppercase text-antique-gold">Contact</h4>
              <ul className="space-y-2 text-off-white/80 font-light">
                <li>
                  <a href="mailto:aishwaryar003@gmail.com" className="hover:text-antique-gold transition-colors">
                    aishwaryar003@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+918433866984" className="hover:text-antique-gold transition-colors">
                    +91 8433866984
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/30">
          <p>© {new Date().getFullYear()} Chambers of Adv Aishwarya Rajput. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;