import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // eslint-disable-next-line no-undef
    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }],
  },
  server: {
    host: true,
    port: 3000,
  },
  build: {
    assetsDir: "assets",
  },
});
