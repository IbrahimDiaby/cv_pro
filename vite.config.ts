import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  base: '/CV/', // For Github Repo
  // server: {
  //   proxy: {
  //     '/': {
  //       target: 'https://diaby-ibrahim.fr',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/$/, '/index.html'),
  //     },
  //     '/about': {
  //       target: 'https://diaby-ibrahim.fr/about',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/$/, '/index.html'),
  //     },
  //     '/team': {
  //       target: 'https://diaby-ibrahim.fr/team',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/$/, '/index.html'),
  //     },
  //     '/events': {
  //       target: 'https://diaby-ibrahim.fr/events',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/$/, '/index.html'),
  //     },
  //     '/contact-us': {
  //       target: 'https://diaby-ibrahim.fr/contact-us',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/$/, '/index.html'),
  //     },
  //   },
  // }
})
