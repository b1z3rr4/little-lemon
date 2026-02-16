import { Text, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export const AvatarPlaceholder = ({ name }: { name: string }) => {
  const initials = name
    .trim()
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");

  return (
    <View style={styles.avatarPlaceholder}>
      <Text style={styles.avatarInitials}>{initials || "?"}</Text>
    </View>
  );
};

const styles = StyleSheet.create((theme) => ({
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
}));
