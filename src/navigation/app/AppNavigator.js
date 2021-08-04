import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import routes from "../routes";

const Stack = createStackNavigator();
const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={routes.LandingScreen}
      component={LandingScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
