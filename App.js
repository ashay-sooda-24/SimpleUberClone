//react native defaults to flex box and is in COLOUMN
//yarn add tailwind-react-native-classnames
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
// import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

//simple stack that knows when i click back it should be removed from the stack. just simple stack for the purpose of navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Redux is like data layer from where data can be accessed from it from any components.

import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import { store } from "./store";
import MapScreen from "./screens/MapScreen";

// react native navigation is used for navigatin between screens

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* safe area provider is of icons  */}
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MapScreen"
              component={MapScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
