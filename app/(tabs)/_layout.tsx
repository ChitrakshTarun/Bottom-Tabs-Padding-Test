import React from "react";
import { withLayoutContext } from "expo-router";
import { createNativeBottomTabNavigator } from "@bottom-tabs/react-navigation";

export default function TabLayout() {
  const Tabs = withLayoutContext(createNativeBottomTabNavigator().Navigator);

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
        }}
      />
    </Tabs>
  );
}
