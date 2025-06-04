import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {cloudflare} from "@cloudflare/vite-plugin"
import paths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [paths(), react(), cloudflare()],
  server: {
    cors: {
      origin: ["https://www.owlbear.rodeo"]
    }
  }
})
