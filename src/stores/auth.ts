import { mmkvStorage } from "../lib/mmkvStorage";

const AUTH_STORE_KEY = "authData";

interface AuthData {
  name: string;
  email: string;
}

export const authStore = {
  save: (params: AuthData) => {
    const data = JSON.stringify(params);
    mmkvStorage.setItem(AUTH_STORE_KEY, data);
  },
  get: (): AuthData | null => {
    const data = mmkvStorage.getItem(AUTH_STORE_KEY);
    if (data) {
      return JSON.parse(data);
    }

    return null;
  },
  delete: () => {
    mmkvStorage.removeItem(AUTH_STORE_KEY);
  },
};
