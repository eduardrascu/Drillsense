module.exports = {
  source: ['tokens/**/*.json'],
  platforms: {
    js: {
      transformGroup: 'js',
      buildPath: 'tokens/',
      files: [
        {
          destination: 'tokens.js',
          format: 'javascript/es6',
        },
      ],
    },
  },
};
