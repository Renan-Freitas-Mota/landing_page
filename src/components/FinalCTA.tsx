import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CountdownTimer } from "./CountdownTimer";
import { CheckCircle, Shield } from "lucide-react";
import { motion } from "framer-motion";

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
                    className="glass rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-16 text-center border-2 border-accent/30 shadow-gold">
                    <Badge className="mb-4 md:mb-6 px-3 sm:px-4 md:px-6 py-1.5 md:py-2 gradient-gold text-accent-foreground font-bold text-xs md:text-sm">
                        OFERTA POR TEMPO LIMITADO
                    </Badge>

                    <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 leading-tight px-2">
                        Comece a Investir Como os <span className="text-gradient-gold">Grandes Fundos</span> Hoje
                        Mesmo
                    </h2>

                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto px-2">
                        Acesso vitalício à carteira secreta dos tubarões por apenas:
                    </p>

                    <div className="mb-6 md:mb-8">
                        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-2">
                            <span className="text-lg sm:text-xl md:text-2xl text-muted-foreground line-through">R$ 497,00</span>
                            <Badge className="bg-destructive text-destructive-foreground font-bold px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm">
                                -94%
                            </Badge>
                        </div>
                        <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gradient-gold mb-2">R$ 29,90</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">Pagamento único • Acesso para sempre</p>
                    </div>

                    <div className="flex justify-center mb-6 md:mb-8">
                        <CountdownTimer />
                    </div>

                    <Button
                        size="lg"
                        onClick={() =>
                            window.open(
                                "https://pay.hotmart.com/A102246370V?off=ybzjvlf2&checkoutMode=10&bid=1759619193797",
                                "_blank"
                            )
                        }
                        className="w-full sm:w-auto gradient-gold text-accent-foreground font-bold text-base sm:text-lg md:text-xl px-6 sm:px-10 md:px-16 py-4 sm:py-6 md:py-8 shadow-gold hover:scale-105 transition-transform mb-6 md:mb-8">
                        Liberar Acesso Vitalício
                    </Button>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-6 md:mb-8">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                            <span className="text-xs sm:text-sm">Acesso Imediato</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                            <span className="text-xs sm:text-sm">Suporte Exclusivo</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                            <span className="text-xs sm:text-sm">Atualizações Grátis</span>
                        </div>
                    </div>

                    <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-secondary/20 border border-secondary">
                        <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-secondary flex-shrink-0" />
                        <div className="text-left">
                            <p className="font-bold text-xs sm:text-sm">Garantia de 7 Dias</p>
                            <p className="text-[10px] sm:text-xs text-muted-foreground">100% do seu dinheiro de volta</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
