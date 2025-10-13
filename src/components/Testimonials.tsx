import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const testimonials = [
    {
        gain: "+54% em 2 meses",
        video_id: "68e3f767905b162885c122f8",
    },
    {
        gain: "+40% em 2 mês",
        video_id: "68e3f281098b0e418ea0b327",
    },
    {
        gain: "7.900 de lucro",
        video_id: "68e40c81cd441edf15f99a21",
    },
    {
        gain: "+72% em três meses",
        video_id: "68e40a49464781c9d31f7846",
    },
    {
        gain: "2300 dólares em 18 dias",
        video_id: "68e40a42cd441edf15f99780",
    },
    {
        gain: "+4800 reais de lucro",
        video_id: "68e40a3d8507bc6d6b028099",
    },
];

export function Testimonials() {
    const baseScriptUrl = "https://scripts.converteai.net/e4afbe22-7a6e-4dd8-9576-24f2a422d026/players";

    return (
        <section className="py-12 px-4 bg-card/30">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16">
                    <Badge className="mb-4 px-4 py-2 bg-secondary/20 border-secondary text-secondary-foreground">
                        Depoimentos Reais
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-black mb-4">
                        Resultados de quem já está <span className="text-gradient-gold">Lucrando</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}>
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full max-w-6xl mx-auto">
                        <CarouselContent>
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <Card className="glass border-border/50 hover:border-secondary/50 transition-all hover:shadow-glow h-full flex flex-col overflow-hidden p-0">
                                        {/* VTurb Video Player */}
                                        <div
                                            className="w-full"
                                            dangerouslySetInnerHTML={{
                                                __html: `<vturb-smartplayer id="vid-${testimonial.video_id}" style="display: block; margin: 0 auto; width: 100%;"></vturb-smartplayer>`,
                                            }}
                                        />
                                        <Helmet>
                                            <script type="text/javascript">
                                                {`
                                                    (function loadVturbPlayer() {
                                                        var scriptSrc = '${baseScriptUrl}/${testimonial.video_id}/v4/player.js';
                                                        if (!document.querySelector('script[src="' + scriptSrc + '"]')) {
                                                            var scriptElement = document.createElement('script');
                                                            scriptElement.src = scriptSrc;
                                                            scriptElement.async = true;
                                                            document.head.appendChild(scriptElement);
                                                        }
                                                    })();
                                                `}
                                            </script>
                                        </Helmet>

                                        {/* Content with padding */}
                                        <div className="p-6 flex flex-col flex-grow">
                                            {/* Gain badge centered */}
                                            <div className="flex items-center justify-center">
                                                <Badge className="w-fit bg-secondary/20 border-secondary text-secondary font-bold text-lg px-4 py-2">
                                                    {testimonial.gain}
                                                </Badge>
                                            </div>
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
