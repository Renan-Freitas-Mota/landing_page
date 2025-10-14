import { useState, useEffect } from "react";
import { CountdownTimer } from "@/components/CountdownTimer";
import { useCountdownContext } from "@/context/CountdownContext";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const { isExpired } = useCountdownContext();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? "glass shadow-lg" : "bg-transparent"
            }`}>
            <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <img src="/logo.png" alt="Carteira dos Tubarões" className="h-8 md:h-10" />
                </div>
                {!isExpired && (
                    <div className="flex">
                        <CountdownTimer />
                    </div>
                )}
            </div>
        </nav>
    );
}
