import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import dynamicImport from 'vite-plugin-dynamic-import'
import { fileURLToPath } from 'url'
import { resolve, dirname } from 'path'

export default defineConfig({
  transpileDependencies: true,
  plugins: [
    vue(),
    dynamicImport(),
    vueI18n({
      include: resolve(
        dirname(fileURLToPath(import.meta.url)),
        './src/locales/**'
      ),
    }),
  ],
  assetsInclude: ['**/*.html'],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    watch: './src',
  },
  test: {
    globals: true,
    environment: 'happy-dom',
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
