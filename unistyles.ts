import { StyleSheet } from "react-native-unistyles";
import { mmkvStorage } from "@/lib/mmkvStorage";

import { breakpoints } from "./breakpoints";
import { darkTheme, lightTheme, premiumTheme } from "./theme";

type AppBreakpoints = typeof breakpoints;

type AppThemes = {
  dark: typeof darkTheme;
  light: typeof lightTheme;
  premium: typeof premiumTheme;
};

declare module "react-native-unistyles" {
  export interface UnistylesBreakpoints extends AppBreakpoints {}
  export interface UnistylesThemes extends AppThemes {}
}

StyleSheet.configure({
  breakpoints,
  settings: {
    initialTheme: () => {
      // Get saved theme from MMKV or default to 'light'
      const savedTheme = mmkvStorage.getItem("app-theme");
      return (savedTheme as keyof AppThemes) ?? "light";
    },
  },
  themes: {
    dark: darkTheme,
    light: lightTheme,
    premium: premiumTheme,
  },
});
