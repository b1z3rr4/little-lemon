import { createMMKV } from "react-native-mmkv";

export const storage = createMMKV();
export const encryptedStorage = createMMKV();

export const mmkvStorage = {
  getItem: (name: string) => {
    const value = storage.getString(name);
    return value ?? null;
  },
  removeItem: (name: string) => {
    storage.remove(name);
  },
  setItem: (name: string, value: string) => {
    storage.set(name, value);
  },
} as const;

export const mmkvEncryptedStorage = {
  getItem: (name: string) => {
    const value = encryptedStorage.getString(name);
    return value ?? null;
  },
  removeItem: (name: string) => {
    encryptedStorage.remove(name);
  },
  setItem: (name: string, value: string) => {
    encryptedStorage.set(name, value);
  },
} as const;
