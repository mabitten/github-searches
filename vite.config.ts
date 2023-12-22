// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
    test: {
        globals: true,
        css: false,
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src/"),
            "@assets": path.resolve(__dirname, "./src/assets/"),
            "@components": path.resolve(__dirname, "./src/components/"),
            "@router": path.resolve(__dirname, "./src/router/"),
            "@screens": path.resolve(__dirname, "./src/screens/"),
        },
    },
    plugins: [react()],
});
