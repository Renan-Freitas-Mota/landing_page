import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Fish } from "lucide-react";
import { CountdownTimer } from "./CountdownTimer";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleCTAClick = () => {
        window.open("https://pay.hotmart.com/A102246370V?off=ybzjvlf2&checkoutMode=10&bid=1759619193797", "_blank");
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? "glass shadow-lg" : "bg-transparent"
            }`}>
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img src="/logo.png" alt="Carteira dos Tubarões" className="h-8 md:h-10" />
                </div>

                <div className="flex items-center gap-4">
                    {/* <CountdownTimer /> */}
                    <Button
                        onClick={handleCTAClick}
                        size="lg"
                        className="gradient-gold text-accent-foreground font-bold shadow-gold hover:scale-105 transition-transform">
                        Liberar Acesso Vitalício
                    </Button>
                </div>
            </div>
        </nav>
    );
}
