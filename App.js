import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { useDispatch, useSelector, Provider } from "react-redux";
import FlashMessage from "react-native-flash-message";
import { ThemeProvider } from "react-native-elements";

import configureStore from "./src/store/configuration/configureStore";
import authStorage from "./src/auth/storage";
import AuthNavigator from "./src/navigation/auth/AuthNavigator";
import AppNavigator from "./src/navigation/app/AppNavigator";
import navigationTheme from "./src/navigation/navigationTheme";
import { authRestored } from "./src/store/auth";
import theme from "./src/config/theme";

const customFonts = {
  "Ubuntu-Bold": require("./src/assets/fonts/Ubuntu-Bold.ttf"),
  "Ubuntu-Light": require("./src/assets/fonts/Ubuntu-Light.ttf"),
  "Ubuntu-Regular": require("./src/assets/fonts/Ubuntu-Regular.ttf"),
  "Ubuntu-Medium": require("./src/assets/fonts/Ubuntu-Medium.ttf"),
};

export default function AppWrapper() {
  const store = configureStore();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
        <FlashMessage position='top' duration={2250} />
      </ThemeProvider>
    </Provider>
  );
}

const App = () => {
  const user = useSelector((state) => state.entities.auth.user);

  const dispatch = useDispatch();
  const [isReady, setIsReady] = useState(false);

  const restoreToken = async () => {
    const token = await authStorage.getToken();
    if (token) dispatch(authRestored(token));
  };

  const restoreInfo = async () => {
    restoreToken();
    await Font.loadAsync(customFonts);
  };

  if (!isReady)
    return (
      <AppLoading
        startAsync={restoreInfo}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );

  let navigator = null;
  if (user) {
    navigator = <AppNavigator />;
  } else {
    navigator = <AuthNavigator />;
  }

  return (
    <NavigationContainer theme={navigationTheme}>
      {navigator}
    </NavigationContainer>
  );
};
