import { motion } from "framer-motion";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Tooltip,
    CartesianGrid,
    Label,
    LabelList,
} from "recharts";

const chartData = [
    { month: "1.0", selic: 1, ibov: 0.4, sharks: 1 },
    { month: "1.1", selic: 1.1, ibov: 0.5, sharks: 2 },
    { month: "1.2", selic: 1.2, ibov: 0.3, sharks: 4 },
    { month: "1.3", selic: 1.3, ibov: 0.7, sharks: 6 },
    { month: "1.4", selic: 1.4, ibov: 0.6, sharks: 8 },
    { month: "1.5", selic: 1.5, ibov: 0.8, sharks: 11 },
    { month: "1.6", selic: 1.7, ibov: 0.9, sharks: 14 },
    { month: "1.7", selic: 1.6, ibov: 1.0, sharks: 17 },
    { month: "1.8", selic: 1.7, ibov: 0.6, sharks: 21 },
    { month: "1.9", selic: 1.8, ibov: 0.4, sharks: 25 },
    { month: "2.0", selic: 1.9, ibov: -0.3, sharks: 30 },
    { month: "2.1", selic: 2, ibov: -0.8, sharks: 26 },
    { month: "2.2", selic: 2.4, ibov: -1.2, sharks: 32 },
    { month: "2.3", selic: 2.35, ibov: -1.5, sharks: 47 },
    { month: "2.4", selic: 2.3, ibov: -1.0, sharks: 41 },
    { month: "2.5", selic: 2.25, ibov: -0.7, sharks: 49 },
    { month: "2.6", selic: 2.2, ibov: -0.4, sharks: 70 },
    { month: "2.7", selic: 2.1, ibov: -0.2, sharks: 55 },
    { month: "2.8", selic: 2.1, ibov: 0.0, sharks: 78 },
    { month: "2.9", selic: 2.5, ibov: 0.3, sharks: 100 },
    { month: "3.0", selic: 3.0, ibov: 0.5, sharks: 115 },
    { month: "3.1", selic: 3.9, ibov: 1.0, sharks: 103 },
    { month: "3.2", selic: 3.8, ibov: 1.3, sharks: 118 },
    { month: "3.3", selic: 3.7, ibov: 1.1, sharks: 125 },
    { month: "3.4", selic: 3.6, ibov: 0.9, sharks: 135 },
    { month: "3.5", selic: 3.5, ibov: 1.2, sharks: 118 },
    { month: "3.6", selic: 3.4, ibov: 1.5, sharks: 137 },
    { month: "3.7", selic: 3.3, ibov: 1.8, sharks: 142 },
    { month: "3.8", selic: 3.2, ibov: 2.0, sharks: 145 },
    { month: "3.9", selic: 3.1, ibov: 2.3, sharks: 140 },
    { month: "4.0", selic: 4.0, ibov: 2.6, sharks: 145 },
    { month: "4.1", selic: 4.9, ibov: 3.0, sharks: 148 },
    { month: "4.2", selic: 4.8, ibov: 3.4, sharks: 150 },
    { month: "4.3", selic: 4.7, ibov: 3.7, sharks: 155 },
    { month: "4.4", selic: 4.6, ibov: 3.5, sharks: 135 },
    { month: "4.5", selic: 4.5, ibov: 3.1, sharks: 130 },
    { month: "4.6", selic: 4.4, ibov: 2.9, sharks: 125 },
    { month: "4.7", selic: 4.3, ibov: 3.2, sharks: 115 },
    { month: "4.8", selic: 4.2, ibov: 3.5, sharks: 120 },
    { month: "4.9", selic: 4.1, ibov: 3.8, sharks: 125 },
    { month: "5.0", selic: 5.0, ibov: 4.0, sharks: 110 },
    { month: "5.1", selic: 5.9, ibov: 4.2, sharks: 105 },
    { month: "5.2", selic: 5.8, ibov: 4.0, sharks: 100 },
    { month: "5.3", selic: 5.7, ibov: 3.7, sharks: 90 },
    { month: "5.4", selic: 5.6, ibov: 3.5, sharks: 95 },
    { month: "5.5", selic: 5.5, ibov: 3.8, sharks: 100 },
    { month: "5.6", selic: 5.4, ibov: 4.1, sharks: 105 },
    { month: "5.7", selic: 5.3, ibov: 4.3, sharks: 109 },
    { month: "5.8", selic: 5.2, ibov: 4.5, sharks: 115 },
    { month: "5.9", selic: 5.1, ibov: 4.7, sharks: 110 },
    { month: "6.0", selic: 6.0, ibov: 4.8, sharks: 113 },
    { month: "6.1", selic: 6.9, ibov: 4.6, sharks: 115 },
    { month: "6.2", selic: 6.8, ibov: 4.3, sharks: 110 },
    { month: "6.3", selic: 6.7, ibov: 4.5, sharks: 115 },
    { month: "6.4", selic: 6.6, ibov: 4.7, sharks: 115 },
    { month: "6.5", selic: 6.5, ibov: 5.0, sharks: 130 },
    { month: "6.6", selic: 6.4, ibov: 5.3, sharks: 125 },
    { month: "6.7", selic: 6.3, ibov: 5.6, sharks: 135 },
    { month: "6.8", selic: 6.2, ibov: 5.8, sharks: 145 },
    { month: "6.9", selic: 6.1, ibov: 6.0, sharks: 168 },
    { month: "7.0", selic: 7.0, ibov: 6.2, sharks: 175 },
    { month: "7.1", selic: 7.9, ibov: 6.4, sharks: 150 },
    { month: "7.2", selic: 7.8, ibov: 6.6, sharks: 155 },
    { month: "7.3", selic: 7.7, ibov: 6.8, sharks: 179 },
    { month: "7.4", selic: 7.6, ibov: 7.0, sharks: 185 },
    { month: "7.5", selic: 7.5, ibov: 7.2, sharks: 200 },
    { month: "7.6", selic: 7.4, ibov: 7.4, sharks: 195 },
    { month: "7.7", selic: 7.3, ibov: 7.6, sharks: 188 },
    { month: "7.8", selic: 7.2, ibov: 7.8, sharks: 200 },
    { month: "7.9", selic: 7.1, ibov: 8.0, sharks: 210 },
    { month: "8.0", selic: 8.0, ibov: 8.2, sharks: 220 },
    { month: "8.1", selic: 8.9, ibov: 8.4, sharks: 230 },
    { month: "8.2", selic: 8.8, ibov: 8.6, sharks: 223 },
    { month: "8.3", selic: 8.7, ibov: 8.8, sharks: 218 },
    { month: "8.4", selic: 8.6, ibov: 8.0, sharks: 225 },
    { month: "8.5", selic: 8.5, ibov: 8.2, sharks: 236 },
    { month: "8.6", selic: 8.4, ibov: 8.4, sharks: 242 },
    { month: "8.7", selic: 8.3, ibov: 8.6, sharks: 238 },
    { month: "8.8", selic: 8.2, ibov: 8.8, sharks: 235 },
    { month: "8.9", selic: 8.1, ibov: 8.0, sharks: 245 },
    { month: "9.0", selic: 9.0, ibov: 7.2, sharks: 268 },
    { month: "9.1", selic: 9.9, ibov: 7.4, sharks: 270 },
    { month: "9.2", selic: 9.8, ibov: 7.6, sharks: 265 },
    { month: "9.3", selic: 9.7, ibov: 7.8, sharks: 289 },
    { month: "9.4", selic: 9.6, ibov: 7.0, sharks: 298 },
    { month: "9.5", selic: 9.5, ibov: 7.2, sharks: 291 },
    { month: "9.6", selic: 9.4, ibov: 7.4, sharks: 285 },
    { month: "9.7", selic: 9.3, ibov: 7.6, sharks: 298 },
    { month: "9.8", selic: 9.2, ibov: 7.8, sharks: 315 },
    { month: "9.9", selic: 9.1, ibov: 7.0, sharks: 318 },
    { month: "10.0", selic: 9.0, ibov: 7.2, sharks: 338 },
    { month: "10.1", selic: 9.9, ibov: 7.4, sharks: 330 },
    { month: "10.2", selic: 9.8, ibov: 7.6, sharks: 300 },
    { month: "10.3", selic: 9.7, ibov: 7.8, sharks: 330 },
    { month: "10.4", selic: 9.6, ibov: 7.0, sharks: 340 },
    { month: "10.5", selic: 10.5, ibov: 7.2, sharks: 345 },
    { month: "10.6", selic: 10.4, ibov: 7.4, sharks: 338 },
    { month: "10.7", selic: 10.3, ibov: 7.6, sharks: 340 },
    { month: "10.8", selic: 10.2, ibov: 7.8, sharks: 338 },
    { month: "10.9", selic: 10.1, ibov: 7.0, sharks: 342 },
    { month: "11.0", selic: 11.0, ibov: 7.2, sharks: 345 },
    { month: "11.1", selic: 11.9, ibov: 7.4, sharks: 343 },
    { month: "11.2", selic: 11.8, ibov: 7.6, sharks: 260 },
    { month: "11.3", selic: 12.7, ibov: 7.8, sharks: 345 },
    { month: "11.4", selic: 13.6, ibov: 7.0, sharks: 390 },
    { month: "11.5", selic: 14.5, ibov: 7.2, sharks: 410 },
    { month: "11.6", selic: 15, ibov: 7.4, sharks: 400 },
    { month: "11.7", selic: 15, ibov: 7.6, sharks: 430 },
    { month: "11.8", selic: 15, ibov: 7.8, sharks: 435 },
    { month: "11.9", selic: 15, ibov: 7.0, sharks: 435 },
    { month: "12.0", selic: 15.0, ibov: 7, sharks: 437 },
];

