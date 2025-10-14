import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Zap, Unlock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCountdownContext } from "@/context/CountdownContext";

export function FloatingCTA() {
    const [isVisible, setIsVisible] = useState(false);
    const { isExpired } = useCountdownContext();

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleCTAClick = () => {
        window.open(
            "https://pay.hotmart.com/A102246370V?off=ybzjvlf2&checkoutMode=10&bid=1759619193797",
            "_blank"
        );
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="fixed bottom-2 right-2 md:right-6 md:bottom-6 lg:bottom-12 z-40 flex flex-col gap-2">
                    <Button
                        onClick={handleCTAClick}
                        size="lg"
                        className="gradient-gold text-accent-foreground font-bold shadow-gold hover:scale-105 transition-transform">
                        <Zap className="w-5 h-5 mr-2" />
                        Liberar Acesso
                        <Unlock className="w-5 h-5 ml-2" />
                    </Button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
