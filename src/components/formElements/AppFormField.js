import React from "react";
import PropType from "prop-types";
import { useFormikContext } from "formik";

import AppTextInput from "../elements/AppTextInput";
import ErrorMessage from "./ErrorMessage";

const AppFormField = ({
  name,
  width = "100%",
  backgroundColor,
  ...otherProps
}) => {
  const { setFieldTouched, setFieldValue, errors, touched, values } =
    useFormikContext();

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        width={width}
        backgroundColor={backgroundColor}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

AppFormField.propTypes = {
  name: PropType.string,
  width: PropType.string,
};

export default AppFormField;
