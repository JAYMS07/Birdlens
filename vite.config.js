import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Anything starting with /api goes to the Express backend
      '/api': 'http://localhost:5000',
    },
  },
})