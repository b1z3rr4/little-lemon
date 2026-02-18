import { Link } from "expo-router";
import { Image } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { useUser } from "../hooks/use-user";
import { AvatarPlaceholder } from "./avatar-placeholder";

export const ProfileLink = () => {
  const {
    user: { name, image },
  } = useUser();

  return (
    <Link
      href="/profile"
      style={styles.container}
    >
      {image?.length ? (
        <Image
          source={{ uri: image }}
          style={styles.avatar}
        />
      ) : (
        <AvatarPlaceholder
          name={name ?? ""}
          size="small"
        />
      )}
    </Link>
  );
};

const styles = StyleSheet.create((_theme) => ({
  container: {
    paddingHorizontal: 8,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    objectFit: "cover",
  },
}));
