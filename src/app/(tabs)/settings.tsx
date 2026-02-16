import { useRouter } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { Container } from "@/components/container";
import { AvatarPlaceholder } from "../../components/avatar-placeholder";
import { SettingsRow, SettingsSection } from "../../components/section";
import { authStore } from "../../stores/auth";

export default function TabTwoScreen() {
  const router = useRouter();

  const hasProfileImage = false;

  const authData = authStore.get();
  const userName = authData?.name ?? "";
  const userEmail = authData?.email ?? "";

  return (
    <Container>
      <View style={styles.content}>
        <View style={styles.profileCard}>
          {hasProfileImage ? (
            <Image
              source={require("../../../assets/images/profile.png")}
              style={styles.avatar}
            />
          ) : (
            <AvatarPlaceholder name={userName} />
          )}
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>{userName || "Usuário"}</Text>
            <Text style={styles.profileEmail}>{userEmail || "—"}</Text>
          </View>
        </View>

        <SettingsSection title="Conta">
          <SettingsRow
            label="Meu Perfil"
            onPress={() => {
              router.push("/profile");
            }}
          />
          <SettingsRow
            label="Endereços"
            onPress={() => {}}
          />
          <SettingsRow
            label="Métodos de pagamento"
            onPress={() => {}}
          />
          <SettingsRow
            label="Alterar senha"
            onPress={() => {}}
            isLast
          />
        </SettingsSection>
        <Pressable
          style={({ pressed }) => [
            styles.logoutButton,
            pressed && styles.logoutButtonPressed,
          ]}
          onPress={() => {
            authStore.delete();
            router.replace("/login");
          }}
        >
          <Text style={styles.logoutText}>Sair da conta</Text>
        </Pressable>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create((theme) => ({
  content: {
    flex: 1,
    gap: 24,
    padding: 12,
  },
  profileCard: {
    gap: 12,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  profileCardPressed: {
    opacity: 0.7,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    objectFit: "cover",
  },
  avatarPlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarInitials: {
    color: theme.colors.primaryForeground,
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 1,
  },
  profileInfo: {
    flex: 1,
    gap: 2,
  },
  profileName: {
    color: theme.colors.foreground,
    fontSize: 16,
    fontWeight: "600",
  },
  profileEmail: {
    color: theme.colors.foreground,
    fontSize: 13,
    opacity: 0.5,
  },
  profileEditHint: {
    color: theme.colors.primary,
    fontSize: 12,
    marginTop: 4,
  },
  logoutButton: {
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
  },
  logoutButtonPressed: {
    opacity: 0.6,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: "600",
    color: theme.colors.destructive,
  },
}));
