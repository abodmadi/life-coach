import React from "react";
import { useField, ErrorMessage } from "formik";
export default function InputField({ placeholder, name,type }) {
   const [_, meta] = useField(); 
  return (
    <div className="p-4">
      <label
        htmlFor={name}
        className="text-sm font-medium text-gray-900 block mb-2"
      >
        Product Name
      </label>

      <input
        type={name}
        name={type}
        placeholder={placeholder}
       /*  {...props}
        {...field} */
        /*value={field.value}
         onClick={field.onChange}
        onBlur={field.onBlur} */
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
      />
      {meta.error && meta.touched && (
        <p className="text-red-500 text-xs italic">
          <ErrorMessage name={name} />
        </p>
      )}
    </div>
  );
}
