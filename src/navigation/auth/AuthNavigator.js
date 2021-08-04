import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ContractNavigator from "./ContractNavigator";
import ForgotPasswordScreen from "../../screens/auth/ForgotPasswordScreen";
import InitialScreen from "../../screens/auth/InitialScreen";
import LoginScreen from "../../screens/auth/LoginScreen";
import RegisterScreen from "../../screens/auth/RegisterScreen";
import routes from "../routes";

import colors from "../../config/colors";

const Stack = createStackNavigator();
const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={routes.INITIAL}
      component={InitialScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={routes.LOGIN}
      component={LoginScreen}
      options={{
        title: "Giriş Yapın",
        headerTitleStyle: {
          color: colors.secondary,
        },
      }}
    />
    <Stack.Screen
      name={routes.REGISTER}
      component={RegisterScreen}
      options={{ title: "Yeni Üye" }}
    />
    <Stack.Screen
      name={routes.FORGOT_PASSWORD}
      component={ForgotPasswordScreen}
      options={{ title: "Şifremi Unuttum" }}
    />
    <Stack.Screen
      name={routes.CONTRACTS}
      component={ContractNavigator}
      options={{ title: "Sözleşme Onay" }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
