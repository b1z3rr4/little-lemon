import { useHeaderHeight } from "@react-navigation/elements";
import { Link } from "expo-router";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { Container } from "@/components/container";

export default function Login() {
  const headerHeight = useHeaderHeight();

  return (
    <Container safeArea={headerHeight === 0}>
      <View style={styles.content}>
        <View style={styles.logoContent}>
          <Image
            source={require("../../assets/images/logo-square.png")}
            style={styles.image}
          />
          <View style={styles.inputGroup}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Nome: </Text>
              <TextInput
                placeholder="John"
                style={styles.input}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Email: </Text>
              <TextInput
                placeholder="john@example.com"
                style={styles.input}
              />
            </View>
          </View>
        </View>
        <Link
          asChild
          href="/(tabs)"
        >
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Próximo</Text>
          </Pressable>
        </Link>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create((theme) => ({
  button: {
    minHeight: 42,
    minWidth: 120,
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: "center",
    paddingHorizontal: 12,
    alignSelf: "flex-end",
    justifyContent: "center",
    backgroundColor: theme.colors.primary,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 600,
    color: theme.colors.primaryForeground,
  },
  content: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
    padding: 48,
  },
  image: {
    alignSelf: "center",
    height: 200,
    objectFit: "contain",
    width: 200,
  },
  input: {
    opacity: 0.6,
    width: "100%",
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    color: theme.colors.foreground,
    borderColor: theme.colors.border,
  },
  inputLabel: {
    color: theme.colors.foreground,
    fontSize: 14,
  },
  inputContainer: {
    gap: 4,
    width: "100%",
  },
  inputGroup: {
    gap: 12,
  },
  logoContent: {
    flex: 1,
    gap: 24,
    justifyContent: "center",
    width: "100%",
  },
}));
