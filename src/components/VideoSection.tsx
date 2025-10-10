import { motion } from "framer-motion";
import { Play } from "lucide-react";

export function VideoSection() {
    return (
        <section className="py-24 px-4">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12">
                    <h2 className="text-gradient-gold text-4xl md:text-5xl font-black mb-4">
                        RELATOS REAIS
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="relative aspect-video rounded-3xl overflow-hidden glass shadow-2xl group cursor-pointer">
                    {/* Video placeholder */}
                    <div className="absolute inset-0 gradient-primary flex items-center justify-center">
                        <div className="text-center">
                            <div className="w-20 h-20 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                                <Play className="w-10 h-10 text-foreground fill-current" />
                            </div>
                            <p className="text-lg font-semibold">Clique para assistir</p>
                            <p className="text-sm text-foreground/80 mt-2">
                                [Cole aqui o link do seu vídeo do YouTube/Vimeo]
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
