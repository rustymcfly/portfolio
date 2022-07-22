const prettierRc = require('./.prettierrc.js');

/* eslint-disable prettier-vue/prettier */
module.exports = {
  extends: ['plugin:vue/recommended', 'plugin:prettier-vue/recommended', '@vue/typescript'],
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  settings: {
    'prettier-vue': {
      // Settings for how to process Vue SFC Blocks
      SFCBlocks: {
        template: true,
        script: true,
        style: true,
        customBlocks: {
          docs: { lang: 'markdown' },
          config: { lang: 'json' },
          module: { lang: 'js' },
          comments: false,
        },
      },
      usePrettierrc: true,
      fileInfoOptions: {
        ignorePath: '.testignore',
        withNodeModules: false,
      },
    },
  },
  rules: {
    'vue/max-attributes-per-line': 'off',
    'vue/no-multiple-template-root': 'off',
    'prettier-vue/prettier': ['warn', prettierRc],
  },
};
