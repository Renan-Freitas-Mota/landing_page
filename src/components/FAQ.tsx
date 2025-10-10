import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: 'Como funciona o acesso?',
    answer: 'Após a confirmação do pagamento, você receberá imediatamente um email com todos os acessos: lista de criptomoedas, link do grupo VIP, área de membros com as videoaulas e instruções completas para começar.'
  },
  {
    question: 'Preciso ter experiência com criptomoedas?',
    answer: 'Não! O método foi desenvolvido pensando especialmente em iniciantes. As videoaulas ensinam tudo do zero, desde a criação da conta até as estratégias de compra e venda. Você vai aprender fazendo.'
  },
  {
    question: 'Quanto preciso investir nas criptomoedas?',
    answer: 'Você pode começar com qualquer valor a partir de R$100. Quanto maior o valor investido, maiores podem ser os ganhos proporcionais. Mas o importante é começar dentro da sua realidade financeira.'
  },
  {
    question: 'Como é feito o pagamento?',
    answer: 'Aceitamos todas as principais formas de pagamento: cartão de crédito, PIX, boleto bancário e carteiras digitais. O processo é 100% seguro e seus dados são protegidos.'
  },
  {
    question: 'Existe alguma garantia?',
    answer: 'Sim! Você tem 7 dias de garantia total. Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do seu dinheiro, sem perguntas. Todo o risco é nosso.'
  },
  {
    question: 'Quanto tempo leva para ver resultados?',
    answer: 'Os resultados podem variar de acordo com o valor investido e o momento do mercado. Alguns alunos veem resultados nas primeiras semanas, outros em alguns meses. O importante é seguir as estratégias ensinadas e ter consistência.'
  },
  {
    question: 'Preciso ficar o dia todo monitorando o mercado?',
    answer: 'Não! Uma das maiores vantagens do método é que você pode dedicar apenas alguns minutos por dia. Os alertas estratégicos avisam sobre os momentos importantes, e as criptomoedas selecionadas são para investimentos de médio/longo prazo.'
  },
  {
    question: 'O acesso é vitalício mesmo?',
    answer: 'Sim! Você paga apenas uma vez e tem acesso para sempre a todo o conteúdo, atualizações da lista de criptomoedas, grupo VIP e futuras melhorias que fizermos no treinamento. Sem mensalidades ou cobranças escondidas.'
  },
];

export function FAQ() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Perguntas <span className="text-gradient-gold">Frequentes</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Tire todas as suas dúvidas antes de começar
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass border-border/50 rounded-xl px-6 hover:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
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
