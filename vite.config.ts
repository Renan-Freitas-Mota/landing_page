import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
    // Durante o deploy no GitHub Pages, defina NODE_ENV=production e o nome do repositório
    base: process.env.DEPLOY_ENV === "ghpages" ? "/landing_page/" : "/",
    server: {
        host: "::",
        port: 8080,
        allowedHosts: ["beloved-barnacle-smart.ngrok-free.app, carteiradostubaroes.com.br, https://renan-freitas-mota.github.io/landing_page/"],
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
}));
