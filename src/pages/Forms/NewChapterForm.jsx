import FormContainer from "@/components/FormContainer";
import { chapterFields } from "@/constants";
import { chapterValidation } from "@/utils/validationSchema";
import { useContext, useState } from "react";
import { AdminDashboardContext } from "@/contexts/AdminDashboardContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { setData } from "@/Services/AxiosAPIServices";
import toast from "react-hot-toast";
import axios from "axios";
import { cloudinaryUrl, cloudName, uploadPreset } from "@/utils";
export default function NewChapterForm({ successMessage, endPoint }) {
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);
  const { setIsAddNewDialogClicked } = useContext(AdminDashboardContext);

  let initialValues = {
    name: "",
    description: "",
    videos: [""],
    coverImage: "",
  };

  const newMutation = useMutation({
    mutationKey: ["new", endPoint],
    mutationFn: async (values) => setData(endPoint, values),
    onMutate: () => {
      setIsLoading(true);
    },
    onError: (error) => {
      //toast.error(error?.response?.data?.errors[0]?.msg);
      toast.error(error?.message);
      setIsAddNewDialogClicked(false);
      setIsLoading(false);
    },
    onSuccess: () => {
      toast.success(successMessage);
      queryClient.invalidateQueries("chapters");
      setIsLoading(false);
      setIsAddNewDialogClicked(false);
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
      });

    return imageUrl.secure_url;
  };

  const handleSubmit = async (values, { resetForm }) => {
    const newCoverImage = await uploadToCloudinary(values.coverImage);
    values.coverImage = newCoverImage;
    newMutation.mutate(values);

    resetForm()
  };

  return (
    <FormContainer
      fields={chapterFields}
      initialValues={initialValues}
      validationSchema={chapterValidation}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      buttonText={"اضافة"}
    />
  );
}
