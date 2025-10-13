import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
    return (
        <section className="container relative overflow-hidden bg-card/30">
            <div className="grid lg:grid-cols-2 h-[750px]">
                {/* Left side - Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center px-6 md:px-12 lg:px-16 xl:px-24 py-16 lg:py-24">
                    <div className="max-w-xl space-y-8">
                        <div>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 leading-snug">
                                Quem está por trás da{" "}
                                <span className="text-gradient-gold">CARTEIRA DOS TUBARÕES?</span>
                            </h2>
                            <div className="w-16 h-1 bg-gradient-to-r from-secondary to-secondary/50 mb-6"></div>
                        </div>

                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 leading-snug">
                            Renan Freitas, fundador da R7 Investimentos.
                        </h3>

                        <div className="space-y-4">
                            <p className="text-base md:text-lg font-semibold text-foreground leading-relaxed">
                                Queimei dinheiro por anos com erros de investidor comum: dicas de YouTube, FOMO,
                                pânico nas quedas.
                            </p>

                            <p className="text-base md:text-lg font-semibold text-foreground leading-relaxed">
                                Até entender o óbvio:{" "}
                                <span className="text-gradient-gold">
                                    copiar quem movimenta bilhões é mais inteligente que tentar adivinhar o
                                    mercado.
                                </span>
                            </p>

                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                Passei a rastrear os grandes fundos globais. Sem análises complexas, sem ruído.
                                Apenas seguindo o dinheiro inteligente.
                            </p>

                            <p className="text-base md:text-lg font-bold text-foreground leading-relaxed">
                                A Carteira dos Tubarões faz isso por você — as mesmas criptos dos gigantes de Wall
                                Street, direto no seu whatsapp.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Right side - Full size image */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative min-h-[300px] lg:min-h-[300px] bg-card/50">
                    <img
                        src="/5.webp"
                        alt="Renan - Especialista em Criptomoedas"
                        className="absolute inset-0 w-full h-full object-contain"
                    />
                    <Badge className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:left-8 lg:translate-x-0 px-6 py-2 gradient-gold text-accent-foreground font-bold text-sm shadow-gold">
                        Especialista em Criptomoedas
                    </Badge>
                </motion.div>
            </div>
        </section>
    );
}
