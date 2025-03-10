module.exports = {
  root: true,
  env: {
    commonjs: true,
    es6: true,
    node: true,
    mocha: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2022,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'no-restricted-syntax': 'off', // Отключает запрет на for...in, for...of и генераторы
    'guard-for-in': 'off', // Отключает требование оборачивать for...in в if
    'no-plusplus': 'off', // Разрешает использовать ++ и --
    'prefer-object-spread': 'off',
  },
  plugins: ['prettier'],
  noInlineConfig: true,
};
