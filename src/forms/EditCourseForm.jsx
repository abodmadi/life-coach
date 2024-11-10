import FormContainer from "@/components/FormContainer";
import React from "react";
import InputField from "./Input";
import { valSm } from "@/utils/validationSchema";

export default function EditCourseForm() {
  return (
    <FormContainer
      initialValues={{ pname: "" }}
      validationSchema={valSm}
      onSubmit={(value) => console.log(value)}
    >
      <InputField placeholder={"name product"} name={"pname"} type={"text"}  />
    </FormContainer>
  );
}

/*
            <FormContainer initialValues={{ name:"",des:"", }} validationSchema={{  }} onSubmit={()=>{}}>

                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="product-name"
                      className="text-sm font-medium text-gray-900 block mb-2"
                    >
                      Product Name
                    </label>
                    
                    <input
                      type="text"
                      name="product-name"
                      id="product-name"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      placeholder="Apple Imac 27”"
                      required=""
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="category"
                      className="text-sm font-medium text-gray-900 block mb-2"
                    >
                      Category
                    </label>
                    <input
                      type="text"
                      name="category"
                      id="category"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      placeholder="Electronics"
                      required=""
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="brand"
                      className="text-sm font-medium text-gray-900 block mb-2"
                    >
                      Brand
                    </label>
                    <input
                      type="text"
                      name="brand"
                      id="brand"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      placeholder="Apple"
                      required=""
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="price"
                      className="text-sm font-medium text-gray-900 block mb-2"
                    >
                      Price
                    </label>
                    <input
                      type="number"
                      name="price"
                      id="price"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      placeholder="$2300"
                      required=""
                    />
                  </div>
                  <div className="col-span-full">
                    <label
                      htmlFor="product-details"
                      className="text-sm font-medium text-gray-900 block mb-2"
                    >
                      Product Details
                    </label>
                    <textarea
                      id="product-details"
                      rows={6}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                      placeholder="e.g. 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, Ram 16 GB DDR4 2300Mhz"
                      defaultValue={""}
                    />
                  </div>
                </div>
            </FormContainer>
*/
