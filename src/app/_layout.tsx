import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { QueryProvider } from "@/providers/query-provider";
import "react-native-reanimated";
import { SQLiteProvider } from "expo-sqlite";
import {
  StyleSheet,
  UnistylesRuntime,
  useUnistyles,
  withUnistyles,
} from "react-native-unistyles";

const ThemedGestureHandlerRootView = withUnistyles(GestureHandlerRootView);

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const { theme } = useUnistyles();
  const currentTheme = UnistylesRuntime.themeName;

  return (
    <ThemedGestureHandlerRootView style={styles.container}>
      <KeyboardProvider>
        <QueryProvider>
          <StatusBar style={currentTheme === "light" ? "dark" : "light"} />
          <Stack
            screenOptions={{
              headerStyle: {
                backgroundColor: theme.colors.background,
              },
              headerTintColor: theme.colors.foreground,
              headerTitleStyle: {
                color: theme.colors.foreground,
              },
            }}
          >
            <Stack.Screen
              name="index"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="(tabs)"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="modal"
              options={{ presentation: "modal" }}
            />
            <Stack.Screen name="profile" />
          </Stack>
        </QueryProvider>
      </KeyboardProvider>
    </ThemedGestureHandlerRootView>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    backgroundColor: theme.colors.background,
    flex: 1,
  },
}));
