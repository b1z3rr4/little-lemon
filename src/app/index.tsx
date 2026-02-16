import { Link } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native-unistyles";

export default function Onboarding() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>Little Lemon</Text>
          <Text style={styles.subtitle}>Chicago</Text>
        </View>

        <View>
          <Image
            style={styles.image}
            source={require("../../assets/images/banner.png")}
          />
        </View>

        <Link
          asChild
          href="/login"
        >
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: { flex: 1, backgroundColor: "#495E57" },
  content: {
    flex: 1,
    padding: 48,
    alignItems: "center",
    backgroundColor: "#495E57",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 52,
    fontWeight: 700,
  },
  subtitle: {
    fontSize: 24,
  },
  image: {
    width: 500,
    height: 500,
    objectFit: "fill",
  },
  button: {
    minHeight: 42,
    width: "100%",
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: "center",
    paddingHorizontal: 12,
    justifyContent: "center",
    backgroundColor: theme.colors.primary,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 600,
    color: theme.colors.primaryForeground,
  },
}));
