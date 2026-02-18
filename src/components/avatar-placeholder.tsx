import { Text, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export const AvatarPlaceholder = ({
  name,
  size = "medium",
}: {
  name: string;
  size?: "small" | "medium";
}) => {
  const initials = name
    .trim()
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");

  const sizeStyles =
    size === "medium" ? styles.avatarMediumSize : styles.avatarSmallSize;

  const textSizeStyles =
    size === "medium" ? { fontSize: 20 } : { fontSize: 10 };

  return (
    <View style={[styles.avatarPlaceholder, sizeStyles]}>
      <Text style={[styles.avatarInitials, textSizeStyles]}>
        {initials || "?"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create((theme) => ({
  avatarPlaceholder: {
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarMediumSize: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  avatarSmallSize: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  avatarInitials: {
    color: theme.colors.primaryForeground,
    fontSize: 20,
    fontWeight: 700,
    letterSpacing: 1,
  },
}));
