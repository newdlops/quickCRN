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
    'prettier',
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
        useTabs: false,
        arrowParens: 'avoid',
        bracketSameLine: false,
        bracketSpacing: true,
        singleQuote: true,
        jsxSingleQuote: true,
        trailingComma: 'all',
        tabs: false,
        tabWidth: 2,
        semi: false,
        usePrettierrc: true,
      },
    ],
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-return': 'warn',
    '@typescript-eslint/ban-types': 'warn',
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-console': 'error',
    'no-loop-func': 'error',
    'no-shadow': 'error',
    'no-var': 'warn',
    'prefer-const': 'warn',
    'prefer-rest-params': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': 'error',
    'no-trailing-spaces': 'error',
    'no-tabs': 'error',
    'semi': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'arrow-body-style': ['error', 'as-needed'],
    'no-confusing-arrow': 'error',
    'jsx-quotes': ['error', 'prefer-single'],
    'react-hooks/exhaustive-deps': 'warn'
  },
}
