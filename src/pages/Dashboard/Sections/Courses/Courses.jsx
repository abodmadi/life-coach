import Table from "../Components/Table";
import { tableColumnsNames } from "@/constants";
import { useQuery } from "@tanstack/react-query";
import { getData } from "@/Services/AxiosAPIServices";
import { coursesUrl } from "@/utils";
import Loader from "@/components/Loader";
import DeleteDialog from "../Components/DeleteDialog";
import EditDialog from "../Components/EditDialog";
import NewItemDialog from "../Components/NewItemDialog";
import toast from "react-hot-toast";
import EditCourseForm from "@/forms/EditCourseForm";

export default function Courses() {
  const {
    data: courses,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => await getData(coursesUrl + "/all"),
    select: (data) => data.courses,
  });

  if (isError) {
    toast.error(error?.message);
  }

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Table
        header={"جميع الدورات"}
        tableColumnsNames={tableColumnsNames}
        tableRows={courses}
        newItemTitle={"إضافة دورة"}
        deleteItemTitle={"حذف الدورة"}
        editItemTitle={"تعديل الدورة"}
      />
      <DeleteDialog
        message={"هل أنت متأكد من أنك تريد حذف هذه الدورة؟"}
        endPoint={coursesUrl + "/delete/"}
        successMessage={"تم حذف الدورة بنجاح"}
      />
      <EditDialog
        header={"Edit product"}
        endPoint={""}
        successMessage={"تم تعديل الدورة بنجاح"}
      >
        <EditCourseForm />
      </EditDialog>
      <NewItemDialog header={"Add product"} />
    </>
  );
}
