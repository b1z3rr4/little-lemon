import { FontAwesome5 } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import type React from "react";
import { useUnistyles } from "react-native-unistyles";
import { ThemeToggle } from "@/components/theme-toggle";

function TabBarIcon(
  props: {
    name: React.ComponentProps<typeof FontAwesome5>["name"];
    color: string;
  } & React.ComponentProps<typeof FontAwesome5>
) {
  return (
    <FontAwesome5
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
          tabBarIcon: ({ color }) => (
            <TabBarIcon
              solid
              name="lemon"
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
          title: "Perfil",
        }}
      />
    </Tabs>
  );
}
