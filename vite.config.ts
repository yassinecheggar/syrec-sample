import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      // svgr options: https://react-svgr.com/docs/options/
      svgrOptions: {
        exportType: "default",
        ref: true,
        svgo: false,
        titleProp: true,
      },
      include: "**/*.svg",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/app"),
      "@assets": path.resolve(__dirname, "./src/app/assets"),
      "@components": path.resolve(__dirname, "./src/app/components"),
      "@types": path.resolve(__dirname, "./src/app/types"),
      "@features": path.resolve(__dirname, "./src/app/features"),
      "@pages": path.resolve(__dirname, "./src/app/pages"),
      "@utils": path.resolve(__dirname, "./src/app/utils"),
      "@store": path.resolve(__dirname, "./src/app/store"),
      "@serices": path.resolve(__dirname, "./src/app/serices"),
    },
  },
  // server: {
  //   port: 3006,
  // },
});
