import { Form, Formik, Field, useFormikContext, FormikProvider } from "formik";
import React from "react";

export default function FormContainer({
  children,
  initialValues,
  onSubmit,
  validationSchema,
}) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <Form>{children}</Form>}
    </Formik>
  );
}
