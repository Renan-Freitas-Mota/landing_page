import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { motion } from "framer-motion";

const news = [
    {
        image: "/materias/materia_1.webp",
    },
    {
        image: "/materias/materia_2.webp",
    },
    {
        image: "/materias/materia_3.webp",
    },
    {
        image: "/materias/materia_4.webp",
    },
    {
        image: "/materias/materia_5.webp",
    },
];

export function NewsGrid() {
    return (
        <section className="py-8 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
            {/* Animated grid texture background */}
            <div className="absolute inset-0 opacity-20">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: "50px 50px",
                        animation: "gridMove 20s linear infinite",
                    }}
                />
            </div>

            {/* Floating glow orbs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
            <div
                className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "1s" }}
            />
            <div className="w-[95%] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16">
                    <Badge className="mb-4 px-4 py-2 bg-secondary/20 border-secondary text-secondary-foreground">
                        Na Mídia Internacional
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-black mb-4">
                        Grandes Fundos já Estão{" "}
                        <span className="text-gradient-gold">Investindo Nessas Moedas</span>
                    </h2>
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
                        className="w-full overflow-visible">
                        <CarouselContent className="-ml-4 overflow-visible lg:py-8 lg:px-10 md:py-8 md:px-4">
                            {news.map((item, index) => (
                                <CarouselItem
                                    key={index}
                                    className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 overflow-visible">
                                    <motion.div
                                        whileHover={{
                                            scale: 1.05,
                                            zIndex: 20,
                                            transition: { duration: 0.3, ease: "easeOut" },
                                        }}
                                        whileTap={{ scale: 0.98 }}
                                        className="h-full relative">
                                        <Card
                                            className="overflow-hidden glass border-border/50 hover:border-primary/70 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.6),0_0_60px_rgba(59,130,246,0.3)] cursor-pointer group relative"
                                            onClick={() =>
                                                window.open(
                                                    "https://pay.hotmart.com/A102246370V?off=ybzjvlf2&checkoutMode=10&bid=1759619193797",
                                                    "_blank"
                                                )
                                            }>
                                            {/* Enhanced glow effect overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />

                                            <div className="aspect-[5/7] w-full overflow-hidden">
                                                <img
                                                    src={item.image}
                                                    alt={`News ${index + 1}`}
                                                    className="w-full h-full object-cover object-top group-hover:brightness-110 transition-all duration-300"
                                                />
                                            </div>
                                        </Card>
                                    </motion.div>
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
