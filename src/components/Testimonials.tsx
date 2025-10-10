import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Star, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Carlos Silva',
    gain: '+285%',
    quote: 'Nunca imaginei que seria tão simples. Segui exatamente as moedas indicadas e os resultados foram incríveis!',
    location: 'São Paulo, SP'
  },
  {
    name: 'Marina Costa',
    gain: '+320%',
    quote: 'O acesso ao grupo VIP fez toda a diferença. As análises são precisas e o suporte é excepcional.',
    location: 'Rio de Janeiro, RJ'
  },
  {
    name: 'Roberto Almeida',
    gain: '+410%',
    quote: 'Melhor investimento que fiz! R$29,90 se transformaram em resultados que mudaram minha vida financeira.',
    location: 'Belo Horizonte, MG'
  },
  {
    name: 'Ana Paula',
    gain: '+195%',
    quote: 'Comecei com pouco e os ganhos superaram todas as minhas expectativas. Recomendo demais!',
    location: 'Curitiba, PR'
  },
  {
    name: 'Felipe Santos',
    gain: '+380%',
    quote: 'As videoaulas são muito didáticas. Mesmo sendo iniciante, consegui aplicar as estratégias facilmente.',
    location: 'Porto Alegre, RS'
  },
];

export function Testimonials() {
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
            Depoimentos Reais
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Resultados de quem já está <span className="text-gradient-gold">Lucrando</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja o que nossos alunos estão dizendo sobre seus resultados
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
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="p-6 glass border-border/50 hover:border-secondary/50 transition-all hover:shadow-glow h-full flex flex-col">
                    {/* Video placeholder */}
                    <div className="relative aspect-video rounded-lg overflow-hidden mb-4 gradient-primary group cursor-pointer">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="w-7 h-7 text-foreground fill-current" />
                        </div>
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>

                    {/* Gain badge */}
                    <Badge className="mb-4 w-fit bg-secondary/20 border-secondary text-secondary font-bold">
                      {testimonial.gain} de lucro
                    </Badge>

                    {/* Quote */}
                    <blockquote className="text-sm mb-4 flex-grow italic">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Author */}
                    <div className="border-t border-border pt-4">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                    </div>
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
