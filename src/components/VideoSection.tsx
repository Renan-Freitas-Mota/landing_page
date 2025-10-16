import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

export function VideoSection() {
    const videoId = "68ed80f9a5c41524a5302727";

    return (
        <section className="py-12  relative bg-background/95 overflow-hidden">
            {/* Dark texturized background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.8),rgba(0,0,0,0.95))]" />
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: "30px 30px",
                }}
            />

            <div className="container mx-auto max-w-5xl relative z-10 px-0 md:px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 px-4 md:px-0">
                    <h2 className="text-gradient-gold text-4xl md:text-5xl font-black mb-4">RELATOS REAIS</h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="relative aspect-video rounded-3xl overflow-hidden glass shadow-2xl w-[95%] md:w-full mx-auto">
                    {/* VTurb Video Player */}
                    <div
                        className="w-full h-full"
                        dangerouslySetInnerHTML={{
                            __html: `<vturb-smartplayer id="vid-${videoId}" style="display: block; margin: 0 auto; width: 100%; height: 100%;"></vturb-smartplayer>`,
                        }}
                    />
                    <Helmet>
                        <script type="text/javascript">
                            {`
                                (function loadVturbPlayer() {
                                    var scriptSrc = 'https://scripts.converteai.net/e4afbe22-7a6e-4dd8-9576-24f2a422d026/players/${videoId}/v4/player.js';
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
                </motion.div>
            </div>
        </section>
    );
}
