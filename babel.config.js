module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'react-native-unistyles/plugin',
        {
          root: 'app',
          autoProcessRoot: 'app',
          autoProcessImports: ['@/components'],
        },
      ],
      'react-native-worklets/plugin',
    ],
  };
};
