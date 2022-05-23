module.exports = {
  root: true,
  extends: ['@parcellab/eslint-config/typescript', '@parcellab/eslint-config/jest'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
};
