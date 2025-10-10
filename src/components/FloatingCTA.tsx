import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCTA = () => {
    const ctaSection = document.getElementById('final-cta');
    ctaSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 z-40 flex flex-col gap-2"
        >
          <Button
            onClick={scrollToCTA}
            size="lg"
            className="gradient-gold text-accent-foreground font-bold shadow-gold hover:scale-105 transition-transform"
          >
            <ArrowUp className="w-5 h-5 mr-2" />
            Quero Acesso
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
