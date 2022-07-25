module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: 'vue-eslint-parser',
  extends: ['plugin:vue/strongly-recommended', 'eslint:recommended', '@vue/typescript/recommended', 'prettier'],
  plugins: ['@typescript-eslint', 'prettier', 'vue'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
}
