import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Fish } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCTA = () => {
    const ctaSection = document.getElementById('final-cta');
    ctaSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Fish className="w-8 h-8 text-primary" />
          <span className="text-xl font-bold">Carteira dos Tubarões</span>
        </div>
        
        <Button 
          onClick={scrollToCTA}
          size="lg"
          className="gradient-gold text-accent-foreground font-bold shadow-gold hover:scale-105 transition-transform"
        >
          Adquirir Para Sempre
        </Button>
      </div>
    </nav>
  );
}
