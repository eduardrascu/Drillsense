module.exports = {
  source: ['tokens/storybook/*.json'],
  platforms: {
    js: {
      transformGroup: 'js',
      buildPath: 'tokens/storybook/',
      files: [
        {
          destination: 'tokens.js',
          format: 'javascript/es6',
        },
      ],
    },
  },
};
