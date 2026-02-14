import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { Platform, Pressable } from "react-native";
import Animated, { FadeOut, ZoomIn } from "react-native-reanimated";
import { UnistylesRuntime, useUnistyles } from "react-native-unistyles";
import { THEME_CONFIGS, type ThemeName } from "@/constants/themes";
import { mmkvStorage } from "@/lib/mmkvStorage";

export function ThemeToggle() {
  const { theme } = useUnistyles();
  const currentTheme = UnistylesRuntime.themeName as ThemeName;

  const handleThemeChange = () => {
    if (Platform.OS === "ios") {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }

    let nextTheme: ThemeName;

    switch (currentTheme) {
      case "dark":
        nextTheme = "premium";
        break;
      case "light":
        nextTheme = "dark";
        break;
      case "premium":
        nextTheme = "light";
        break;
      default:
        nextTheme = "light";
    }

    // Save theme to MMKV and update Unistyles
    mmkvStorage.setItem("app-theme", nextTheme);
    UnistylesRuntime.setTheme(nextTheme);
  };

  const themeConfig = THEME_CONFIGS[currentTheme];

  return (
    <Pressable
      onPress={handleThemeChange}
      style={{ paddingHorizontal: 10 }}
    >
      <Animated.View
        entering={ZoomIn}
        exiting={FadeOut}
        key={themeConfig.key}
      >
        <Ionicons
          color={theme.colors.foreground}
          name={themeConfig.icon}
          size={20}
        />
      </Animated.View>
    </Pressable>
  );
}
