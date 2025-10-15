import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { motion } from "framer-motion";

const cryptos = [
    {
        image: "/moedas/moeda_1.webp",
        rendimento: "+407%",
        period: "Últimos 12 meses",
    },
    {
        image: "/moedas/moeda_2.webp",
        rendimento: "+135%",
        period: "Últimos 6 meses",
    },
    {
        image: "/moedas/moeda_3.webp",
        rendimento: "+125%",
        period: "Últimos 12 meses",
    },
    {
        image: "/moedas/moeda_4.webp",
        rendimento: "+90%",
        period: "Últimos 12 meses",
    },
    {
        image: "/moedas/moeda_5.webp",
        rendimento: "+63%",
        period: "Últimos 6 meses",
    },
];

export function CryptoCarousel() {
    return (
        <section className="py-24 bg-card/30">
            <div className="w-[95%] mx-auto px-1 md:px-8 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16">
                    <Badge className="mb-4 px-4 py-2 bg-secondary/20 border-secondary text-secondary-foreground">
                        Valorização Comprovada
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-black mb-4">
                        As Criptomoedas que <span className="text-gradient-gold">Multiplicaram Patrimônios</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Veja a performance real das criptos da nossa carteira secreta
                    </p>
                </motion.div>
                <p className="text-lg text-muted-foreground flex items-center justify-center gap-2">
                    Arraste para ver mais
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white">
                        <path d="m9 18 6-6-6-6" />
                    </svg>
                </p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="px-8 md:px-12">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full">
                        <CarouselContent className="-ml-4">
                            {cryptos.map((crypto, index) => (
                                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2 xl:basis-1/3">
                                    <Card className="overflow-hidden glass border-border/50 hover:border-primary/50 transition-all hover:shadow-glow">
                                        <div className="aspect-[17/10] w-full overflow-hidden">
                                            <img
                                                src={crypto.image}
                                                alt={`Crypto ${index + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="p-4 flex flex-row items-center justify-center gap-2">
                                            <Badge className="bg-green-500/20 text-green-500 border-green-500/50 hover:bg-green-500/30 text-md font-bold px-2 py-1">
                                                {crypto.rendimento}
                                            </Badge>
                                            <p className="text-sm text-muted-foreground text-center">
                                                {crypto.period}
                                            </p>
                                        </div>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="glass hover:shadow-glow -left-10 md:-left-10" />
                        <CarouselNext className="glass hover:shadow-glow -right-10 md:-right-10" />
                    </Carousel>
                </motion.div>
            </div>
        </section>
    );
}
