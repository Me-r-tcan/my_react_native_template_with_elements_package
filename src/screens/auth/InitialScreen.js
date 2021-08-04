import React from "react";
import { Text } from "react-native";
import { useTheme, makeStyles } from "react-native-elements";

import { Screen } from "../../components/elements";

const InitialScreen = () => {
  const styles = useStyles();
  const { theme } = useTheme();

  return (
    <Screen style={styles.container}>
      <Text style={{ color: theme.colors.primary }}>InitialScreen</Text>
    </Screen>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.colors.success,
  },
  text: {
    color: theme.colors.primary,
  },
}));

export default InitialScreen;
