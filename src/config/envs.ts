import Constants from "expo-constants";

const { apiUrl, apiImgUrl } = Constants.expoConfig?.extra ?? {};

export const appEnvs = {
  apiUrl,
  apiImgUrl,
};
