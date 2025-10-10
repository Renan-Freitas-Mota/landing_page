import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CountdownTimer } from './CountdownTimer';
import { TrendingUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { motion } from 'framer-motion';

const chartData = [
  { month: 'Jan', value: 100 },
  { month: 'Fev', value: 120 },
  { month: 'Mar', value: 180 },
  { month: 'Abr', value: 220 },
  { month: 'Mai', value: 310 },
  { month: 'Jun', value: 380 },
  { month: 'Jul', value: 420 },
  { month: 'Ago', value: 500 },
];

export function Hero() {
  const scrollToCTA = () => {
    const ctaSection = document.getElementById('final-cta');
    ctaSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <Badge className="mb-6 px-6 py-2 bg-secondary/20 border-secondary text-secondary-foreground text-sm font-semibold">
            <TrendingUp className="w-4 h-4 mr-2 inline" />
            +400% de valorização
          </Badge>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="block">COPIE E COLE</span>
            <span className="block text-gradient-gold">as 10 Criptomoedas</span>
            <span className="block">dos Grandes Fundos Globais</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Acesso vitalício por apenas <span className="text-accent font-bold">R$29,90</span> às mesmas criptos que valorizaram <span className="text-secondary font-bold">+400%</span> nos últimos 12 meses
          </p>

          {/* Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-12 max-w-3xl mx-auto"
          >
            <div className="glass rounded-2xl p-8">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                  <XAxis 
                    dataKey="month" 
                    stroke="hsl(var(--muted-foreground))"
                    style={{ fontSize: '14px' }}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    style={{ fontSize: '14px' }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="hsl(var(--secondary))" 
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--secondary))', strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* CTA and Timer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col items-center gap-6"
          >
            <CountdownTimer />
            
            <Button 
              onClick={scrollToCTA}
              size="lg"
              className="gradient-gold text-accent-foreground font-bold text-lg px-12 py-7 shadow-gold hover:scale-105 transition-transform"
            >
              QUERO ACESSO AGORA
            </Button>

            <p className="text-sm text-muted-foreground">
              ✓ Acesso Imediato  •  ✓ Garantia de 7 Dias  •  ✓ Suporte Exclusivo
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
