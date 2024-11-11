import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/app"),
      "@assets": path.resolve(__dirname, "./src/app/assets"),
      "@components": path.resolve(__dirname, "./src/app/components"),
      "@types": path.resolve(__dirname, "./src/app/types"),
      "@features": path.resolve(__dirname, "./src/app/features"),
      "@pages": path.resolve(__dirname, "./src/app/pages"),
      "@utils": path.resolve(__dirname, "./src/app/utils"),
    },
  },
});
