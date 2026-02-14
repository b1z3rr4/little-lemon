module.exports = (api) => {
  api.cache(true);
  return {
    plugins: [
      [
        "react-native-unistyles/plugin",
        {
          autoProcessImports: ["@/components"],
          autoProcessRoot: "app",
          root: "app",
        },
      ],
      "react-native-worklets/plugin",
    ],
    presets: ["babel-preset-expo"],
  };
};
