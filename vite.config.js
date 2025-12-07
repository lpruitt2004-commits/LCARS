import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "LCARS Interface",
        short_name: "LCARS",
        description: "Star Trek: The Next Generation LCARS UI",
        start_url: ".",
        display: "standalone",
        background_color: "#1a1a1a",
        theme_color: "#e89c2e",
        icons: [
          {
            src: "lcars-icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "lcars-icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  server: {
    port: 3000,
    open: true,
  },
});
