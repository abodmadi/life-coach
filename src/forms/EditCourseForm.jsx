import FormContainer from "@/components/FormContainer";
import { editCourseFields } from "@/constants";
import { editCourseValidation } from "@/utils/validationSchema";
import { useContext } from "react";
import { AdminDashboardContext } from "@/contexts/AdminDashboardContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateData } from "@/Services/AxiosAPIServices";
import toast from "react-hot-toast";
export default function EditCourseForm({ successMessage, endPoint }) {
  const initialValues = {
    name: "aaaa",
    price: "aaaa",
    description: "aaaa",
    coverImage:"",
  };
  const queryClient = useQueryClient();

  const { setIsUpdateDialogClicked, updatedItemId, setUpdatedItemId } =
    useContext(AdminDashboardContext);

  const updateMutation = useMutation({
    mutationKey: ["edit", endPoint + updatedItemId],
    mutationFn: async (values) => updateData(endPoint + updatedItemId, values),
    onMutate: () => {},
    onError: (error) => {
      //toast.error(error?.response?.data?.errors[0]?.msg);
      toast.error(error?.message);
      setIsUpdateDialogClicked(false);
      setUpdatedItemId(null);
    },
    onSuccess: () => {
      toast.success(successMessage);
      queryClient.invalidateQueries("courses");
      setUpdatedItemId(null);
      setIsUpdateDialogClicked(false);
    },
  });
  const handleSubmit = (values) => {
    console.log(values);
    updateMutation.mutate(values);
  };
  return (
    <>
      <FormContainer
        fields={editCourseFields}
        initialValues={initialValues}
        validationSchema={editCourseValidation}
        onSubmit={handleSubmit}
      />
    </>
  );
}
