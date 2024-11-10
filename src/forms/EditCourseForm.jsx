import FormContainer from "@/components/FormContainer";
import { editCourseFields } from "@/constants";
import { editCourseValidation } from "@/utils/validationSchema";
export default function EditCourseForm() {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const handleSubmit = (values) => {
    console.log(values);
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
