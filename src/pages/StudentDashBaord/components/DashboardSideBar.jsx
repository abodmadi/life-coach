import { studentDashboardSideBar } from "@/constants";
import React, { useState, useEffect } from "react";
import { StudentDashboardContext } from "@/contexts/StudentDashboardContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
export default function DashboardSideBar() {
  const [currentTap, setCurrentTap] = useState(0);
  useEffect(() => {
    console.log("setCurrentTap", currentTap);
  }, [currentTap]);
  const { isCourseOpened } = useContext(StudentDashboardContext);
  return (
    <>
      {!isCourseOpened && (
        <nav className=" max-w-40 min-w-40 flex flex-col items-center bg-blue-400  py-4 ">
          <div>
            <svg
              className="h-8 w-8 fill-current text-blue-600 dark:text-blue-300"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3m6.82
					6L12 12.72 5.18 9 12 5.28 18.82 9M17 16l-5 2.72L7 16v-3.73L12
					15l5-2.73V16z"
              ></path>
            </svg>
          </div>

          <ul className="mt-2 text-gray-700 dark:text-gray-400 capitalize">
            {studentDashboardSideBar.map((item, index) => (
              <li
                onClick={() => setCurrentTap(index)}
                key={index}
                className="mt-3 p-2 hover:text-blue-600 rounded-lg"
              >
                <Link to={item.to} className=" flex flex-col items-center">
                  <img src={item.svg} className="h-5 w-5" />
                  <span className="text-xs mt-2">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
