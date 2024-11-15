import Table from "../Components/Table";
import { tableCourseColumnsNames } from "@/constants";
import { useQuery } from "@tanstack/react-query";
import { getData } from "@/Services/AxiosAPIServices";
import { coursesUrl } from "@/utils";
import Loader from "@/components/Loader";
import DeleteDialog from "../Components/DeleteDialog";
import EditDialog from "../Components/EditDialog";
import NewItemDialog from "../Components/NewItemDialog";
import toast from "react-hot-toast";
import EditCourseForm from "@/forms/EditCourseForm";
import NewCourseForm from "@/forms/NewCourseForm";

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
        hide={true}
        header={"جميع الدورات"}
        tableColumnsNames={tableCourseColumnsNames}
        tableRows={courses}
        newItemTitle={"إضافة دورة"}
        deleteItemTitle={"حذف الدورة"}
        editItemTitle={"تعديل الدورة"}
      />
      <DeleteDialog
        queryKey={"courses"}
        message={"هل أنت متأكد من أنك تريد حذف هذه الدورة؟"}
        endPoint={coursesUrl + "/delete/"}
        successMessage={"تم حذف الدورة بنجاح"}
      />
      <EditDialog header={"تعديل الدورة"}>
        <EditCourseForm
          endPoint={coursesUrl + "/update/"}
          successMessage={"تم تعديل الدورة بنجاح"}
        />
      </EditDialog>
      <NewItemDialog header={"إضافة دورة جديدة"}>
        <NewCourseForm
          endPoint={coursesUrl + "/store"}
          successMessage={"تم  إضافة الدورة بنجاح"}
        />
      </NewItemDialog>
    </>
  );
}
