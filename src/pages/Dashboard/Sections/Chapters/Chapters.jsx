import Table from "../Components/Table";
import { tableChapterColumnsNames } from "@/constants";
import { useQuery } from "@tanstack/react-query";
import { getData } from "@/Services/AxiosAPIServices";
import { chaptersUrl } from "@/utils";
import Loader from "@/components/Loader";
import DeleteDialog from "../Components/DeleteDialog";
import EditDialog from "../Components/EditDialog";
import NewItemDialog from "../Components/NewItemDialog";
import toast from "react-hot-toast";
import EditChapterForm from "@/forms/EditChapterForm";
import NewChapterForm from "@/forms/NewChapterForm";

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

  if (isError) {
    toast.error(error?.message);
  }

  return isLoading ? (
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
          endPoint={chaptersUrl + "/update/"}
          successMessage={"تم تعديل الفصل بنجاح"}
        />
      </EditDialog>
      <NewItemDialog header={"إضافة فصل جديد"}>
        <NewChapterForm
          endPoint={chaptersUrl + "/store"}
          successMessage={"تم  إضافة الفصل بنجاح"}
        />
      </NewItemDialog>
    </>
  );
}
export default Chapters;
