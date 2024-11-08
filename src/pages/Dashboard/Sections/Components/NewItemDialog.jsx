import { AdminDashboardContext } from "@/contexts/AdminDashboardContext";
import React, { useContext } from "react";
export default function NewItemDialog({header,form}) {
  const { isAddNewDialogClicked, setIsAddNewDialogClicked } = useContext(
    AdminDashboardContext
  );
  return (
    <div
      className={`${
        !isAddNewDialogClicked && "hidden"
      } h-full bg-gray-700/50 flex overflow-x-hidden overflow-y-auto fixed top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center h-modal sm:h-full`}
    >
      <div className="relative w-full max-w-2xl px-4 h-full md:h-auto">
        {/*  // Modal content // */}
        <div className="bg-white rounded-lg shadow relative">
          {/*  // Modal header // */}
          <div className="flex items-start justify-between p-5 border-b rounded-t">
            <h3 className="text-xl font-semibold">{header}</h3>
            <button
              type="button"
              onClick={()=>setIsAddNewDialogClicked(false)}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center"
              data-modal-toggle="add-product-modal"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          {/* // Modal body // */}
          <div className="p-6 space-y-6">
            <form action="#">
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
            </form>
          </div>
          {/* // Modal footer // */}
          <div className="p-6 border-t border-gray-200 rounded-b">
            <button
              className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              type="submit"
            >
              Add product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
