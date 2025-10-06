import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs } from "expo-router";
import React from "react";
import { Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabsLayout() {
  const width = Dimensions.get("screen").width;

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["bottom"]}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#ff7514",
          tabBarLabelPosition: "below-icon",
          tabBarStyle: {
            height: "8%",
            maxHeight: 80,
            paddingBottom: 6,
          },
          tabBarLabelStyle: {
            fontSize: Math.round(13 + (width * 0.33) / 100),
          },
        }}
      >
        <Tabs.Screen
          name="index/index"
          options={{
            title: "Search",
            tabBarIcon: ({ color }) => (
              <Fontisto name="search" size={23} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="scan"
          options={{
            title: "Scan",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="cube-scan"
                size={26}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}
