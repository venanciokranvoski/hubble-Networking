module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: '.',
        alias: {
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@theme': './src/theme',
          '@domain': './src/domain',
          '@brand': './src/brand',
          '@api': './src/API',
          '@types': './src/types',
          '@post': './src/domain/Post/PostComment',
          '@utils': './src/utils',
          '@infra': './src/infra',
          '@services': './src/services',
        },
      },
    ],
  ],
};
