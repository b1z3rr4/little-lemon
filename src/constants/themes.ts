import type { Ionicons } from "@expo/vector-icons";
import type { ComponentProps } from "react";

export interface ThemeConfig {
  icon: IconName;
  key: string;
  label: string;
  name: ThemeName;
}

export type ThemeName = "dark" | "light" | "premium";

type IconName = ComponentProps<typeof Ionicons>["name"];

export const THEME_CONFIGS: Record<ThemeName, ThemeConfig> = {
  dark: {
    icon: "moon",
    key: "moon",
    label: "Dark",
    name: "dark",
  },
  light: {
    icon: "sunny",
    key: "sun",
    label: "Light",
    name: "light",
  },
  premium: {
    icon: "diamond",
    key: "diamond",
    label: "Premium",
    name: "premium",
  },
} as const;

export const THEME_CYCLE_ORDER: ThemeName[] = ["light", "dark", "premium"];

export const getNextTheme = (currentTheme: ThemeName): ThemeName => {
  const currentIndex = THEME_CYCLE_ORDER.indexOf(currentTheme);
  const nextIndex = (currentIndex + 1) % THEME_CYCLE_ORDER.length;
  return THEME_CYCLE_ORDER[nextIndex];
};
