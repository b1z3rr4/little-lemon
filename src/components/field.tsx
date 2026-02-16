import { Text, TextInput, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export const Field = ({
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType,
  autoCapitalize,
  autoCorrect,
  editable = true,
}: {
  label: string;
  value: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  keyboardType?: React.ComponentProps<typeof TextInput>["keyboardType"];
  autoCapitalize?: React.ComponentProps<typeof TextInput>["autoCapitalize"];
  autoCorrect?: boolean;
  editable?: boolean;
}) => {
  return (
    <View style={styles.field}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={styles.input.color + "55"}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        editable={editable}
        style={[styles.input, !editable && styles.inputDisabled]}
      />
    </View>
  );
};

const styles = StyleSheet.create((theme) => ({
  field: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    gap: 4,
  },
  fieldLabel: {
    color: theme.colors.foreground,
    fontSize: 11,
    fontWeight: "600",
    letterSpacing: 0.6,
    opacity: 0.45,
    textTransform: "uppercase",
  },
  input: {
    color: theme.colors.foreground,
    fontSize: 15,
    paddingVertical: 2,
  },
  inputDisabled: {
    opacity: 0.4,
  },
}));
