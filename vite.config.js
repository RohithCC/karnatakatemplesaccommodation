import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    // Build output folder → supports Render deployment
  build: {
    outDir: "build"
  },

})
