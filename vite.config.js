import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from "vite-plugin-pwa"

export default defineConfig({
  base: '/CeToMovie/',
  plugins: [
    vue(),
    VitePWA({
      manifest: {
        "name": "CeTo Movie",
        "short_name": "CeTo Movie",
        "start_url": "/CeToMovie/",
        "display": "standalone",
        "background_color": "#000000",
        "theme_color": "#536DFE",
        "description": "Download and watch movies and series",
        "icons": [
          {
            "src": "icons/icon-192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "icons/icon-512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ],
        "related_applications": [],
        "prefer_related_applications": false
      },
      includeAssets: [
        'favicon.ico',
        'icons/icon-192.png',
        'icons/icon-512.png'
      ],
      workbox: {
        mode: "InjectManifest"
      },
      mode: 'development'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  optimizeDeps: {
    exclude: ['js-big-decimal']
  }
})
