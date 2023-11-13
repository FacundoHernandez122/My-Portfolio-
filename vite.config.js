import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',  // Agrega esta línea para especificar la base de la aplicación
  plugins: [react()],
})