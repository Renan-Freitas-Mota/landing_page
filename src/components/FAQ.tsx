import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
    {
        question: "Como funciona o acesso?",
        answer: "Após a confirmação do pagamento, você receberá imediatamente um email com todos os acessos: lista de criptomoedas, link do grupo VIP, área de membros com as videoaulas e instruções completas para começar.",
    },
    {
        question: "Preciso ter experiência com criptomoedas?",
        answer: "Não! O método foi desenvolvido pensando especialmente em iniciantes. As videoaulas ensinam tudo do zero, desde a criação da conta até as estratégias de compra e venda. Você vai aprender fazendo.",
    },
    {
        question: "Quanto preciso investir nas criptomoedas?",
        answer: "Não! O método também foi desenvolvido pensando em iniciantes. As videoaulas ensinam tudo do zero, desde a criação da conta até as estratégias de compra e venda. Você vai aprender fazendo.",
    },
    {
        question: "Como é feito o pagamento?",
        answer: "Aceitamos todas as principais formas de pagamento: cartão de crédito, PIX, boleto bancário e carteiras digitais. O processo é 100% seguro e seus dados são protegidos.",
    },
    {
        question: "Existe alguma garantia?",
        answer: "Sim! Você tem 7 dias de garantia total. Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do seu dinheiro, sem perguntas. Todo o risco é nosso.",
    },
    {
        question: "Quanto tempo leva para ver resultados?",
        answer: "Alguns alunos veem resultados nas primeiras semanas, outros em alguns meses. O importante é seguir as estratégias ensinadas com consistência.",
    },
    {
        question: "Preciso ficar o dia todo monitorando o mercado?",
        answer: "Não! Uma das maiores vantagens do método é que você pode dedicar apenas alguns minutos por semana. Os alertas estratégicos avisam sobre os momentos importantes, e as criptomoedas selecionadas não são para fazer operaçaões diárias, os investimentos duram dias/semanas.",
    },
    {
        question: "O acesso é vitalício mesmo?",
        answer: "Sim! Você paga apenas uma vez e tem acesso para sempre a todo o conteúdo, atualizações da lista de criptomoedas, grupo VIP e futuras melhorias que fizermos no treinamento. Sem mensalidades ou cobranças escondidas.",
    },
];

export function FAQ() {
    return (
        <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-bl from-indigo-950/30 via-slate-950 to-purple-950/30">
            {/* Dot matrix texture */}
            <div className="absolute inset-0 opacity-15">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle, rgba(139, 92, 246, 0.3) 1px, transparent 1px)`,
                        backgroundSize: "30px 30px",
                        animation: "dotPulse 4s ease-in-out infinite",
                    }}
                />
            </div>

            {/* Flowing purple glows */}
            <div
                className="absolute top-0 left-0 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse"
                style={{ animationDuration: "6s" }}
            />
            <div
                className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"
                style={{ animationDuration: "7s", animationDelay: "1.5s" }}
            />
            <div
                className="absolute top-1/2 left-1/3 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl animate-pulse"
                style={{ animationDuration: "8s", animationDelay: "3s" }}
            />
            <div className="container mx-auto max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-4">
                        Perguntas <span className="text-gradient-gold">Frequentes</span>
                    </h2>
                    <p className="text-xl text-muted-foreground">Tire todas as suas dúvidas antes de começar</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="glass border-border/50 rounded-xl px-6 hover:border-primary/50 transition-colors">
                                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed pt-2 text-base md:text-lg">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
}
