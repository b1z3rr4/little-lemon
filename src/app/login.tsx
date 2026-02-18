import { useHeaderHeight } from "@react-navigation/elements";
import { useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { Container } from "@/components/container";
import { useUser } from "@/hooks/use-user";

export default function Login() {
  const headerHeight = useHeaderHeight();

  const router = useRouter();

  const { login } = useUser();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submitDisabled = !name.length || !email.length;

  const handleSubmit = useCallback(() => {
    if (!submitDisabled) {
      login({ name, email });
      router.navigate("/(tabs)/home");
    }
  }, [name, email, submitDisabled, router, login]);

  return (
    <Container safeArea={headerHeight === 0}>
      <View style={styles.content}>
        <View style={styles.logoContent}>
          <Image
            style={styles.image}
            source={require("../../assets/images/logo-square.png")}
          />
          <View style={styles.inputGroup}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Nome: </Text>
              <TextInput
                value={name}
                onChangeText={(text) => {
                  setName(text);
                }}
                placeholder="John"
                style={styles.input}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Email: </Text>
              <TextInput
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                }}
                placeholder="john@example.com"
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
          </View>
        </View>

        <Pressable
          style={[styles.button, submitDisabled && styles.buttonDisabled]}
          onPress={handleSubmit}
        >
          <Text
            style={[
              styles.buttonText,
              submitDisabled && styles.buttonTextDisabled,
            ]}
          >
            Próximo
          </Text>
        </Pressable>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create((theme) => ({
  button: {
    minHeight: 42,
    width: "100%",
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: "center",
    paddingHorizontal: 12,
    alignSelf: "flex-end",
    justifyContent: "center",
    backgroundColor: theme.colors.primary,
  },
  buttonDisabled: {
    backgroundColor: theme.colors.muted,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 600,
    color: theme.colors.primaryForeground,
  },
  buttonTextDisabled: {
    color: theme.colors.mutedForeground,
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
