import React from "react";
import CourseCard from "./CourseCard";
import { getCoursesQuery } from "@/reactQuery/courseQuery";
import toast from "react-hot-toast";
import Error from "@/components/Error";
import Loader from "@/components/Loader";

export default function CoursesGrid() {
  const { isError, error, isLoading, data } = getCoursesQuery("/all");

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
  console.log(data);
  return isLoading ? (
    <Loader />
  ) : (
    <div className="lg:col-span-3">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-bold min-[400px]:text-3xl lg:text-4xl text-2xl bg-gradient-to-tr from-blueVeryDark-100 to-teal-500/90 bg-clip-text text-transparent mb-8 max-lg:text-center">
          الدورات المتاحة
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.courses?.map((course, index) => (
            <CourseCard
              key={index}
              endPoint={"course-details/"}
              course={course}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

{
  /* */
}
