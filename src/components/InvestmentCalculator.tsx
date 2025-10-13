import { TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export function InvestmentCalculator() {
    const [investmentValue, setInvestmentValue] = useState<number>(1000);

    // Calcula o retorno de 437% (multiplicar por 5.37)
    const calculateReturn = (value: number) => {
        return value * 4.37;
    };

    const handleInvestmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value) || 0;
        setInvestmentValue(value);
    };

    return (
        <section className="py-4 px-4 overflow-hidden">
            <div className="w-full max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-4 text-center">SIMULADOR DE INVESTIMENTO</h2>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass-gold rounded-xl p-4 sm:p-6 border-2 border-[#f59e0b]/30 shadow-lg">
                    <div className="flex flex-col gap-3">
                        {/* Texto e Input */}
                        <div className="flex flex-wrap items-center justify-center gap-2 text-base sm:text-lg font-semibold">
                            <span className="text-foreground">Se você tivesse investido</span>
                            <div className="relative group">
                                <span className="absolute -top-5 -left-1 text-xs text-[#f59e0b] transition-opacity">
                                    ✎ Altere o valor
                                </span>
                                <div className="relative flex items-center">
                                    <span className="absolute left-2.5 text-foreground/70 text-sm font-medium">R$</span>
                                    <input
                                        type="number"
                                        value={investmentValue}
                                        onChange={handleInvestmentChange}
                                        className="w-28 sm:w-32 px-2 pl-9 py-1.5 bg-background/50 border-2 border-[#f59e0b] rounded-lg text-center font-bold text-[#f59e0b] focus:outline-none focus:ring-2 focus:ring-[#f59e0b] focus:border-transparent transition-all hover:bg-background/70 hover:scale-105"
                                        placeholder="1000"
                                        min="0"
                                        step="100"
                                    />
                                </div>
                            </div>
                            <span className="text-foreground">há 12 meses, você teria hoje:</span>
                        </div>

                        {/* Resultado */}
                        <div className="text-center">
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#f59e0b]/20 via-[#f59e0b]/10 to-[#f59e0b]/20 px-4 py-3 rounded-lg border border-[#f59e0b]/40">
                                <TrendingUp className="w-6 h-6 text-[#f59e0b] animate-pulse" />
                                <span className="text-3xl sm:text-4xl font-black text-gradient-gold">
                                    {new Intl.NumberFormat("pt-BR", {
                                        style: "currency",
                                        currency: "BRL",
                                    }).format(calculateReturn(investmentValue))}
                                </span>
                                <TrendingUp className="w-6 h-6 text-[#f59e0b] animate-pulse" />
                            </div>
                            <p className="text-sm sm:text-base text-muted-foreground mt-2 font-medium">
                                🚀 Retorno de{" "}
                                <span className="text-[#f59e0b] font-bold">
                                    +{(calculateReturn(investmentValue) - investmentValue).toLocaleString("pt-BR", {
                                        style: "currency",
                                        currency: "BRL",
                                    })}
                                </span>
                                {" "}(437%)
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

