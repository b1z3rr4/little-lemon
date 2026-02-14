import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { mmkvStorage } from "@/lib/mmkvStorage";

interface ExampleState {
  count: number;
  decrement: () => void;
  increment: () => void;
  reset: () => void;
}

export const useExampleStore = create<ExampleState>()(
  persist(
    (set) => ({
      count: 0,
      decrement: () => set((state) => ({ count: state.count - 1 })),
      increment: () => set((state) => ({ count: state.count + 1 })),
      reset: () => set({ count: 0 }),
    }),
    {
      name: "example-storage",
      storage: createJSONStorage(() => mmkvStorage),
    }
  )
);
