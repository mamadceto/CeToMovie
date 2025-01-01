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
<<<<<<< HEAD:vite.config.mjs
  //server: {
   // host: '192.168.1.5', // این خط باعث می‌شود که Vite به تمام IPهای موجود روی سیستم گوش دهد.
   // port: 3000, // شماره پورت دلخواه خود را وارد کنید.
   // open: true, // به طور خودکار مرورگر را باز می‌کند.
 // }
=======
  optimizeDeps: {
    exclude: ['js-big-decimal']
  }
>>>>>>> 635e936034810eb88674e2c857b90859fd4b1db1:vite.config.js
})
