import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { Container } from "@/components/container";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <Container>
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.emoji}>🤔</Text>
            <Text style={styles.title}>Page Not Found</Text>
            <Text style={styles.description}>
              Sorry, the page you're looking for doesn't exist.
            </Text>
            <Link
              href="/"
              style={styles.button}
            >
              <Text style={styles.buttonText}>Go to Home</Text>
            </Link>
          </View>
        </View>
      </Container>
    </>
  );
}

const styles = StyleSheet.create((theme) => ({
  button: {
    backgroundColor: `${theme.colors.primary}1A`,
    borderRadius: theme.borderRadius.lg,
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.sm + 4,
  },
  buttonText: {
    color: theme.colors.primary,
    fontWeight: "500",
  },
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    padding: theme.spacing.lg,
  },
  content: {
    alignItems: "center",
  },
  description: {
    color: theme.colors.mutedForeground,
    marginBottom: theme.spacing.xl,
    maxWidth: 280,
    textAlign: "center",
  },
  emoji: {
    fontSize: 64,
    marginBottom: theme.spacing.md,
  },
  title: {
    color: theme.colors.foreground,
    fontSize: theme.fontSize["2xl"],
    fontWeight: "bold",
    marginBottom: theme.spacing.sm,
    textAlign: "center",
  },
}));
