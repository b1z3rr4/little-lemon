import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import type React from "react";
import { Pressable } from "react-native";
import { useUnistyles } from "react-native-unistyles";
import { ThemeToggle } from "@/components/theme-toggle";

export default function TabLayout() {
  const { theme } = useUnistyles();

  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: theme.colors.background,
        },
        headerTintColor: theme.colors.foreground,
        headerTitleStyle: {
          color: theme.colors.foreground,
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.mutedForeground,
        tabBarStyle: {
          backgroundColor: theme.colors.background,
          borderTopColor: theme.colors.border,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerRight: () => (
            <Link
              asChild
              href="/modal"
            >
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    color={theme.colors.foreground}
                    name="info-circle"
                    size={25}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
          tabBarIcon: ({ color }) => (
            <TabBarIcon
              color={color}
              name="home"
            />
          ),
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerRight: () => <ThemeToggle />,
          tabBarIcon: ({ color }) => (
            <TabBarIcon
              color={color}
              name="cog"
            />
          ),
          title: "Settings",
        }}
      />
    </Tabs>
  );
}

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  color: string;
  name: React.ComponentProps<typeof FontAwesome>["name"];
}) {
  return (
    <FontAwesome
      size={28}
      style={{ marginBottom: -3 }}
      {...props}
    />
  );
}
