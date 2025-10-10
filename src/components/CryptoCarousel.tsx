import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { TrendingUp, Bitcoin, Coins } from 'lucide-react';
import { motion } from 'framer-motion';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const cryptos = [
  { 
    name: 'Bitcoin', 
    symbol: 'BTC', 
    gain: '+385%', 
    icon: Bitcoin,
    data: [30, 45, 60, 75, 95, 110, 145] 
  },
  { 
    name: 'Ethereum', 
    symbol: 'ETH', 
    gain: '+420%', 
    icon: Coins,
    data: [25, 40, 50, 70, 90, 115, 130] 
  },
  { 
    name: 'Solana', 
    symbol: 'SOL', 
    gain: '+650%', 
    icon: TrendingUp,
    data: [15, 25, 45, 65, 85, 105, 130] 
  },
  { 
    name: 'Cardano', 
    symbol: 'ADA', 
    gain: '+290%', 
    icon: Coins,
    data: [20, 30, 40, 55, 65, 75, 90] 
  },
  { 
    name: 'Polkadot', 
    symbol: 'DOT', 
    gain: '+340%', 
    icon: TrendingUp,
    data: [18, 32, 48, 60, 78, 92, 110] 
  },
];

export function CryptoCarousel() {
  return (
    <section className="py-24 px-4 bg-card/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 px-4 py-2 bg-secondary/20 border-secondary text-secondary-foreground">
            Valorização Comprovada
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            As Criptomoedas que <span className="text-gradient-gold">Multiplicaram Patrimônios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja a performance real das principais criptos dos grandes fundos
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              {cryptos.map((crypto, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="p-6 glass border-border/50 hover:border-primary/50 transition-all hover:shadow-glow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                          <crypto.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{crypto.name}</h3>
                          <p className="text-sm text-muted-foreground">{crypto.symbol}</p>
                        </div>
                      </div>
                      <Badge className="bg-secondary/20 border-secondary text-secondary font-bold">
                        {crypto.gain}
                      </Badge>
                    </div>

                    <div className="h-24 mb-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={crypto.data.map(value => ({ value }))}>
                          <Line 
                            type="monotone" 
                            dataKey="value" 
                            stroke="hsl(var(--secondary))" 
                            strokeWidth={2}
                            dot={false}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>

                    <p className="text-sm text-muted-foreground text-center">
                      Performance últimos 12 meses
                    </p>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="glass hover:shadow-glow" />
            <CarouselNext className="glass hover:shadow-glow" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
