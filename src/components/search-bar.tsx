import { FontAwesome5 } from "@expo/vector-icons";
import { StyleSheet, TextInput, View } from "react-native";

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

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  icon: {
    marginRight: 8,
    color: "#555",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
});
