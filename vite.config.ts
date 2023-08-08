/*
 * @Author: panghu 760695955@qq.com
 * @Date: 2023-08-08 15:21:02
 * @LastEditors: panghu 760695955@qq.com
 * @LastEditTime: 2023-08-08 18:11:47
 * @FilePath: /leaferjs/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  build: {
    rollupOptions: {
      input: './package/src/index.ts',
    },
    emptyOutDir: true,
    sourcemap: true,
    lib: {
      entry: './package/src/index.ts',
      name: 'LeafercocoSsd',
      fileName: 'index',
      formats: ['es', 'umd', 'cjs'],
    }
  },
})
