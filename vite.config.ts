import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "assets": path.resolve(__dirname, "./src/assets"),
      "components": path.resolve(__dirname, "./src/components"),
      "context": path.resolve(__dirname, "./src/context"),
      "hooks": path.resolve(__dirname, "./src/hooks"),
      "icons": path.resolve(__dirname, "./src/icons"),
      "layout": path.resolve(__dirname, "./src/layout"),
      "styles": path.resolve(__dirname, "./src/styles"),
      "types": path.resolve(__dirname, "./src/types"),
      "pages": path.resolve(__dirname, "./src/pages")
    }
  }
})
