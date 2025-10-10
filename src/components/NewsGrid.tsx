import { Card } from '@/components/ui/card';
import { Newspaper } from 'lucide-react';
import { motion } from 'framer-motion';

const news = [
  {
    outlet: 'Bloomberg',
    headline: 'Grandes Fundos Aumentam Alocação em Criptomoedas',
    description: 'Fundos institucionais globais estão diversificando portfólios com ativos digitais'
  },
  {
    outlet: 'Forbes',
    headline: 'Bitcoin Atinge Nova Máxima Histórica',
    description: 'Analistas apontam entrada massiva de capital institucional como principal fator'
  },
  {
    outlet: 'Financial Times',
    headline: 'Criptomoedas no Portfólio de Bilionários',
    description: 'Investidores de alto patrimônio aumentam exposição em ativos digitais'
  },
  {
    outlet: 'Wall Street Journal',
    headline: 'Fundos de Hedge Apostam em Cripto',
    description: 'Estratégias diversificadas incluem principais criptomoedas do mercado'
  },
  {
    outlet: 'Reuters',
    headline: 'Instituições Adotam Bitcoin e Ethereum',
    description: 'Grandes bancos e fundos anunciam investimentos em criptoativos'
  },
  {
    outlet: 'CNBC',
    headline: 'Valorização Histórica de Altcoins',
    description: 'Criptomoedas alternativas apresentam performance superior a 300%'
  },
];

export function NewsGrid() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Grandes Fundos já Estão <span className="text-gradient-gold">Investindo Nessas Moedas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja o que a mídia especializada está dizendo sobre o mercado
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="p-6 glass border-border/50 hover:border-primary/50 transition-all hover:shadow-glow hover:-translate-y-1 h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                    <Newspaper className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary mb-1">{item.outlet}</p>
                    <h3 className="font-bold text-lg leading-tight">{item.headline}</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
