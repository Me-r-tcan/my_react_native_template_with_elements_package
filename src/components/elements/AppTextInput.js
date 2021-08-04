import React from "react";
import { View, TextInput, StyleSheet, Platform } from "react-native";
import PropType from "prop-types";

import defaultStyles from "../../config/styles";

AppTextInput.defaultProps = {
  size: 20,
};

function AppTextInput({
  size,
  width = "100%",
  backgroundColor = "light",
  borderRadius = 25,
  ...otherProps
}) {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: defaultStyles.colors[backgroundColor] },
        { width },
        { borderRadius },
      ]}
    >
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={[defaultStyles.text, styles.textInput]}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    marginVertical: 10,
  },
  icon: {
    marginHorizontal: Platform.select({
      android: 6,
      ios: 2,
    }),
    alignSelf: "center",
  },
  textInput: {
    width: "95%",
  },
});

AppTextInput.propTypes = {
  width: PropType.string,
};

export default AppTextInput;
