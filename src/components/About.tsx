import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function About() {
  return (
    <section className="py-24 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Quem é <span className="text-gradient-gold">Renan</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full glass overflow-hidden border-4 border-primary/30">
                <div className="w-full h-full gradient-primary flex items-center justify-center text-8xl font-bold">
                  R
                </div>
              </div>
              <Badge className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 gradient-gold text-accent-foreground font-bold text-sm shadow-gold">
                Especialista em Criptomoedas
              </Badge>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Com mais de 7 anos de experiência no mercado de criptomoedas, Renan já ajudou milhares de pessoas a 
              transformarem pequenos investimentos em resultados extraordinários.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Especialista em análise de mercado e estratégias de investimento, ele descobriu o segredo por trás 
              das carteiras dos maiores fundos globais e decidiu compartilhar esse conhecimento exclusivo.
            </p>

            <div className="space-y-3 pt-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <p className="text-base">Mais de 10.000 alunos satisfeitos</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <p className="text-base">Resultados comprovados em mais de 85 países</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <p className="text-base">Palestrante internacional sobre criptomoedas</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <p className="text-base">Certificado pela Blockchain Council</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
