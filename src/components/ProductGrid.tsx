import { Card } from "@/components/ui/card";
import { FileText, Users, Video, Bell } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        icon: FileText,
        title: "Lista Secreta com as 10 Criptos",
        description:
            "Acesso imediato à lista completa das criptomoedas selecionadas pelos maiores fundos globais. Atualizada constantemente para garantir os melhores resultados.",
    },
    {
        icon: Users,
        title: "Acesso ao Grupo VIP",
        description:
            "Tudo o que você precisa: atualizações da carteira, dicas e orientações direto no seu celular - de forma simples e prática.",
    },
    {
        icon: Video,
        title: "Vídeo Aulas Práticas",
        description:
            "Vídeoaulas práticas para aprender a usar a corretora e colocar suas operações em prática.",
    },
    {
        icon: Bell,
        title: "Alertas Estratégicos",
        description:
            "Receba notificações em tempo real sobre movimentos importantes do mercado. Nunca perca uma oportunidade de lucro.",
    },
];

export function ProductGrid() {
    return (
        <section className="py-12 px-4">
            <div className="container mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-4">
                        O Que Você Vai <span className="text-gradient-gold">Receber</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Tudo o que você precisa para começar a investir como os grandes fundos
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}>
                            <Card className="p-4 sm:p-8 glass border-border/50 hover:border-accent/50 transition-all hover:shadow-gold hover:-translate-y-1 h-full">
                                <div className="flex gap-3 sm:gap-6 items-start">
                                    <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-40 lg:h-40 rounded-2xl gradient-gold flex items-center justify-center shadow-gold flex-shrink-0">
                                        <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-20 lg:h-20 text-accent-foreground" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed text-base sm:text-xl">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
