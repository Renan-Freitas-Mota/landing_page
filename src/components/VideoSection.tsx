import { motion } from "framer-motion";
import { Play } from "lucide-react";

export function VideoSection() {
    return (
        <section className="py-24 px-4 relative bg-background/95 overflow-hidden">
            {/* Dark texturized background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.8),rgba(0,0,0,0.95))]" />
            <div className="absolute inset-0 opacity-30" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '30px 30px'
            }} />
            
            <div className="container mx-auto max-w-5xl relative z-10">
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
