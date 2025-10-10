import { Fish, Mail, Instagram, Youtube, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";

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
                                <a href="#" className="hover:text-primary transition-colors">
                                    Política de Privacidade
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">
                                    Termos de Uso
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">
                                    Política de Reembolso
                                </a>
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
