import Table from "../Components/Table";
import { tableChapterColumnsNames } from "@/constants";
import { useQuery } from "@tanstack/react-query";
import { getData } from "@/Services/AxiosAPIServices";
import { chaptersUrl, coursesUrl } from "@/utils";
import Loader from "@/components/Loader";
import DeleteDialog from "../Components/DeleteDialog";
import EditDialog from "../Components/EditDialog";
import NewItemDialog from "../Components/NewItemDialog";
import toast from "react-hot-toast";
import EditChapterForm from "@/pages/Forms/EditChapterForm";
import NewChapterForm from "@/pages/Forms/NewChapterForm";
import Error from "@/components/Error";
function Chapters() {
  const {
    data: chapters,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["chapters"],
    queryFn: async () => await getData(chaptersUrl + "/all"),
    select: (data) => data.chapters,
  });
  const courses = useQuery({
    queryKey: ["coursesChapters"],
    queryFn: async () => await getData(coursesUrl + "/all"),
    select: (data) => data?.courses,
  });

  if (isError) {
    toast.error(error?.message);
    return <Error code={error?.response?.status} title={error?.response?.statusText} message={error?.response?.data?.message}/>
  }
  if (courses.isError) {
    toast.error(courses.error.message);
    return <Error code={courses?.error?.response?.status} title={courses?.error?.response?.statusText} message={courses?.error?.response?.data?.message}/>
  }

  return isLoading || courses.isLoading ? (
    <Loader />
  ) : (
    <>
      <Table
        hide={false}
        header={"جميع الفصول"}
        tableColumnsNames={tableChapterColumnsNames}
        tableRows={chapters}
        newItemTitle={"إضافة فصل"}
        deleteItemTitle={"حذف الفصل"}
        editItemTitle={"تعديل الفصل"}
      />
      <DeleteDialog
        queryKey={"chapters"}
        message={"هل أنت متأكد من أنك تريد حذف هذا الفصل؟"}
        endPoint={chaptersUrl + "/delete/"}
        successMessage={"تم حذف الفصل بنجاح"}
      />
      <EditDialog header={"تعديل الفصل"}>
        <EditChapterForm
          options={courses?.data?.map((item) => {
            return { value: item?.id, lable: item?.name };
          })}
          queryKey={"chapters"}
          endPoint={chaptersUrl + "/update/"}
          successMessage={"تم تعديل الفصل بنجاح"}
        />
      </EditDialog>
      <NewItemDialog header={"إضافة فصل جديد"}>
        <NewChapterForm
          options={courses?.data?.map((item) => {
            return { value: item?.id, lable: item?.name };
          })}
          queryKey={"chapters"}
          endPoint={chaptersUrl + "/store"}
          successMessage={"تم  إضافة الفصل بنجاح"}
        />
      </NewItemDialog>
    </>
  );
}
export default Chapters;
