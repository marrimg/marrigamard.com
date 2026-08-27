import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";
import tailwindcss from "@tailwindcss/vite";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [injectHTML(), tailwindcss(), cloudflare()],
});
