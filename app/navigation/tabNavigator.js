import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from "react-native-vector-icons/AntDesign";
import Foundation from "react-native-vector-icons/Foundation";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import {
  HomeStackScreen,
  ExploreStackScreen,
  CreateStackScreen,
  SubscriptionsStackScreen,
  LibraryStackScreen,
} from "./stackNavigator";

const Tab = createBottomTabNavigator();

export default function tabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "black",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Foundation name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreStackScreen}
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="explore" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Create"
        component={CreateStackScreen}
        options={{
          tabBarLabel: "Create",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="pluscircleo" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Subscriptions"
        component={SubscriptionsStackScreen}
        options={{
          tabBarLabel: "Subscriptions",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="subscriptions" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={LibraryStackScreen}
        options={{
          tabBarLabel: "Library",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="video-library" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
