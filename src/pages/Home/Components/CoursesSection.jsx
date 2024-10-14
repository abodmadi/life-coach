import React from "react";
import { CourseCardList } from "../../../constants";
import CardCourse from "../../../components/CardCourse";
export default function CoursesSection() {
  return (
    <>
      <div className="bg-blueLightGrayish-200 px-4 font-elMessiri">
        <div className="container pb-10 w-10/12 pt-20">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-bold title-font text-blueVeryDark-700 mb-4">
              الدورات{" "}
              <span className=" text-blueVeryDark-950">والورش التعليمية</span>
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-blueVeryDark-700">
              دورات تدريبية وورش عمل لتعزيز المهارات الشخصية والروحية
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-32 h-1 rounded-full bg-blueVeryDark-950 inline-flex" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-y-0 gap-x-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 ">
            {CourseCardList.map((item, index) => (
              <div
                key={index}
                className={`
              ${index === 2 ? "md:col-span-2 md:flex md:justify-center" : ""} 
              ${index >= 2 ? "lg:col-span-1" : ""} 
            `}
              >
                <CardCourse item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
