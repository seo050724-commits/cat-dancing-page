import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages(하위 경로)에서도 asset을 찾도록 상대 경로로 빌드
  base: './',
})
