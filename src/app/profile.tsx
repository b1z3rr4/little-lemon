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
              <Text style={styles.buttonText}>Alterar</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.inputLabel}>Nome: </Text>
          <TextInput
            placeholder="John"
            style={styles.input}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.inputLabel}>Email: </Text>
          <TextInput
            placeholder="john@example"
            style={styles.input}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.inputLabel}>Número: </Text>
          <TextInput
            placeholder="55 11 12345 6789"
            style={styles.input}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Email notifications</Text>
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <Checkbox style={styles.checkbox} />
            <Text style={styles.inputLabel}>Status dos pedidos</Text>
          </View>
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <Checkbox style={styles.checkbox} />
            <Text style={styles.inputLabel}>Mudanças de senha</Text>
          </View>
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <Checkbox style={styles.checkbox} />
            <Text style={styles.inputLabel}>Ofertas especiais</Text>
          </View>
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <Checkbox style={styles.checkbox} />
            <Text style={styles.inputLabel}>Newsletter</Text>
          </View>
        </View>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Sair</Text>
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
    borderColor: theme.colors.border,
    borderRadius: 8,
    borderWidth: 1,
    color: theme.colors.foreground,
    opacity: 0.6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    width: "100%",
  },
  inputLabel: {
    color: theme.colors.foreground,
    fontSize: 14,
  },
  sectionLabel: {
    fontSize: 15,
  },
  section: {
    gap: 4,
    width: "100%",
  },
}));
