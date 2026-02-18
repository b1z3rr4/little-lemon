import type React from "react";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, withUnistyles } from "react-native-unistyles";

const ThemedSafeAreaView = withUnistyles(SafeAreaView);

export function Container({
  children,
  safeArea,
}: {
  children: React.ReactNode;
  safeArea?: boolean;
}) {
  if (safeArea) {
    return (
      <ThemedSafeAreaView style={styles.container}>
        <Animated.View style={styles.content}>{children}</Animated.View>
      </ThemedSafeAreaView>
    );
  }

  return <Animated.View style={styles.content}>{children}</Animated.View>;
}

const styles = StyleSheet.create((theme, rt) => ({
  container: {
    backgroundColor: theme.colors.background,
    flex: 1,
  },
  content: {
    flex: 1,
    paddingBottom: rt.insets.bottom,
    backgroundColor: theme.colors.background,
  },
}));
