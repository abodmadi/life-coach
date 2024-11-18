import FormContainer from "@/components/FormContainer";
import { courseFields } from "@/constants";
import { courseValidation } from "@/utils/validationSchema";
import { useContext, useState } from "react";
import { AdminDashboardContext } from "@/contexts/AdminDashboardContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateData } from "@/Services/AxiosAPIServices";
import toast from "react-hot-toast";
import axios from "axios";
import { cloudinaryUrl, cloudName, uploadPreset } from "@/utils";
export default function EditCourseForm({ successMessage, endPoint,queryKey }) {
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);
  const { setIsUpdateDialogClicked, updatedItemId, setUpdatedItemId } =
    useContext(AdminDashboardContext);

  let initialValues = {
    name: "",
    description: "",
    price: "",
    coverImage: "",
  };

  if (updatedItemId) {
    initialValues.name = updatedItemId?.name;
    initialValues.description = updatedItemId?.description;
    initialValues.price = updatedItemId?.price;
    initialValues.coverImage = updatedItemId?.coverImage;
  }

  const updateMutation = useMutation({
    mutationKey: ["edit", endPoint + updatedItemId],
    mutationFn: async (values) =>
      updateData(endPoint + `${updatedItemId?.id}`, values),
    onMutate: () => {
      setIsLoading(true);
    },
    onError: (error) => {
      //toast.error(error?.response?.data?.errors[0]?.msg);
      toast.error(error?.message);
      setIsUpdateDialogClicked(false);
      setIsLoading(false);
      setUpdatedItemId(null);
    },
    onSuccess: () => {
      toast.success(successMessage);
      queryClient.invalidateQueries(queryKey);
      setUpdatedItemId(null);
      setIsLoading(false);
      setIsUpdateDialogClicked(false);
    },
  });

  const uploadToCloudinary = async (file) => {
    setIsLoading(true);
    const fromData = new FormData();
    fromData.append("file", file);
    fromData.append("upload_preset", uploadPreset);
    fromData.append("cloud_name", cloudName);
    const imageUrl = await axios
      .post(cloudinaryUrl, fromData)
      .then((response) => {
        setIsLoading(false);
        return response.data;
      }); //.env

    return imageUrl.secure_url;
  };

  const handleSubmit = async (values) => {
    if (JSON.stringify(values) !== JSON.stringify(initialValues)) {
      if (values.coverImage !== initialValues.coverImage) {
        const newCoverImage = await uploadToCloudinary(values.coverImage);
        values.coverImage = newCoverImage;
      }
      updateMutation.mutate(values);
    } else {
      setUpdatedItemId(null);
      setIsLoading(false);
      setIsUpdateDialogClicked(false);
    }
  };
  return (
    updatedItemId && (
      <FormContainer
        fields={courseFields}
        initialValues={initialValues}
        validationSchema={courseValidation}
        onSubmit={handleSubmit}
        isLoading={isLoading}
        buttonText={"تعديل"}
      />
    )
  );
}
