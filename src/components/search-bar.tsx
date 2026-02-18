import { FontAwesome5 } from "@expo/vector-icons";
import { TextInput, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

type SearchBarProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
};

export function SearchBar({
  value,
  onChangeText,
  placeholder = "Pesquisar...",
}: SearchBarProps) {
  return (
    <View style={styles.container}>
      <FontAwesome5
        name="search"
        size={18}
        style={styles.icon}
      />
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#999"
        returnKeyType="search"
      />
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 10,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 12,
    borderColor: theme.colors.border,
    backgroundColor: theme.colors.background,
  },
  icon: {
    marginRight: 8,
    color: theme.colors.foreground,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: theme.colors.foreground,
  },
}));
