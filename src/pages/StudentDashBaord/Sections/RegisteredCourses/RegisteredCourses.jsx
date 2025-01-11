import React, { useState } from "react";
import { getEnrollmentQuery } from "@/reactQuery/enrollmentQuery";
import Loader from "@/components/Loader";
import { Outlet, useOutlet } from "react-router-dom";
import Error from "@/components/Error";
import { Link } from "react-router-dom";
import CourseCard from "@/pages/Courses/Components/CourseCard";

export default function RegisteredCourses() {
  const getUserCourses = getEnrollmentQuery(
    "/user-enrollment/00c8d7a8-6e6f-4141-bdc8-a0c1c443bd6c"
  );
  console.log(getUserCourses?.data);
  if (getUserCourses.isError) {
    return (
      <Error
        code={getUserCourses?.error?.response?.status}
        message={getUserCourses?.error?.response?.data?.errors[0]?.msg}
        title={getUserCourses?.error?.response?.statusText}
      />
    );
  }
  const isOutlet = useOutlet();

  return (
    <>
      {getUserCourses.isLoading ? (
        <Loader />
      ) : isOutlet ? (
        <Outlet />
      ) : (
        <div className="w-full  bg-blueLightGrayish-700 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {getUserCourses?.data?.enrollments?.map((item, index) => (
            <div
              className="px-2 pt-2 mt-2 border border-none rounded-2xl bg-blueLightGrayish-100"
              key={index}
            >
              <CourseCard course={item?.course} endPoint={"course-content/"} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
