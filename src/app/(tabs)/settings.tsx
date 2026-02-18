import { useHeaderHeight } from "@react-navigation/elements";
import { useRouter } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { AvatarPlaceholder } from "@/components/avatar-placeholder";
import { Container } from "@/components/container";
import { SettingsRow, SettingsSection } from "@/components/section";
import { useUser } from "@/hooks/use-user";

export default function TabTwoScreen() {
  const headerHeight = useHeaderHeight();
  const router = useRouter();

  const {
    user: { name, email, image },
    logout,
  } = useUser();

  return (
    <Container safeArea={headerHeight === 0}>
      <View style={styles.content}>
        <View style={styles.profileCard}>
          {image?.length ? (
            <Image
              source={{ uri: image }}
              style={styles.avatar}
            />
          ) : (
            <AvatarPlaceholder name={name ?? ""} />
          )}
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>{name || "Usuário"}</Text>
            <Text style={styles.profileEmail}>{email || "—"}</Text>
          </View>
        </View>

        <SettingsSection title="Conta">
          <SettingsRow
            label="Informações pessoais"
            onPress={() => {
              router.push("/profile");
            }}
          />
        </SettingsSection>
        <Pressable
          style={({ pressed }) => [
            styles.logoutButton,
            pressed && styles.logoutButtonPressed,
          ]}
          onPress={() => {
            logout();
            router.dismissAll();
            router.replace("/");
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
