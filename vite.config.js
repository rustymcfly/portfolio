import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import dynamicImport from 'vite-plugin-dynamic-import'
import { resolve } from 'path'
export default defineConfig({
  transpileDependencies: true,
  plugins: [vue(), dynamicImport()],
  assetsInclude: ['**/*.html'],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    watch: './src',
  },
  pluginOptions: {
    i18n: {
      locale: 'de',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
    },
  },
})
