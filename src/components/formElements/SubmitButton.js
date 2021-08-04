import React from "react";
import PropType from "prop-types";
import { Button } from "react-native-elements";

import { useFormikContext } from "formik";

const SubmitButton = ({ title, ...otherProps }) => {
  const { handleSubmit } = useFormikContext();

  return <Button title={title} onPress={handleSubmit} {...otherProps} />;
};

SubmitButton.propTypes = {
  title: PropType.string.isRequired,
};

export default SubmitButton;
