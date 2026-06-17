import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'reveal.js/dist/theme': path.resolve(__dirname, 'node_modules/reveal.js/dist/theme')
    }
  }
})
