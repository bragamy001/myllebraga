import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // ISSO É IMPORTANTE: Garante que os caminhos dos arquivos sejam relativos
})