import React from "react";
import PropType from "prop-types";
import { useTheme, Text } from "react-native-elements";

const ErrorMessage = ({ error, visible }) => {
  if (!visible || !error) return null;

  const { theme } = useTheme();

  return <Text style={{ color: theme.colors.error }}>{error}</Text>;
};

ErrorMessage.propTypes = {
  error: PropType.string,
};

export default ErrorMessage;
