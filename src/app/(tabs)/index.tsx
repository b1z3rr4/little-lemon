import { useQuery } from "@tanstack/react-query";
import { FlatList, Text, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { Container } from "@/components/container";
import { MenuItem } from "../../components/menu-item";
import { appEnvs } from "../../config/envs";
import type { Dish } from "../../interfaces/dish";

export default function Home() {
  const { data } = useQuery<{ menu: Dish[] }>({
    queryKey: ["dishes"],
    queryFn: async () => {
      const response = await fetch(`${appEnvs.apiUrl}/capstone.json`);
      const data = await response.json();
      return data;
    },
  });

  return (
    <Container>
      <View style={styles.content}>
        <FlatList
          ListHeaderComponent={() => <Text style={styles.title}>Menu</Text>}
          data={data?.menu ?? []}
          renderItem={(item) => <MenuItem item={item.item} />}
        />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create((theme) => ({
  content: {
    flex: 1,
    padding: 12,
  },
  title: {
    color: theme.colors.foreground,
    fontSize: 20,
    fontWeight: "bold",
  },
}));
