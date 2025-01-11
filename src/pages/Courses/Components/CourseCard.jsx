import React from "react";
import { Link } from "react-router-dom";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import Icons from "../../../components/Icons";

export default function CourseCard({ course,endPoint }) {
  return (
    <Link to={endPoint+course.id} className="max-w-[384px] mx-auto">
      {/* Image */}
      <div className="w-full max-w-sm aspect-square relative">
        <img
          src={course.coverImage}
          alt="serum bottle image"
          className="w-full h-full rounded-xl object-cover"
        />
       {/*  <span className="py-1 min-[400px]:py-2 px-2 min-[400px]:px-4 cursor-pointer rounded-lg bg-gradient-to-tr from-blueVeryDark-500 to-teal-300 font-medium text-sm leading-7 text-white absolute top-1.5 right-1.5 z-10">
          20% تخفيض
        </span> */}
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div className="">
          <h6 className="font-medium text-xl leading-8 text-blueVeryDark-900 mb-1">
            {course.name}
          </h6>
          <div className="flex items-center gap-x-2 text-sm mb-1">
            <div className="flex items-center gap-x-1 text-blueVeryDark-600 ">
              <Icons icon={faBookOpen} />
            </div>
            <span className="text-blueVeryDark-500">
              {course._count.chapters}
              {course._count.chapters !== 1 ? " فصول " : " فصل "}
            </span>
          </div>
          <h6 className="font-semibold text-xl leading-8 text-teal-600">
            ${course.price}
          </h6>
        </div>
        {/*   <button className="p-2 min-[400px]:p-4 rounded-full bg-white border border-blueVeryDark-300 flex items-center justify-center group shadow-sm shadow-transparent transition-all duration-500 hover:shadow-blueVeryDark-200 hover:border-blueVeryDark-700 hover:bg-blueVeryDark-50">
          <svg
            className="stroke-blueVeryDark-700 transition-all duration-500 group-hover:stroke-blueVeryDark-950"
            xmlns="http://www.w3.org/2000/svg"
            width={26}
            height={26}
            viewBox="0 0 26 26"
            fill="none"
            transform="scale(-1, 1)"
          >
            <path
              d="M12.6892 21.125C12.6892 22.0225 11.9409 22.75 11.0177 22.75C10.0946 22.75 9.34632 22.0225 9.34632 21.125M19.3749 21.125C19.3749 22.0225 18.6266 22.75 17.7035 22.75C16.7804 22.75 16.032 22.0225 16.032 21.125M4.88917 6.5L6.4566 14.88C6.77298 16.5715 6.93117 17.4173 7.53301 17.917C8.13484 18.4167 8.99525 18.4167 10.7161 18.4167H18.0056C19.7266 18.4167 20.587 18.4167 21.1889 17.9169C21.7907 17.4172 21.9489 16.5714 22.2652 14.8798L22.8728 11.6298C23.3172 9.25332 23.5394 8.06508 22.8896 7.28254C22.2398 6.5 21.031 6.5 18.6133 6.5H4.88917ZM4.88917 6.5L4.33203 3.25"
              stroke=""
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button> */}
      </div>
    </Link>
  );
}
