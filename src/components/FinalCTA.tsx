import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CountdownTimer } from './CountdownTimer';
import { CheckCircle, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export function FinalCTA() {
  return (
    <section id="final-cta" className="py-24 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 md:p-16 text-center border-2 border-accent/30 shadow-gold"
        >
          <Badge className="mb-6 px-6 py-2 gradient-gold text-accent-foreground font-bold text-sm">
            OFERTA POR TEMPO LIMITADO
          </Badge>

          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Comece a Investir Como os <span className="text-gradient-gold">Grandes Fundos</span> Hoje Mesmo
          </h2>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Acesso vitalício à carteira secreta dos tubarões por apenas:
          </p>

          <div className="mb-8">
            <div className="flex items-center justify-center gap-4 mb-2">
              <span className="text-2xl text-muted-foreground line-through">R$ 497,00</span>
              <Badge className="bg-destructive text-destructive-foreground font-bold px-3 py-1">
                -94%
              </Badge>
            </div>
            <p className="text-6xl md:text-7xl font-black text-gradient-gold mb-2">
              R$ 29,90
            </p>
            <p className="text-sm text-muted-foreground">Pagamento único • Acesso para sempre</p>
          </div>

          <div className="flex justify-center mb-8">
            <CountdownTimer />
          </div>

          <Button 
            size="lg"
            onClick={() => window.open("https://pay.hotmart.com/A102246370V?off=ybzjvlf2&checkoutMode=10&bid=1759619193797", "_blank")}
            className="gradient-gold text-accent-foreground font-bold text-xl px-16 py-8 shadow-gold hover:scale-105 transition-transform mb-8"
          >
            GARANTIR MINHA VAGA AGORA
          </Button>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-secondary" />
              <span className="text-sm">Acesso Imediato</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-secondary" />
              <span className="text-sm">Suporte Exclusivo</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-secondary" />
              <span className="text-sm">Atualizações Grátis</span>
            </div>
          </div>

          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-secondary/20 border border-secondary">
            <Shield className="w-6 h-6 text-secondary" />
            <div className="text-left">
              <p className="font-bold text-sm">Garantia de 7 Dias</p>
              <p className="text-xs text-muted-foreground">100% do seu dinheiro de volta</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
