import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/shorten": {
        target: "http://localhost:8080",
        changeOrigin: true,
      },
      "/r": {
        target: "http://localhost:8080",
        changeOrigin: true,
      },
    },
  },
});
