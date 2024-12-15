import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Details from "./Components/Details";
import { useDispatch, useSelector } from "react-redux";
import { setCourseId } from "@/redux/state_slices/course/courseSlice";
import { getCoursesQuery } from "@/reactQuery/courseQuery";
import Loader from "@/components/Loader";
import toast from "react-hot-toast";
import Error from "@/components/Error";
export default function CourseDetails() {
  const { id } = useParams();
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCourseId(id));
  }, []);
  const { isError, error, isLoading, data } = getCoursesQuery(`/show/${id}`);
  if (isError) {
    toast.error(error.message);
    return (
      <Error
        code={error?.response?.status}
        title={error?.response?.statusText}
        message={error?.response?.data?.message}
      />
    );
  }
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="bg-violetLightGrayish-400 font-elMessiri">
          <Details course={data?.course} />
        </div>
      )}
    </>
  );
}
