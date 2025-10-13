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
        <section className="py-8 bg-card/30">
            <div className="w-[95%] mx-auto px-4 md:px-8 lg:px-12">
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
                </motion.div>
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
                            {news.map((item, index) => (
                                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                    <Card
                                        className="overflow-hidden glass border-border/50 hover:border-primary/50 transition-all hover:shadow-glow cursor-pointer"
                                        onClick={() =>
                                            window.open(
                                                "https://pay.hotmart.com/A102246370V?off=ybzjvlf2&checkoutMode=10&bid=1759619193797",
                                                "_blank"
                                            )
                                        }>
                                        <div className="aspect-[5/7] w-full overflow-hidden">
                                            <img
                                                src={item.image}
                                                alt={`News ${index + 1}`}
                                                className="w-full h-full object-cover object-top"
                                            />
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
