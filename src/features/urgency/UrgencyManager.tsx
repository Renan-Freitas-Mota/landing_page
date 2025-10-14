import { useEffect, useRef, useState } from "react";
import { useCountdownContext } from "@/context/CountdownContext";
import { COUNTDOWN_DURATION } from "@/hooks/useCountdown";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
// Replaced toast warnings with lightweight Dialogs

const CHECKOUT_URL = "https://pay.hotmart.com/A102246370V?off=ybzjvlf2&checkoutMode=10&bid=1759619193797";
const WAITLIST_MAIL =
    "mailto:contato.r7investimentos@gmail.com?subject=Lista%20de%20espera%20-%20Carteira%20dos%20Tubar%C3%B5es";
const NOTIFY_MAIL =
    "mailto:contato.r7investimentos@gmail.com?subject=Quero%20ser%20notificado%20-%20Carteira%20dos%20Tubar%C3%B5es";

export function UrgencyManager() {
    const { totalSeconds, isExpired, resetCountdown, canReopen } = useCountdownContext();

    const prevSecondsRef = useRef<number>(totalSeconds);
    const toastShownRef = useRef({
        firstWarning: false,
        secondWarning: false,
        lastChance: false,
    });
    const [firstWarningOpen, setFirstWarningOpen] = useState(false);
    const [secondWarningOpen, setSecondWarningOpen] = useState(false);
    const [lastChanceOpen, setLastChanceOpen] = useState(false);
    const [offerClosedOpen, setOfferClosedOpen] = useState(false);

    // Pre-compute dynamic thresholds based on total countdown duration
    const durationSeconds = Math.floor(COUNTDOWN_DURATION / 1000);
    const thresholdTwoThirds = Math.floor((2 / 3) * durationSeconds); // was 600s for 15 min
    const thresholdOneThird = Math.floor((1 / 3) * durationSeconds); // was 300s for 15 min
    const thresholdOneFifth = Math.floor((1 / 5) * durationSeconds); // was 180s for 15 min

    // Trigger dialogs at key thresholds
    useEffect(() => {
        const prev = prevSecondsRef.current;

        if (
            prev > thresholdTwoThirds &&
            totalSeconds <= thresholdTwoThirds &&
            totalSeconds > 0 &&
            !toastShownRef.current.firstWarning
        ) {
            toastShownRef.current.firstWarning = true;
            setFirstWarningOpen(true);
        }

        if (
            prev > thresholdOneThird &&
            totalSeconds <= thresholdOneThird &&
            totalSeconds > 0 &&
            !toastShownRef.current.secondWarning
        ) {
            toastShownRef.current.secondWarning = true;
            setSecondWarningOpen(true);
        }

        prevSecondsRef.current = totalSeconds;
    }, [totalSeconds, thresholdTwoThirds, thresholdOneThird]);

    // Reset toast flags when timer returns to a comfortable zone
    useEffect(() => {
        if (totalSeconds > thresholdOneThird) {
            toastShownRef.current.lastChance = false;
        }
    }, [totalSeconds, thresholdOneThird]);

    // Trigger last chance dialog in the final one-fifth of the duration
    useEffect(() => {
        if (totalSeconds > 0 && totalSeconds <= thresholdOneFifth && !toastShownRef.current.lastChance) {
            toastShownRef.current.lastChance = true;
            setLastChanceOpen(true);
        }
    }, [totalSeconds, thresholdOneFifth]);

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

    const handleReopen = () => {
        resetCountdown();
    };

    return (
        <>
            {/* Non-blocking, transparent-overlay dialogs for time warnings */}
            <Dialog open={firstWarningOpen} onOpenChange={setFirstWarningOpen} modal={false}>
                <DialogContent
                    overlayClassName="bg-transparent pointer-events-none"
                    className={cn(
                        "top-4 left-1/2 translate-x-[-50%] translate-y-0 max-w-sm w-[92vw] sm:w-[28rem]",
                        "border-2 border-blue-500/40 bg-background/95 backdrop-blur-xl p-4 shadow-lg",
                        "data-[state=open]:animate-in data-[state=closed]:animate-out"
                    )}>
                    <DialogHeader>
                        <DialogTitle className="text-base font-extrabold">⚡ Atenção ao tempo!</DialogTitle>
                        <DialogDescription className="text-sm">
                            Se o cronômetro zerar, você perderá o preço promocional e terá que pagar o valor cheio
                            do produto.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex gap-2 flex-wrap">
                        <Button size="sm" className="font-semibold" onClick={handleCheckout}>
                            Garantir preço promocional
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => setFirstWarningOpen(false)}>
                            Continuar vendo
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>

            <Dialog open={secondWarningOpen} onOpenChange={setSecondWarningOpen} modal={false}>
                <DialogContent
                    overlayClassName="bg-transparent pointer-events-none"
                    className={cn(
                        "top-4 left-1/2 translate-x-[-50%] translate-y-0 max-w-sm w-[92vw] sm:w-[28rem]",
                        "border-2 border-orange-500/40 bg-background/95 backdrop-blur-xl p-4 shadow-lg",
                        "data-[state=open]:animate-in data-[state=closed]:animate-out"
                    )}>
                    <DialogHeader>
                        <DialogTitle className="text-base font-extrabold">🔥 O tempo está acabando!</DialogTitle>
                        <DialogDescription className="text-sm">
                            Quando o cronômetro chegar a ZERO, o desconto será REMOVIDO e você terá que pagar o
                            preço INTEGRAL. Não deixe essa oportunidade escapar!
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex gap-2 flex-wrap">
                        <Button size="sm" className="font-semibold" onClick={handleCheckout}>
                            Garantir desconto agora
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => setSecondWarningOpen(false)}>
                            Pensar depois
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>

            <Dialog open={lastChanceOpen} onOpenChange={setLastChanceOpen} modal={false}>
                <DialogContent
                    overlayClassName="bg-transparent pointer-events-none"
                    className={cn(
                        "top-4 left-1/2 translate-x-[-50%] translate-y-0 max-w-sm w-[92vw] sm:w-[28rem]",
                        "border-2 border-red-500/40 bg-background/95 backdrop-blur-xl p-4 shadow-lg",
                        "data-[state=open]:animate-in data-[state=closed]:animate-out"
                    )}>
                    <DialogHeader>
                        <DialogTitle className="text-base font-extrabold">🚨 CORRA! Últimos segundos!</DialogTitle>
                        <DialogDescription className="text-sm">
                            AGORA OU NUNCA! Garanta o acesso pelo preço promocional antes que seja tarde demais. O
                            cronômetro está quase zerando!
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex gap-2 flex-wrap">
                        <Button size="sm" className="font-semibold" onClick={handleCheckout}>
                            GARANTIR AGORA!
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => setLastChanceOpen(false)}>
                            Pensar depois
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
            {/* Offer Expired Modal */}
            <Dialog
                open={offerClosedOpen}
                onOpenChange={(open) => {
                    if (!open) {
                        setOfferClosedOpen(false);
                    }
                }}>
                <DialogContent
                    className={cn(
                        "max-w-[95vw] sm:max-w-lg border-2 border-red-500/40 bg-background/95 backdrop-blur-xl",
                        "data-[state=open]:animate-in data-[state=closed]:animate-out",
                        "mx-4"
                    )}>
                    <DialogHeader>
                        <DialogTitle className="text-2xl sm:text-3xl font-black text-center text-red-500">
                            ⏰ ÚLTIMA CHANCE!
                        </DialogTitle>
                        <DialogDescription className="text-center text-sm sm:text-base text-foreground font-semibold">
                            O tempo acabou, mas você ainda pode garantir o preço promocional AGORA! Após fechar
                            essa tela, o preço volta ao normal e você perderá o desconto.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-3">
                        <Button
                            size="lg"
                            className="w-full gradient-gold text-accent-foreground font-bold text-sm sm:text-base px-3 py-2 h-auto min-h-[44px]"
                            onClick={() => {
                                setOfferClosedOpen(false);
                                handleCheckout();
                            }}>
                            <span className="text-center leading-tight">COMPRAR AGORA COM DESCONTO</span>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="w-full text-sm sm:text-base"
                            onClick={() => setOfferClosedOpen(false)}>
                            FECHAR e perder o desconto
                        </Button>
                    </div>
                    <DialogFooter>
                        <p className="text-xs text-center text-muted-foreground w-full">
                            ⚠️ Esta é sua última oportunidade de garantir o desconto. Não deixe passar!
                        </p>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
}
