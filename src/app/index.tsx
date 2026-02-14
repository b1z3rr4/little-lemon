import { useHeaderHeight } from "@react-navigation/elements";
import { Link } from "expo-router";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { Container } from "@/components/container";

export default function Onboarding() {
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
              <Text>Nome: </Text>
              <TextInput
                placeholder="John"
                style={styles.input}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text>Email: </Text>
              <TextInput
                placeholder="john@example.com"
                style={styles.input}
              />
            </View>
          </View>
        </View>
        <Link
          asChild
          href="/home"
        >
          <Pressable style={styles.button}>
            <Text>Próximo</Text>
          </Pressable>
        </Link>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create((_theme) => ({
  button: {
    alignItems: "center",
    alignSelf: "flex-end",
    backgroundColor: "#F4CE14",
    borderRadius: 8,
    fontSize: 14,
    justifyContent: "center",
    minHeight: 42,
    minWidth: 120,
    paddingHorizontal: 12,
    paddingVertical: 8,
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
    borderColor: "#333",
    borderRadius: 8,
    borderWidth: 1,
    color: "#333",
    fontSize: 14,
    opacity: 0.6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    width: "100%",
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
