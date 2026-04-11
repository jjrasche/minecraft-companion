import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  resolve: {
    dedupe: ['react', 'react-dom', '@supabase/supabase-js'],
  },
  // @ts-expect-error vitest augments UserConfig at runtime
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/__tests__/setup.ts'],
    css: { modules: { classNameStrategy: 'non-scoped' } },
  },
  plugins: [react()],
})
