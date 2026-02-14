import { useHeaderHeight } from "@react-navigation/elements";
import { Checkbox } from "expo-checkbox";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { Container } from "@/components/container";

export default function Profile() {
  const headerHeight = useHeaderHeight();

  return (
    <Container safeArea={headerHeight === 0}>
      <View style={styles.content}>
        <View style={styles.section}>
          <Text>Perfil</Text>
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <Image
              source={require("../../assets/images/profile.png")}
              style={styles.image}
            />
            <Pressable style={styles.button}>
              <Text>Alterar</Text>
            </Pressable>
            <Pressable style={styles.button}>
              <Text>Remover</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Nome: </Text>
          <TextInput
            placeholder="John"
            style={styles.input}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Email: </Text>
          <TextInput
            placeholder="john@example"
            style={styles.input}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Número: </Text>
          <TextInput
            placeholder="55 11 12345 6789"
            style={styles.input}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Email notifications</Text>
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <Checkbox style={styles.checkbox} />
            <Text>Status dos pedidos</Text>
          </View>
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <Checkbox style={styles.checkbox} />
            <Text>Mudanças de senha</Text>
          </View>
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <Checkbox style={styles.checkbox} />
            <Text>Ofertas especiais</Text>
          </View>
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <Checkbox style={styles.checkbox} />
            <Text>Newsletter</Text>
          </View>
        </View>

        <Pressable style={styles.button}>
          <Text>Sair</Text>
        </Pressable>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create((theme) => ({
  content: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
    padding: 12,
    backgroundColor: theme.colors.background,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#F4CE14",
    borderRadius: 8,
    fontSize: 14,
    justifyContent: "center",
    minHeight: 42,
    minWidth: 120,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  checkbox: {
    marginRight: 8,
  },
  image: {
    alignSelf: "center",
    borderRadius: "100%",
    height: 120,
    objectFit: "contain",
    width: 120,
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
  label: {
    fontSize: 15,
  },
  section: {
    gap: 4,
    width: "100%",
  },
}));
