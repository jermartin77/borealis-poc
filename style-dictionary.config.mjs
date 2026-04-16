import StyleDictionary from 'style-dictionary';

const sd = new StyleDictionary({
  // Exclude type-styles.json — handled by scripts/generate-type-styles.mjs
  source: [
    'tokens/source/color.json',
    'tokens/source/typography.json',
    'tokens/source/spacing.json',
  ],
  platforms: {
    css: {
      transformGroup: 'css',
      prefix: 'ds',
      buildPath: 'src/tokens/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
          options: { selector: ':root', outputReferences: true },
        },
      ],
    },
    js: {
      transformGroup: 'js',
      buildPath: 'src/tokens/',
      files: [
        {
          destination: 'tokens.ts',
          format: 'javascript/es6',
        },
      ],
    },
  },
});

await sd.buildAllPlatforms();
