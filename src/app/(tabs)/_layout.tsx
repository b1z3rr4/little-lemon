import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import type React from "react";
import { Pressable } from "react-native";
import { useUnistyles } from "react-native-unistyles";
import { ThemeToggle } from "@/components/theme-toggle";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return (
    <FontAwesome
      size={18}
      style={{ marginBottom: -3 }}
      {...props}
    />
  );
}

export default function TabLayout() {
  const { theme } = useUnistyles();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.mutedForeground,
        tabBarStyle: {
          backgroundColor: theme.colors.background,
          borderTopColor: theme.colors.border,
        },
        headerStyle: {
          backgroundColor: theme.colors.background,
        },
        headerTitleStyle: {
          color: theme.colors.foreground,
        },
        headerTintColor: theme.colors.foreground,
        headerShown: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerRight: () => (
            <Link
              asChild
              href="/profile"
            >
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    color={theme.colors.foreground}
                    name="user-circle"
                    size={25}
                    style={{
                      marginRight: 15,
                      opacity: pressed ? 0.5 : 1,
                    }}
                  />
                )}
              </Pressable>
            </Link>
          ),
          tabBarIcon: ({ color }) => (
            <TabBarIcon
              name="lemon-o"
              color={color}
            />
          ),
          title: "Menu",
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerRight: () => <ThemeToggle />,
          tabBarIcon: ({ color }) => (
            <TabBarIcon
              name="cog"
              color={color}
            />
          ),
          title: "Settings",
        }}
      />
    </Tabs>
  );
}
