import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';

// you can copy the base structure of manifest object.
const manifestForPlugIn: Partial<VitePWAOptions> = {
  registerType: 'prompt',
  includeAssets: ['favicon.ico', "apple-touc-icon.png", "masked-icon.svg"],
  manifest: {
    name: "SuperVia App",
    short_name: "SuperVia",
    description: "A Super Via App.",
    theme_color: '#282c34',
    background_color: '#282c34',
    display: "standalone",
    id: "/SuperViaApp/",
    scope: "/SuperViaApp/",
    start_url: "/SuperViaApp/",
    orientation: 'portrait',
    icons: [
      {
        src: 'public/icons/favicon.png',
        sizes: '52x52',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: 'public/icons/apple-touch-icon.png',
        sizes: '52x52',
        type: 'image/png',
        purpose: 'maskable'
      }
    ]
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/SuperViaApp/',
  plugins: [react(),
  VitePWA(manifestForPlugIn),
  VitePWA({ injectRegister: 'inline' })],
})
