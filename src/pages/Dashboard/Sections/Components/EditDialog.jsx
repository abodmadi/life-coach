import { useContext } from "react";
import { AdminDashboardContext } from "@/contexts/AdminDashboardContext";
export default function EditDialog({
  children,
  header,
}) {
  const {
    isUpdateDialogClicked,
    setIsUpdateDialogClicked,
   
  } = useContext(AdminDashboardContext);

  return (
    <div
      className={`${
        !isUpdateDialogClicked && "hidden"
      } h-full bg-gray-700/50 flex overflow-x-hidden overflow-y-auto fixed top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center h-modal sm:h-full`}
    >
      <div className="relative w-full max-w-2xl px-4 h-full md:h-auto">
        /{/* / Modal content // */}
        <div className="bg-white rounded-lg shadow relative">
          {/* // Modal header // */}
          <div className="flex items-start justify-between p-5 border-b rounded-t">
            <p className="text-xl font-semibold">{header}</p>
            <button
              type="button"
              onClick={() => setIsUpdateDialogClicked(false)}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5  inline-flex items-center"
              data-modal-toggle="product-modal"
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
            {/* Form */}
            {children}
          </div>
          {/* // Modal footer // */}
        </div>
      </div>
    </div>
  );
}
