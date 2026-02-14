import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { Container } from "@/components/container";

export default function TabTwoScreen() {
  return (
    <Container>
      <View style={styles.content}>
        <Text style={styles.title}>This is the settings screen</Text>
        <Link
          asChild
          href="/profile"
        >
          <Pressable>
            <Text>Complete seu perfil</Text>
          </Pressable>
        </Link>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create((theme) => ({
  content: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  title: {
    color: theme.colors.foreground,
    fontSize: 20,
    fontWeight: "bold",
  },
}));
