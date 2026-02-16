import { Pressable, Text, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export const SettingsRow = ({
  label,
  onPress,
  isLast = false,
}: {
  label: string;
  onPress?: () => void;
  value?: string;
  isLast?: boolean;
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.row,
        isLast && styles.rowLast,
        pressed && styles.rowPressed,
      ]}
    >
      <Text style={styles.rowLabel}>{label}</Text>
    </Pressable>
  );
};

export const SettingsSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.sectionCard}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create((theme) => ({
  section: {
    gap: 6,
  },
  sectionTitle: {
    color: theme.colors.foreground,
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 0.8,
    opacity: 0.45,
    textTransform: "uppercase",
    paddingHorizontal: 4,
  },
  sectionCard: {
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 4,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  rowLast: {
    borderBottomWidth: 0,
  },
  rowPressed: {
    opacity: 0.6,
  },
  rowLabel: {
    color: theme.colors.foreground,
    fontSize: 16,
  },
  rowRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  rowValue: {
    color: theme.colors.foreground,
    fontSize: 14,
    opacity: 0.4,
  },
  rowChevron: {
    color: theme.colors.foreground,
    fontSize: 20,
    opacity: 0.3,
    lineHeight: 22,
  },
}));
