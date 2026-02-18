import { useEffect, useRef } from "react";
import { Animated, Image, Text, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export const HeroBanner = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;
  const scaleAnim = useRef(new Animated.Value(0.92)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.spring(slideAnim, {
        toValue: 0,
        tension: 80,
        friction: 10,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 80,
        friction: 10,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, slideAnim, scaleAnim]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.background} />

      <Animated.View
        style={[
          styles.content,
          { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
        ]}
      >
        <View style={styles.heroRow}>
          <View style={styles.heroTextBlock}>
            <Text style={styles.heroTitle}>Little Lemon</Text>
            <Text style={styles.heroSubtitle}>Chicago</Text>
            <Text style={styles.heroDescription}>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </Text>
          </View>

          <Animated.View
            style={[styles.imageCard, { transform: [{ scale: scaleAnim }] }]}
          >
            <Image
              source={require("../../assets/images/hero.png")}
              style={styles.heroImage}
              resizeMode="cover"
            />
          </Animated.View>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create((theme) => ({
  wrapper: {
    borderRadius: theme.borderRadius.xl,
    overflow: "hidden",
    marginBottom: 4,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: theme.colors.primary,
  },
  content: {
    gap: theme.spacing.md,
    padding: theme.spacing.md,
  },
  heroRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.sm,
  },
  heroTextBlock: {
    flex: 1,
    gap: theme.spacing.xs,
  },
  heroTitle: {
    lineHeight: 44,
    fontWeight: 800,
    color: theme.colors.secondary,
    fontSize: theme.fontSize["3xl"],
  },
  heroSubtitle: {
    fontWeight: 600,
    fontSize: theme.fontSize.lg,
    color: theme.colors.primaryForeground,
  },
  heroDescription: {
    lineHeight: 18,
    color: theme.colors.muted,
    marginTop: theme.spacing.xs,
    fontSize: theme.fontSize.sm,
  },
  imageCard: {
    width: 130,
    height: 130,
    borderRadius: theme.borderRadius.lg,
  },
  heroImage: {
    width: 130,
    height: 130,
    borderRadius: theme.borderRadius.lg,
  },
}));
