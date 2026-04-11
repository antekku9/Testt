import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Funkcja pomocnicza do obsługi zasobów z Figmy
function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id: string) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  // KLUCZOWE: base musi odpowiadać nazwie repozytorium na GitHubie
  base: '/Testt/', 
  
  plugins: [
    figmaAssetResolver(),
    // Wtyczki React i Tailwind są wymagane przez Figma Make
    react(),
    tailwindcss(),
  ],
  
  resolve: {
    alias: {
      // Alias @ pozwala na krótsze importy z folderu src (np. '@/components/...')
      '@': path.resolve(__dirname, './src'),
    },
  },

  // Typy plików, które mają być traktowane jako surowe zasoby
  assetsInclude: ['**/*.svg', '**/*.csv'],

  // Opcjonalne: jeśli chcesz, aby pliki budowały się do konkretnego folderu
  build: {
    outDir: 'dist',
  }
})
