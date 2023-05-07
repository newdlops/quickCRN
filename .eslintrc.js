/* eslint-env node */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    '@react-native-community',
    'prettier',
  ],
  plugins: [
    '@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  root: true,
  rules: {
    'prettier/prettier': [
      'warn',
      {
        semi: false,
        singleQuote: true,
        spaceBeforeBlocks: false,
      },
      {
        usePrettierrc: false,
      }
    ],
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
    'no-console': 'error',
    'no-loop-func': 'error',
    'no-shadow': 'error',
    'no-var': 'error',
    'prefer-const': 'warn',
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': 'error',
    'no-trailing-spaces': 'error',
    'no-tabs': 'error',
    'semi': ['error', 'never'],
    'space-before-blocks': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'arrow-body-style': ['error', 'as-needed'],
    'no-confusing-arrow': 'error',
  },
}