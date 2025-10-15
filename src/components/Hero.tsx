import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect, lazy, Suspense } from "react";
import { InView } from "react-intersection-observer";
const LazyHeroChart = lazy(() => import("./HeroChart").then((m) => ({ default: m.HeroChart })));

const chartData = [
    // Mês 1
    { month: "1.0", selic: 1, ibov: 0.4, sharks: 1 },
    { month: "1.1", selic: 1.1, ibov: 0.5, sharks: 2 },
    { month: "1.2", selic: 1.2, ibov: 0.3, sharks: 4 },
    { month: "1.3", selic: 1.3, ibov: 0.7, sharks: 6 },
    { month: "1.4", selic: 1.4, ibov: 0.6, sharks: 8 },
    { month: "1.5", selic: 1.5, ibov: 0.8, sharks: 11 },
    { month: "1.6", selic: 1.7, ibov: 0.9, sharks: 14 },
    { month: "1.7", selic: 1.6, ibov: 1.0, sharks: 17 },
    { month: "1.8", selic: 1.7, ibov: 0.6, sharks: 21 },
    { month: "1.9", selic: 1.8, ibov: 0.4, sharks: 25 },

    // Mês 2
    { month: "2.0", selic: 1.9, ibov: -0.3, sharks: 30 },
    { month: "2.1", selic: 2, ibov: -0.8, sharks: 26 },
    { month: "2.2", selic: 2.4, ibov: -1.2, sharks: 32 },
    { month: "2.3", selic: 2.35, ibov: -1.5, sharks: 47 },
    { month: "2.4", selic: 2.3, ibov: -1.0, sharks: 41 },
    { month: "2.5", selic: 2.25, ibov: -0.7, sharks: 49 },
    { month: "2.6", selic: 2.2, ibov: -0.4, sharks: 70 },
    { month: "2.7", selic: 2.1, ibov: -0.2, sharks: 55 },
    { month: "2.8", selic: 2.1, ibov: 0.0, sharks: 78 },
    { month: "2.9", selic: 2.5, ibov: 0.3, sharks: 100 },

    // Mês 3
    { month: "3.0", selic: 3.0, ibov: 0.5, sharks: 115 },
    { month: "3.1", selic: 3.9, ibov: 1.0, sharks: 103 },
    { month: "3.2", selic: 3.8, ibov: 1.3, sharks: 118 },
    { month: "3.3", selic: 3.7, ibov: 1.1, sharks: 125 },
    { month: "3.4", selic: 3.6, ibov: 0.9, sharks: 135 },
    { month: "3.5", selic: 3.5, ibov: 1.2, sharks: 118 },
    { month: "3.6", selic: 3.4, ibov: 1.5, sharks: 137 },
    { month: "3.7", selic: 3.3, ibov: 1.8, sharks: 142 },
    { month: "3.8", selic: 3.2, ibov: 2.0, sharks: 145 },
    { month: "3.9", selic: 3.1, ibov: 2.3, sharks: 140 },

    // Mês 4
    { month: "4.0", selic: 4.0, ibov: 2.6, sharks: 145 },
    { month: "4.1", selic: 4.9, ibov: 3.0, sharks: 148 },
    { month: "4.2", selic: 4.8, ibov: 3.4, sharks: 150 },
    { month: "4.3", selic: 4.7, ibov: 3.7, sharks: 155 },
    { month: "4.4", selic: 4.6, ibov: 3.5, sharks: 135 },
    { month: "4.5", selic: 4.5, ibov: 3.1, sharks: 130 },
    { month: "4.6", selic: 4.4, ibov: 2.9, sharks: 125 },
    { month: "4.7", selic: 4.3, ibov: 3.2, sharks: 115 },
    { month: "4.8", selic: 4.2, ibov: 3.5, sharks: 120 },
    { month: "4.9", selic: 4.1, ibov: 3.8, sharks: 125 },

    // Mês 5
    { month: "5.0", selic: 5.0, ibov: 4.0, sharks: 110 },
    { month: "5.1", selic: 5.9, ibov: 4.2, sharks: 105 },
    { month: "5.2", selic: 5.8, ibov: 4.0, sharks: 100 },
    { month: "5.3", selic: 5.7, ibov: 3.7, sharks: 90 },
    { month: "5.4", selic: 5.6, ibov: 3.5, sharks: 95 },
    { month: "5.5", selic: 5.5, ibov: 3.8, sharks: 100 },
    { month: "5.6", selic: 5.4, ibov: 4.1, sharks: 105 },
    { month: "5.7", selic: 5.3, ibov: 4.3, sharks: 109 },
    { month: "5.8", selic: 5.2, ibov: 4.5, sharks: 115 },
    { month: "5.9", selic: 5.1, ibov: 4.7, sharks: 110 },

    // Mês 6
    { month: "6.0", selic: 6.0, ibov: 4.8, sharks: 113 },
    { month: "6.1", selic: 6.9, ibov: 4.6, sharks: 115 },
    { month: "6.2", selic: 6.8, ibov: 4.3, sharks: 110 },
    { month: "6.3", selic: 6.7, ibov: 4.5, sharks: 115 },
    { month: "6.4", selic: 6.6, ibov: 4.7, sharks: 115 },
    { month: "6.5", selic: 6.5, ibov: 5.0, sharks: 130 },
    { month: "6.6", selic: 6.4, ibov: 5.3, sharks: 125 },
    { month: "6.7", selic: 6.3, ibov: 5.6, sharks: 135 },
    { month: "6.8", selic: 6.2, ibov: 5.8, sharks: 145 },
    { month: "6.9", selic: 6.1, ibov: 6.0, sharks: 168 },

    // Mês 7
    { month: "7.0", selic: 7.0, ibov: 6.2, sharks: 175 },
    { month: "7.1", selic: 7.9, ibov: 6.4, sharks: 150 },
    { month: "7.2", selic: 7.8, ibov: 6.6, sharks: 155 },
    { month: "7.3", selic: 7.7, ibov: 6.8, sharks: 179 },
    { month: "7.4", selic: 7.6, ibov: 7.0, sharks: 185 },
    { month: "7.5", selic: 7.5, ibov: 7.2, sharks: 200 },
    { month: "7.6", selic: 7.4, ibov: 7.4, sharks: 195 },
    { month: "7.7", selic: 7.3, ibov: 7.6, sharks: 188 },
    { month: "7.8", selic: 7.2, ibov: 7.8, sharks: 200 },
    { month: "7.9", selic: 7.1, ibov: 8.0, sharks: 210 },

    // Mês 8
    { month: "8.0", selic: 8.0, ibov: 8.2, sharks: 220 },
    { month: "8.1", selic: 8.9, ibov: 8.4, sharks: 230 },
    { month: "8.2", selic: 8.8, ibov: 8.6, sharks: 223 },
    { month: "8.3", selic: 8.7, ibov: 8.8, sharks: 218 },
    { month: "8.4", selic: 8.6, ibov: 8.0, sharks: 225 },
    { month: "8.5", selic: 8.5, ibov: 8.2, sharks: 236 },
    { month: "8.6", selic: 8.4, ibov: 8.4, sharks: 242 },
    { month: "8.7", selic: 8.3, ibov: 8.6, sharks: 238 },
    { month: "8.8", selic: 8.2, ibov: 8.8, sharks: 235 },
    { month: "8.9", selic: 8.1, ibov: 8.0, sharks: 245 },

    // Mês 9
    { month: "9.0", selic: 9.0, ibov: 7.2, sharks: 268 },
    { month: "9.1", selic: 9.9, ibov: 7.4, sharks: 270 },
    { month: "9.2", selic: 9.8, ibov: 7.6, sharks: 265 },
    { month: "9.3", selic: 9.7, ibov: 7.8, sharks: 289 },
    { month: "9.4", selic: 9.6, ibov: 7.0, sharks: 298 },
    { month: "9.5", selic: 9.5, ibov: 7.2, sharks: 291 },
    { month: "9.6", selic: 9.4, ibov: 7.4, sharks: 285 },
    { month: "9.7", selic: 9.3, ibov: 7.6, sharks: 298 },
    { month: "9.8", selic: 9.2, ibov: 7.8, sharks: 315 },
    { month: "9.9", selic: 9.1, ibov: 7.0, sharks: 318 },

    // Mês 10
    { month: "10.0", selic: 9.0, ibov: 7.2, sharks: 338 },
    { month: "10.1", selic: 9.9, ibov: 7.4, sharks: 330 },
    { month: "10.2", selic: 9.8, ibov: 7.6, sharks: 300 },
    { month: "10.3", selic: 9.7, ibov: 7.8, sharks: 330 },
    { month: "10.4", selic: 9.6, ibov: 7.0, sharks: 340 },
    { month: "10.5", selic: 10.5, ibov: 7.2, sharks: 345 },
    { month: "10.6", selic: 10.4, ibov: 7.4, sharks: 338 },
    { month: "10.7", selic: 10.3, ibov: 7.6, sharks: 340 },
    { month: "10.8", selic: 10.2, ibov: 7.8, sharks: 338 },
    { month: "10.9", selic: 10.1, ibov: 7.0, sharks: 342 },

    // Mês 11
    { month: "11.0", selic: 11.0, ibov: 7.2, sharks: 345 },
    { month: "11.1", selic: 11.9, ibov: 7.4, sharks: 343 },
    { month: "11.2", selic: 11.8, ibov: 7.6, sharks: 260 },
    { month: "11.3", selic: 12.7, ibov: 7.8, sharks: 345 },
    { month: "11.4", selic: 13.6, ibov: 7.0, sharks: 390 },
    { month: "11.5", selic: 14.5, ibov: 7.2, sharks: 410 },
    { month: "11.6", selic: 15, ibov: 7.4, sharks: 400 },
    { month: "11.7", selic: 15, ibov: 7.6, sharks: 430 },
    { month: "11.8", selic: 15, ibov: 7.8, sharks: 435 },
    { month: "11.9", selic: 15, ibov: 7.0, sharks: 435 },

    // Mês 124
    { month: "12.0", selic: 15.0, ibov: 7, sharks: 437 },
];

