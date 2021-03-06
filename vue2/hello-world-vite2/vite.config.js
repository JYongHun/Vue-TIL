//버전 1
// const path = require('path')

// module.exports = {
//   alias: {
//     '/@': path.resolve(__dirname, './src'),
//     '/@components/': path.resolve(__dirname, './src/compoents')
//   }
// }

//버전2
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '/@': path.resolve(__dirname, './scr'),
      '/@components': path.resolve(__dirname, './src/components'),
      '/@app_modules': path.resolve(__dirname, './src/modules'),
      '/@store': path.resolve(__dirname, './src/store'),
    }
  },
  plugins: [vue()]
})


// 기본 생성 코드
// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()]
// })
