import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
function FormContainer({
  fields,
  initialValues,
  validationSchema,
  onSubmit,
}) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          {fields.map((field) => (
            <div key={field.name} className="mb-4">
              <label
                htmlFor={field.name}
                className="block text-sm font-bold mb-2"
              >
                {field.label}
              </label>
              <Field
                id={field.name}
                name={field.name}
                type={field.type}
                as={field.component || "input"}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder={field.placeholder}
              />

              <ErrorMessage
                name={field.name}
                component="div"
                className="text-red-500 text-xs italic"
              />
            </div>
          ))}
          <button
            className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            type="submit"
          >
            Save all
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormContainer;
