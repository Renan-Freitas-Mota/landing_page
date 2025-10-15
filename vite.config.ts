import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
    base: "/landing_page/",
    server: {
        host: "::",
        port: 8080,
        allowedHosts: [
            "beloved-barnacle-smart.ngrok-free.app",
            "carteiradostubaroes.com.br",
            "renan-freitas-mota.github.io",
        ],
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
}));
