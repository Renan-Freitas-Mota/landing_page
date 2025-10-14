import { useEffect, useRef, useState } from "react";

import { useCountdownContext } from "@/context/CountdownContext";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

const CHECKOUT_URL = "https://pay.hotmart.com/A102246370V?off=ybzjvlf2&checkoutMode=10&bid=1759619193797";
const WAITLIST_MAIL =
    "mailto:contato.r7investimentos@gmail.com?subject=Lista%20de%20espera%20-%20Carteira%20dos%20Tubar%C3%B5es";
const NOTIFY_MAIL =
    "mailto:contato.r7investimentos@gmail.com?subject=Quero%20ser%20notificado%20-%20Carteira%20dos%20Tubar%C3%B5es";

export function UrgencyManager() {
    const { totalSeconds, isExpired, resetCountdown, canReopen } = useCountdownContext();

    const prevSecondsRef = useRef<number>(totalSeconds);
    const [showLastChance, setShowLastChance] = useState(false);
    const [lastChanceDismissed, setLastChanceDismissed] = useState(false);
    const [offerClosedOpen, setOfferClosedOpen] = useState(false);

    // Run micro psychological triggers
    useEffect(() => {
        const prev = prevSecondsRef.current;

        if (prev > 600 && totalSeconds <= 600 && totalSeconds > 0) {
            toast({
                title: "⚡ 12 pessoas acabaram de entrar",
                description: "Nos últimos 10 minutos, 12 investidores garantiram acesso à Carteira dos Tubarões.",
                duration: 8000,
            });
        }

        if (prev > 300 && totalSeconds <= 300 && totalSeconds > 0) {
            toast({
                title: "🔥 Última chamada",
                description: "Restam apenas alguns minutos para travar o preço especial de lançamento.",
                duration: 9000,
            });
        }

        prevSecondsRef.current = totalSeconds;
    }, [totalSeconds]);

    // Reset dismiss flag when timer returns to a comfortable zone (> 5 minutes)
    useEffect(() => {
        if (totalSeconds > 300) {
            setLastChanceDismissed(false);
        }
    }, [totalSeconds]);

    // Trigger last chance pop-up in the final 3 minutes
    useEffect(() => {
        if (totalSeconds > 0 && totalSeconds <= 180 && !lastChanceDismissed) {
            setShowLastChance(true);
        } else if (totalSeconds > 180 && showLastChance) {
            setShowLastChance(false);
        }
    }, [totalSeconds, lastChanceDismissed, showLastChance]);

    // Lock the page when the offer expires
    useEffect(() => {
        if (isExpired) {
            setOfferClosedOpen(true);
        } else {
            setOfferClosedOpen(false);
        }
    }, [isExpired]);

    const handleCheckout = () => {
        window.open(CHECKOUT_URL, "_blank");
    };

    const handleWaitlist = () => {
        window.open(WAITLIST_MAIL, "_blank");
    };

    const handleNotify = () => {
        window.open(NOTIFY_MAIL, "_blank");
    };

    const handleLastChanceClose = () => {
        setShowLastChance(false);
        setLastChanceDismissed(true);
    };

    const handleReopen = () => {
        resetCountdown();
    };

    return (
        <>
            <Dialog open={showLastChance} onOpenChange={(open) => (!open ? handleLastChanceClose() : null)}>
                <DialogContent className="max-w-md border-2 border-red-500/40 bg-background/95 backdrop-blur-lg">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-black text-red-500 flex items-center gap-2">
                            <span aria-hidden>🚨</span> Última chance!
                        </DialogTitle>
                        <DialogDescription className="text-base text-foreground">
                            O acesso à Carteira dos Tubarões pode ser encerrado a qualquer momento. Garanta sua
                            vaga agora.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="flex-row gap-3 sm:justify-between">
                        <Button variant="outline" onClick={handleLastChanceClose} className="flex-1">
                            Pensar depois
                        </Button>
                        <Button
                            onClick={handleCheckout}
                            className="flex-1 gradient-gold text-accent-foreground font-bold">
                            Garantir meu acesso agora
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            <Dialog
                open={offerClosedOpen}
                onOpenChange={(open) => {
                    if (!open && canReopen) {
                        setOfferClosedOpen(false);
                    } else if (open) {
                        setOfferClosedOpen(true);
                    }
                }}>
                <DialogContent
                    className={cn(
                        "max-w-lg border-2 border-muted/40 bg-background/95 backdrop-blur-xl",
                        "data-[state=open]:animate-in data-[state=closed]:animate-out"
                    )}>
                    <DialogHeader>
                        <DialogTitle className="text-3xl font-black text-center text-muted-foreground">
                            {canReopen ? "Oferta reaberta por tempo limitado" : "Oferta encerrada"}
                        </DialogTitle>
                        <DialogDescription className="text-center text-base text-muted-foreground">
                            {canReopen
                                ? "Você ganhou uma nova janela exclusiva para liberar o acesso agora. Não perca a segunda chance!"
                                : "As vagas para a Carteira dos Tubarões foram preenchidas. Aproveite para entrar na lista prioritária."}
                        </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-3">
                        {canReopen ? (
                            <Button
                                size="lg"
                                className="w-full gradient-gold text-accent-foreground font-bold"
                                onClick={() => {
                                    handleReopen();
                                    setOfferClosedOpen(false);
                                    handleCheckout();
                                }}>
                                Liberar minha nova chance agora
                            </Button>
                        ) : (
                            <>
                                <Button size="lg" className="w-full font-bold" onClick={handleWaitlist}>
                                    Entrar na lista de espera
                                </Button>
                                <Button size="lg" variant="outline" className="w-full" onClick={handleNotify}>
                                    Receber notificação quando reabrir
                                </Button>
                            </>
                        )}
                    </div>
                    <DialogFooter>
                        {canReopen ? (
                            <p className="text-xs text-center text-muted-foreground w-full">
                                Ao confirmar, o cronômetro reinicia e você volta direto para a oferta especial.
                            </p>
                        ) : (
                            <p className="text-xs text-center text-muted-foreground w-full">
                                Continuaremos monitorando novas vagas e avisaremos você antes de todo mundo.
                            </p>
                        )}
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
}