export function Hero() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const handleCTAClick = () => {
        window.open(
            "https://pay.hotmart.com/A102246370V?off=ybzjvlf2&checkoutMode=10&bid=1759619193797",
            "_blank"
        );
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center py-24 overflow-x-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 right-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
            </div>

            <div className="w-full max-w-[95%] mx-auto relative z-10 ">
                {/* Badge centralizado no topo */}
                <div className="flex justify-center mb-8 mt-8 px-4">
                    <Badge className="px-4 sm:px-6 py-2 bg-secondary/20 border-secondary text-secondary-foreground text-xs sm:text-sm font-semibold whitespace-nowrap max-w-full">
                        + de 400% de valorização <TrendingUp className="ms-2 w-4 h-4 mr-2 inline flex-shrink-0" />
                    </Badge>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Headline and CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-end px-2 sm:px-4 lg:px-0 ">
                        {/* Badge de Exclusividade */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="inline-flex items-center justify-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-3 sm:px-4 py-2 mb-6 max-w-full">
                            <span className="relative flex h-2 w-2 flex-shrink-0">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                            </span>
                            <span className="text-accent text-xs sm:text-sm font-semibold whitespace-nowrap">
                                ACESSO LIMITADO • ÚLTIMAS VAGAS
                            </span>
                        </motion.div>
                        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-6 break-words">
                            <span className="block">
                                A <span className="text-gradient-gold">CARTEIRA SECRETA</span>
                            </span>
                            <span className="block">DOS GRANDES</span>
                            <span className="block">TUBARÕES</span>
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-foreground/90 mb-10 font-semibold break-words">
                            As 10 criptomoedas que{" "}
                            <span className="text-secondary font-black">fundos bilionários</span> estão acumulando
                            em silêncio
                        </p>
                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="flex flex-col items-center lg:items-end gap-6">
                            <Button
                                onClick={handleCTAClick}
                                size="lg"
                                className="gradient-gold text-accent-foreground font-bold text-base sm:text-lg px-6 sm:px-12 py-6 sm:py-7 shadow-gold hover:scale-105 transition-transform relative overflow-hidden group w-full sm:w-auto max-w-full">
                                <span className="relative z-10 whitespace-normal sm:whitespace-nowrap text-center">
                                    Liberar Acesso Vitalício
                                </span>
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                            </Button>

                            <p className="text-sm text-muted-foreground text-center lg:text-right">
                                <span className="text-green-500">✓</span> Vídeo Aulas Exclusivas{"  "}
                                <span className="text-green-500">✓</span> Acesso Imediato ao Grupo VIP{"  "}
                                <span className="text-green-500">✓</span> Movimentação Real de Baleias{" "}
                                <span className="text-green-500">✓</span> Monitoramento Diário{" "}
                                <span className="text-green-500">✓</span> Garantia de 7 Dias{"  "}
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Chart (lazy) */}
                    <InView triggerOnce rootMargin="400px">
                        {({ inView, ref }) => (
                            <div ref={ref} className="w-full">
                                {inView ? (
                                    <Suspense
                                        fallback={
                                            <div className="glass rounded-2xl min-h-[400px] w-full animate-pulse bg-muted/20" />
                                        }>
                                        <LazyHeroChart isMobile={isMobile} />
                                    </Suspense>
                                ) : (
                                    <div className="glass rounded-2xl min-h-[400px] w-full animate-pulse bg-muted/10" />
                                )}
                            </div>
                        )}
                    </InView>
                </div>
            </div>
        </section>
    );
}
