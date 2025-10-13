import { Fish, Mail, Instagram, Youtube, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

export function Footer() {
    return (
        <footer className="border-t border-border/50 py-12 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <img src="/logo.png" alt="Carteira dos Tubarões" className="h-25" />
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Acesso às mesmas criptomoedas dos grandes fundos globais. Invista com inteligência e
                            multiplique seu patrimônio.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="font-bold mb-4">Links Importantes</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <button className="hover:text-primary transition-colors text-left">
                                            Política de Privacidade e Termos de Uso
                                        </button>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-3xl max-h-[80vh]">
                                        <DialogHeader>
                                            <DialogTitle>Política de Privacidade e Termos de Uso</DialogTitle>
                                        </DialogHeader>
                                        <ScrollArea className="h-[60vh] pr-4">
                                            <div className="space-y-6 text-sm">
                                                <section>
                                                    <h2 className="text-lg font-bold mb-3">POLÍTICA DE PRIVACIDADE</h2>
                                                    <p className="mb-4">Última atualização: 10/09/2025</p>
                                                    <p className="mb-4">
                                                        A R7 Investimentos e Consultoria LTDA, valoriza a privacidade e a proteção dos dados de seus clientes. Esta Política de Privacidade explica como coletamos, utilizamos e protegemos suas informações ao acessar e utilizar o serviço Carteira dos Tubarões.
                                                    </p>

                                                    <h3 className="font-bold mb-2">1. Informações que Coletamos</h3>
                                                    <ul className="list-disc pl-6 mb-4 space-y-1">
                                                        <li><strong>Dados de cadastro:</strong> nome, e-mail e telefone.</li>
                                                        <li><strong>Dados de pagamento:</strong> processados por parceiros como [Hotmart/Stripe/PayPal], sem que tenhamos acesso direto a informações sensíveis como número de cartão.</li>
                                                        <li><strong>Dados de navegação:</strong> cookies e pixels para análise de tráfego e campanhas de marketing.</li>
                                                    </ul>

                                                    <h3 className="font-bold mb-2">2. Como Utilizamos suas Informações</h3>
                                                    <ul className="list-disc pl-6 mb-4 space-y-1">
                                                        <li>Para liberar seu acesso à Carteira dos Tubarões.</li>
                                                        <li>Para enviar atualizações de mercado, comunicados e conteúdos educativos.</li>
                                                        <li>Para informar sobre novidades e promoções, sempre com opção de descadastro.</li>
                                                    </ul>

                                                    <h3 className="font-bold mb-2">3. Compartilhamento de Dados</h3>
                                                    <ul className="list-disc pl-6 mb-4 space-y-1">
                                                        <li>Não vendemos ou repassamos seus dados a terceiros.</li>
                                                        <li>Compartilhamos apenas com serviços essenciais, como processadores de pagamento e plataformas de envio de e-mails.</li>
                                                    </ul>

                                                    <h3 className="font-bold mb-2">4. Cookies e Tecnologias de Rastreamento</h3>
                                                    <p className="mb-4">
                                                        Utilizamos cookies para melhorar sua experiência e medir campanhas de marketing. Você pode desativá-los nas configurações do navegador, mas algumas funcionalidades podem ser limitadas.
                                                    </p>

                                                    <h3 className="font-bold mb-2">5. Segurança dos Dados</h3>
                                                    <p className="mb-4">
                                                        Adotamos medidas técnicas e administrativas para proteger suas informações pessoais contra acessos não autorizados.
                                                    </p>

                                                    <h3 className="font-bold mb-2">6. Direitos do Usuário</h3>
                                                    <ul className="list-disc pl-6 mb-4 space-y-1">
                                                        <li>Acessar, corrigir ou excluir seus dados pessoais.</li>
                                                        <li>Solicitar o cancelamento da assinatura a qualquer momento.</li>
                                                    </ul>

                                                    <h3 className="font-bold mb-2">7. Contato</h3>
                                                    <p className="mb-4">
                                                        Se tiver dúvidas, entre em contato: contato.r7investimentos@gmail.com
                                                    </p>
                                                </section>

                                                <Separator className="my-6" />

                                                <section>
                                                    <h2 className="text-lg font-bold mb-3">TERMOS DE USO</h2>
                                                    <p className="mb-4">Última atualização: 10/09/2025</p>

                                                    <h3 className="font-bold mb-2">1. Sobre o Serviço</h3>
                                                    <p className="mb-4">
                                                        A Carteira dos Tubarões é um serviço de assinatura mensal que oferece conteúdos exclusivos sobre estratégias de investimento em criptomoedas, incluindo relatórios, atualizações, vídeo aulas e acesso a grupo de membros.
                                                    </p>

                                                    <h3 className="font-bold mb-2">2. Assinatura e Pagamento</h3>
                                                    <ul className="list-disc pl-6 mb-4 space-y-1">
                                                        <li>A assinatura tem o valores a partir de R$29,90 por mês, com cobrança recorrente automática no cartão de crédito ou outro meio disponível.</li>
                                                        <li>O não pagamento implica na suspensão automática do acesso até a regularização.</li>
                                                    </ul>

                                                    <h3 className="font-bold mb-2">3. Cancelamento</h3>
                                                    <ul className="list-disc pl-6 mb-4 space-y-1">
                                                        <li>O usuário pode solicitar o cancelamento da assinatura a qualquer momento, diretamente na plataforma de pagamento ou entrando em contato com o suporte.</li>
                                                        <li>Em caso de cancelamento, o acesso permanece ativo até o final do ciclo já pago.</li>
                                                    </ul>

                                                    <h3 className="font-bold mb-2">4. Garantia de Satisfação</h3>
                                                    <p className="mb-4">
                                                        Oferecemos garantia de 7 dias após a assinatura. Caso não esteja satisfeito, o cliente pode solicitar reembolso integral.
                                                    </p>

                                                    <h3 className="font-bold mb-2">5. Propriedade Intelectual</h3>
                                                    <p className="mb-4">
                                                        Todo o conteúdo da Carteira dos Tubarões é de uso exclusivo dos assinantes, não podendo ser copiado, distribuído ou revendido.
                                                    </p>

                                                    <h3 className="font-bold mb-2">6. Alterações nos Termos</h3>
                                                    <p className="mb-4">
                                                        A R7 Investimentos pode atualizar estes Termos e a Política de Privacidade sempre que necessário. Os assinantes serão notificados em caso de mudanças relevantes.
                                                    </p>

                                                    <h3 className="font-bold mb-2">7. Foro</h3>
                                                    <p className="mb-4">
                                                        Fica eleito o foro da comarca de São Bernardo do Campo/SP para dirimir quaisquer conflitos relacionados a este contrato.
                                                    </p>
                                                </section>
                                            </div>
                                        </ScrollArea>
                                    </DialogContent>
                                </Dialog>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">
                                    Contato
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="font-bold mb-4">Redes Sociais</h3>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:border-primary/50 transition-colors"
                                aria-label="Instagram">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:border-primary/50 transition-colors"
                                aria-label="YouTube">
                                <Youtube className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:border-primary/50 transition-colors"
                                aria-label="Twitter">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:border-primary/50 transition-colors"
                                aria-label="Email">
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <Separator className="mb-8" />

                <div className="text-center text-sm text-muted-foreground">
                    <p className="mb-2">© 2025 Carteira dos Tubarões. Todos os direitos reservados.</p>
                    <p className="text-xs">
                        Este site não é afiliado ao Facebook, Google, Instagram ou qualquer outra plataforma
                        mencionada. Os resultados podem variar de pessoa para pessoa. Investimentos em criptomoedas
                        envolvem riscos.
                    </p>
                </div>
            </div>
        </footer>
    );
}
