import { Image, Text, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { appEnvs } from "../config/envs";
import type { Dish } from "../interfaces/dish";

interface MenuItemProps {
  item: Dish;
}

export const MenuItem = ({ item }: MenuItemProps) => {
  const { description, image, name, price } = item;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{name}</Text>
        <Text numberOfLines={2}>{description}</Text>
        <Text>${price}</Text>
      </View>

      <Image
        style={styles.image}
        source={{
          uri: `${appEnvs.apiImgUrl}/${image}?raw=true`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create((_theme) => ({
  container: {
    gap: 12,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  content: {
    gap: 4,
    flex: 1,
    flexShrink: 1,
  },
  title: {
    fontWeight: 600,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 8,
    objectFit: "cover",
  },
}));
