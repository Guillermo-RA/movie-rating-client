module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'google'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'object-curly-spacing': ['error', 'always'],
    'max-len': ['error', { code: 200 }],
    'semi': ['error', 'never'],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
  },
}
