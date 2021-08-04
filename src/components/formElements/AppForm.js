import React from "react";
import PropType from "prop-types";
import { Formik } from "formik";

const AppForm = ({
  initialValues,
  onSubmit,
  validationSchema,
  children,
  ...otherProps
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      {...otherProps}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

AppForm.propTypes = {
  initialValues: PropType.object.isRequired,
  onSubmit: PropType.func.isRequired,
  validationSchema: PropType.object,
  children: PropType.node.isRequired,
};

export default AppForm;
