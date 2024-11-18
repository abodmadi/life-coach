import { useContext, useState } from "react";
import { AdminDashboardContext } from "@/contexts/AdminDashboardContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteData } from "@/Services/AxiosAPIServices";
import toast from "react-hot-toast";
import ButtonLoader from "@/components/ButtonLoader";
export default function DeleteDialog({
  queryKey,
  message,
  endPoint,
  successMessage,
  loadingMessage,
}) {
  const queryClient = useQueryClient();
  const {
    isDeleteDialogClicked,
    setIsDeleteDialogClicked,
    deletedItemId,
    setDeletedItemId,
  } = useContext(AdminDashboardContext);

  const [isLoading, setIsLoading] = useState(false);

  const { mutate } = useMutation({
    mutationKey: ["delete", endPoint + deletedItemId],
    mutationFn: async () => await deleteData(endPoint + deletedItemId),
    onMutate: () => {
      setIsLoading(true);
    },
    onError: (error) => {
      //toast.error(error?.response?.data?.errors[0]?.msg);
      toast.error(error?.message);
      setIsDeleteDialogClicked(false);
      setDeletedItemId(null);
    },
    onSuccess: () => {
      toast.success(successMessage);
      queryClient.invalidateQueries(queryKey);
      setIsLoading(false);
      setDeletedItemId(null);
      setIsDeleteDialogClicked(false);
    },
  });

  return (
    <div
      className={`${
        !isDeleteDialogClicked && "hidden"
      } h-full bg-gray-700/50 flex  overflow-x-hidden overflow-y-auto fixed top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center h-modal sm:h-full`}
      id="delete-product-modal"
    >
      <div className="relative w-full max-w-md px-4 h-full md:h-auto">
        {/* // Modal content // */}
        <div className="bg-white rounded-lg shadow relative">
          {/* // Modal header // */}
          <div className="flex justify-end p-2">
            <button
              type="button"
              onClick={() => setIsDeleteDialogClicked(false)}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-toggle="delete-product-modal"
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
          <div className="p-6 pt-0 text-center">
            <svg
              className="w-20 h-20 text-red-600 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-xl font-normal text-gray-500 mt-5 mb-6">
              {message}
            </h3>
            <div className="flex justify-center items-center gap-x-4">
            <button
                onClick={() => {
                  mutate();
                }}
                className="gap-x-2 text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2"
              >
                {isLoading && <ButtonLoader />}
                نعم ,انا متأكد
              </button>
              <button
                onClick={() => setIsDeleteDialogClicked(false)}
                className="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center"
              >
                لا ,إلغاء
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
