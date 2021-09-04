module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-console': 'off',
    'dot-notation': [0],
    'linebreak-style': 0,
    'react/prop-types': [0],
    'no-underscore-dangle': [0],
    'no-unused-expressions': [0],
    'react/jsx-props-no-spreading': [0],
    'react/destructuring-assignment': [0],
    'react/jsx-one-expression-per-line': [0],
    'react/prefer-stateless-function': [0, { ignorePureComponents: true }],
  },
};
