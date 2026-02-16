import { useHeaderHeight } from "@react-navigation/elements";
import { useQuery } from "@tanstack/react-query";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { Container } from "../../components/container";
import { MenuItem } from "../../components/menu-item";
import { appEnvs } from "../../config/envs";
import { CATEGORIES, dishes } from "../../database/dishes";
import type { Dish } from "../../interfaces/dish";

export default function Home() {
  const headerHeight = useHeaderHeight();

  const [searches, setSearches] = useState<string[]>([]);

  const { data } = useQuery<{ menu: Dish[] }>({
    queryKey: ["dishes"],
    queryFn: async () => {
      const response = await fetch(`${appEnvs.apiUrl}/capstone.json`);
      const data = await response.json();
      return data;
    },
    initialData: () => {
      return { menu: dishes.getAll() };
    },
  });

  const dishesData = useMemo(() => {
    if (!searches.length) return dishes.getAll();
    return dishes.getByFilters("category", searches);
  }, [searches]);

  const handleFilter = useCallback(
    (value: string) => {
      const sanitize = value.toLowerCase();

      if (searches.includes(sanitize)) {
        setSearches((prev) => prev.filter((item) => item !== sanitize));
        return;
      }

      setSearches((prev) => [...prev, sanitize]);
    },
    [searches]
  );

  const isActive = useCallback(
    (value: string) => {
      const sanitize = value.toLowerCase();
      return searches.includes(sanitize);
    },
    [searches]
  );

  useEffect(() => {
    dishes.insertAll(data.menu);
  }, [data]);

  return (
    <Container safeArea={headerHeight === 0}>
      <View style={styles.container}>
        <View>
          <FlatList
            horizontal
            data={CATEGORIES}
            renderItem={(item) => (
              <Pressable
                style={[styles.chip, isActive(item.item) && styles.chipActive]}
                onPress={() => {
                  handleFilter(item.item);
                }}
              >
                <Text style={styles.chipText}>{item.item}</Text>
              </Pressable>
            )}
          />
        </View>

        <FlatList
          data={dishesData ?? []}
          renderItem={(item) => <MenuItem item={item.item} />}
        />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: theme.colors.background,
  },
  chip: {
    margin: 4,
    borderRadius: 24,
    paddingVertical: 8,
    alignItems: "center",
    paddingHorizontal: 12,
    alignSelf: "flex-start",
    justifyContent: "center",
    backgroundColor: theme.colors.primary,
  },
  chipActive: {
    backgroundColor: theme.colors.success,
  },
  chipText: {
    color: theme.colors.primaryForeground,
  },
}));
