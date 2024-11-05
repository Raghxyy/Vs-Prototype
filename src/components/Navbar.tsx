import React, { useCallback } from 'react';
import { Heart } from 'lucide-react';

const Navbar = () => {
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <nav className="fixed w-full bg-white/10 backdrop-blur-md z-50 border-b border-[#6d8cff]/20">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <Heart className="w-8 h-8 text-red-500" />
            <span className="text-2xl font-bold text-white">Vitalstats</span>
          </div>
          
          <div className="hidden md:flex items-center gap-12">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-white/80 text-lg">Home</button>
            <button onClick={() => scrollToSection('features')} className="text-white hover:text-white/80 text-lg">Features</button>
            <button onClick={() => scrollToSection('team')} className="text-white hover:text-white/80 text-lg">Team</button>
            <button onClick={() => scrollToSection('careers')} className="text-white hover:text-white/80 text-lg">Careers</button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-white/80 text-lg">Contact</button>
          </div>

          <button className="bg-white text-[#4b6efd] px-6 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all border border-[#6d8cff]">
            Request Demo
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;