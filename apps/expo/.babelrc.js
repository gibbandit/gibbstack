module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        '@tamagui/babel-plugin',
        {
          config: '../../libs/tamagui-config/src/index.ts',
          components: ['tamagui'],
          importsWhitelist: ['constants.js', 'colors.js'],
          logTimings: true,
          disableExtraction: process.env.NODE_ENV === 'development',
        },
      ],
    ],
  };
};
