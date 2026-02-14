import { useMMKVDevTools } from "@dev-plugins/react-native-mmkv";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { onlineManager } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import type { ReactNode } from "react";
import { storage } from "@/lib/mmkvStorage";
import { queryClient } from "@/lib/query-client";

interface QueryProviderProps {
  children: ReactNode;
}

const persister = createSyncStoragePersister({
  storage: {
    getItem: (key: string) => {
      const value = storage.getString(key);
      return value ?? null;
    },
    removeItem: (key: string) => {
      storage.remove(key);
    },
    setItem: (key: string, value: string) => {
      storage.set(key, value);
    },
  },
});

const DevTools = () => {
  useMMKVDevTools({ storage: storage });
  return null;
};

export const QueryProvider = ({ children }: QueryProviderProps) => {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      onSuccess={async () => {
        if (onlineManager.isOnline()) {
          await queryClient.resumePausedMutations();
          await queryClient.invalidateQueries();
        }
      }}
      persistOptions={{
        persister,
      }}
    >
      {children}
      {__DEV__ && <DevTools />}
    </PersistQueryClientProvider>
  );
};
