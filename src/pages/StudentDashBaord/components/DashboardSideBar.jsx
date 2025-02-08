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
    !isCourseOpened && (
      <nav className=" max-w-40 min-w-40 flex flex-col items-center border rounded-l-xl m-2 border-blueVeryDark-400 border-dashed shadow-xl  py-4 ">
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
    )
  );
}
