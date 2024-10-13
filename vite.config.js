import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/life-coach/",
  server:{
    proxy:{
      '/api':{
        target:'http://localhost:3000',
        secure:'false',
      },
    },
  },
})
