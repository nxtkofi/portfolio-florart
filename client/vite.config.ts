import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  esbuild: { logLevel: "silent" },
  base: "/portfolio-florart/",
  plugins: [react()],
});
