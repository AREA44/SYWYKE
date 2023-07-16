export default {
  tabWidth: 2,
  printWidth: 80,
  semi: true,
  singleQuote: true,
  endOfLine: 'lf',
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