export function HeroChart({ isMobile }: { isMobile: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="px-2 sm:px-4 lg:px-0 h-[65vh] sm:h-[60vh] lg:h-[55vh] overflow-visible"
        >
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-center lg:text-left break-words">
                Rendimento em 12 meses: Carteira dos Tubarões VS Ibovespa e Tesouro Selic
            </h2>
            <div className="glass rounded-2xl p-2 sm:p-3 lg:p-4 h-full flex flex-col">
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 break-words">
                    Comparativo de Rentabilidade - Últimos 12 Meses
                </h3>

                <div className="flex flex-wrap gap-3 lg:gap-4 mb-3 justify-center lg:justify-start">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: "#f59e0b" }}></div>
                        <span className="text-xs lg:text-sm font-medium">Carteira dos Tubarões</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: "#a78bfa" }}></div>
                        <span className="text-xs lg:text-sm font-medium">Tesouro Selic</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: "#ef4444" }}></div>
                        <span className="text-xs lg:text-sm font-medium">Ibovespa</span>
                    </div>
                </div>

                <div className="flex-1 min-h-[350px] sm:min-h-[400px] overflow-visible">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData} margin={{ top: 30, right: 50, left: -10, bottom: 30 }}>
                            <defs>
                                <linearGradient id="colorSelic" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#a78bfa" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#a78bfa" stopOpacity={0.1} />
                                </linearGradient>
                                <linearGradient id="colorIbov" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0.1} />
                                </linearGradient>
                                <linearGradient id="colorSharks" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.9} />
                                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.2} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted-foreground)/0.15)" vertical={false} />
                            <XAxis
                                dataKey="month"
                                stroke="hsl(var(--muted-foreground)/0.5)"
                                tick={{ fill: "hsl(var(--muted-foreground))" }}
                                axisLine={false}
                                tickLine={false}
                                ticks={[
                                    "1.0",
                                    "2.0",
                                    "3.0",
                                    "4.0",
                                    "5.0",
                                    "6.0",
                                    "7.0",
                                    "8.0",
                                    "9.0",
                                    "10.0",
                                    "11.0",
                                    "12.0",
                                ]}
                                tickFormatter={(value) => (value as string).split(".")[0]}
                                style={{ fontSize: "12px" }}
                            >
                                <Label value="Meses" offset={-10} position="insideBottom" />
                            </XAxis>
                            <YAxis
                                domain={[0, 450]}
                                ticks={[0, 150, 300, 450]}
                                tickFormatter={(v) => `${v}%`}
                                stroke="hsl(var(--muted-foreground)/0.5)"
                                tick={{ fill: "hsl(var(--muted-foreground))" }}
                                axisLine={false}
                                tickLine={false}
                                style={{ fontSize: "11px" }}
                            />
                            <Tooltip
                                formatter={(value) => `${value as number}%`}
                                labelFormatter={(label) => `Mês ${(label as string).split(".")[0]}`}
                                contentStyle={{
                                    backgroundColor: "hsl(var(--background))",
                                    border: "1px solid hsl(var(--border))",
                                    borderRadius: isMobile ? "6px" : "8px",
                                    fontSize: isMobile ? "12px" : undefined,
                                    padding: isMobile ? "4px 8px" : undefined,
                                }}
                                allowEscapeViewBox={isMobile ? { x: true, y: true } : { x: false, y: false }}
                                wrapperStyle={{ outline: "none", zIndex: isMobile ? 100 : undefined }}
                                position={isMobile ? { y: -100 } : undefined}
                                offset={isMobile ? -100 : undefined}
                            />
                            <Area name="Tesouro Selic - 15%" type="monotone" dataKey="selic" stroke="#a78bfa" strokeWidth={1} fill="url(#colorSelic)" fillOpacity={1} dot={false}>
                                <LabelList
                                    dataKey="selic"
                                    content={({ index, x, y }) =>
                                        index === chartData.length - 1 ? (
                                            <text x={(x as number) + 4} y={(y as number) + 0} fill="#a78bfa" fontSize={11} fontWeight={600}>
                                                15%
                                            </text>
                                        ) : null
                                    }
                                />
                            </Area>
                            <Area name="Ibovespa - 8%" type="monotone" dataKey="ibov" stroke="#ef4444" strokeWidth={1} fill="url(#colorIbov)" fillOpacity={1} dot={false}>
                                <LabelList
                                    dataKey="ibov"
                                    content={({ index, x, y }) =>
                                        index === chartData.length - 1 ? (
                                            <text x={(x as number) + 4} y={(y as number) + 8} fill="#ef4444" fontSize={11} fontWeight={600}>
                                                8%
                                            </text>
                                        ) : null
                                    }
                                />
                            </Area>
                            <Area name="Carteira dos Tubarões - 437%" type="monotone" dataKey="sharks" stroke="#f59e0b" strokeWidth={1.5} fill="url(#colorSharks)" fillOpacity={1} dot={false}>
                                <LabelList
                                    dataKey="sharks"
                                    content={({ index, x, y }) =>
                                        index === chartData.length - 1 ? (
                                            <text x={(x as number) + 4} y={(y as number) - 6} fill="#f59e0b" fontSize={12} fontWeight={800}>
                                                437%
                                            </text>
                                        ) : null
                                    }
                                />
                            </Area>
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
                <div className="text-xs text-muted-foreground mt-3 text-right flex-shrink-0">
                    Fonte: Infomoney e Tesouro Selic
                </div>
            </div>
        </motion.div>
    );
}


