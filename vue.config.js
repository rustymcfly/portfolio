const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(svg|txt|html)$/,
          type: 'asset/source',
          exclude: (filepath) => {
            return filepath.includes(path.resolve(__dirname, 'public'))
          },
        },
      ],
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
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
