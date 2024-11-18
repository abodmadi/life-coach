import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  useFormik,
} from "formik";
import ButtonLoader from "./ButtonLoader";
import { deleteIcon } from "@/constants";
//import { useState,useEffect } from "react";
function FormContainer({
  fields,
  initialValues,
  validationSchema,
  onSubmit,
  isLoading,
  buttonText,
}) {
  /*   const [inputs, setInputs] = useState(fields.);

  const handleChange = (index, event) => {
    const newInputs = inputs.map((input, i) =>
      i === index ? { value: event.target.value } : input
    );
    setInputs(newInputs);
  };

  const handleAddInput = () => {
    setInputs([...inputs, { value: "" }]);
  };

  const handleRemoveInput = (index) => {
    const newInputs = inputs.filter((_, i) => i !== index);
    setInputs(newInputs);
  }; */
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, setFieldValue, values }) => (
        <Form onSubmit={handleSubmit}>
          {fields.map((field) =>
            field.data != "image" ? (
              field.data != "videos" ? (
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
              ) : (
                <FieldArray name={field.name}>
                  {({ push, remove }) => (
                    <div>
                      {values?.videos?.map((_, index) => (
                        <div key={index} className="mb-4">
                          <div className="flex justify-between items-end w-full gap-x-4">
                            <div className="w-full">
                              <label
                                htmlFor={`${field.name}.${index}`}
                                className="block text-sm font-bold mb-2"
                              >
                                {field.label} {index + 1}
                              </label>
                              <Field
                                name={`${field.name}.${index}`}
                                type={field.type}
                                placeholder={field.placeholder}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              />
                              <ErrorMessage
                                name={`${field.name}.${index}`}
                                component="div"
                                className="text-red-500 text-xs italic"
                              />
                            </div>
                            {index > 0 && (
                              <button
                                type="button"
                                className="text-red-500 mt-2"
                                onClick={() => remove(index)}
                              >
                                <img src={deleteIcon} className="size-10" />
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                      <button
                        type="button"
                        className="flex items-center gap-4 border-2 border-gray-200 rounded-lg p-2 hover:bg-gray-200"
                        onClick={() => push("")}
                      >
                        <svg
                          className="-ml-1 mr-2 h-6 w-6"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <p className=""> إضافة رابط فيديو جديد</p>
                      </button>
                    </div>
                  )}
                </FieldArray>
              )
            ) : (
              <div key={field.name} className="flex flex-col mb-6 gap-y-2">
                <label className="block text-sm font-bold mb-2">
                  {field.label}
                </label>
                <div className="max-w-sm h-full py-4 bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg flex justify-center text-center cursor-pointer">
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = (e) => {
                          setFieldValue(field.name, e.target.result);
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                  />
                  {values.coverImage ? (
                    <label htmlFor={field.name}>
                      <img
                        className="object-cover w-full max-w-xs cursor-pointer"
                        src={values.coverImage}
                        alt="cover image"
                      />
                    </label>
                  ) : (
                    <label htmlFor={field.name} className="cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-8 h-8 text-gray-700 mx-auto mb-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                        />
                      </svg>
                      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">
                        Upload picture
                      </h5>
                      <p className="font-normal text-sm text-gray-400 md:px-6">
                        Choose photo size should be less than{" "}
                        <b className="text-gray-600">2mb</b>
                      </p>
                      <p className="font-normal text-sm text-gray-400 md:px-6">
                        and should be in{" "}
                        <b className="text-gray-600">JPG, PNG, or GIF</b>{" "}
                        format.
                      </p>
                      <span
                        id="filename"
                        className="text-gray-500 bg-gray-200 z-50"
                      />
                    </label>
                  )}
                </div>
              </div>
            )
          )}
          <button
            className="flex gap-x-2 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            type="submit"
          >
            {isLoading && <ButtonLoader />}
            {buttonText}
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormContainer;

/*

                <div>
                  {field?.videos?.map((input, index) => (
                    <div key={index}>
                      <div className="mb-4">
                        <label
                          htmlFor={field.name}
                          className="block text-sm font-bold mb-2"
                        >
                          {field.label} {index}
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
                      {index > 2 && (
                        <button onClick={() => handleRemoveInput(index)}>
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                  <button onClick={handleAddInput}>Add Input</button>
                </div>
*/