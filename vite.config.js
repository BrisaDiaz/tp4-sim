import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/TP4_SIM/',
  plugins: [react()],
  server: {
    host: true,
  },
})
