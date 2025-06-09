import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'


dotenv.config() // carga las variables de entorno desde el archivo .env

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
