import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/home";
import ExploreScreen from "../screens/explore";
import CreateScreen from "../screens/create";
import SubscriptionsScreen from "../screens/subscriptions";
import LibraryScreen from "../screens/library";

const HomeStack = createStackNavigator();

export function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="YouTube" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

const ExploreStack = createStackNavigator();

export function ExploreStackScreen() {
  return (
    <ExploreStack.Navigator>
      <ExploreStack.Screen name="YouTube" component={ExploreScreen} />
    </ExploreStack.Navigator>
  );
}

const CreateStack = createStackNavigator();

export function CreateStackScreen() {
  return (
    <CreateStack.Navigator>
      <CreateStack.Screen name="YouTube" component={CreateScreen} />
    </CreateStack.Navigator>
  );
}

const SubscriptionsStack = createStackNavigator();

export function SubscriptionsStackScreen() {
  return (
    <SubscriptionsStack.Navigator>
      <SubscriptionsStack.Screen
        name="YouTube"
        component={SubscriptionsScreen}
      />
    </SubscriptionsStack.Navigator>
  );
}

const LibraryStack = createStackNavigator();

export function LibraryStackScreen() {
  return (
    <LibraryStack.Navigator>
      <LibraryStack.Screen name="YouTube" component={LibraryScreen} />
    </LibraryStack.Navigator>
  );
}
