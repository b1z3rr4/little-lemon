import type React from "react";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, withUnistyles } from "react-native-unistyles";

const ThemedSafeAreaView = withUnistyles(SafeAreaView);

export function Container({ children }: { children: React.ReactNode }) {
  return (
    <ThemedSafeAreaView style={styles.container}>
      <Animated.View style={styles.content}>{children}</Animated.View>
    </ThemedSafeAreaView>
  );
}

const styles = StyleSheet.create((theme, rt) => ({
  container: {
    backgroundColor: theme.colors.background,
    flex: 1,
  },
  content: {
    flex: 1,
    paddingBottom: rt.insets.bottom,
  },
}));
