import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  css: {
    postcss: path.resolve("./postcss.config.js"), // explicitly link PostCSS config
  },
});
