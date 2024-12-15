import React from "react";
import { studentDashBordSideBar } from "../../../constants/index.js";
import { Link } from "react-router-dom";
export default function DashBaordSideBar() {
  return (
    <>
      <nav className="w-32 flex flex-col items-center bg-white dark:bg-gray-800 py-4 ">
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
          {studentDashBordSideBar.map((item, index) => (
            <li
              key={index}
              className="mt-3 p-2 hover:text-blue-600 dark-hover:text-blue-300
rounded-lg"
            >
              <Link to={index.to} className=" flex flex-col items-center">
                <img src={item.svg} className="h-5 w-5" />
                <span className="text-xs mt-2">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
        {/* 
        <div
          className="mt-auto flex items-center p-2 text-blue-700 bg-purple-200
			dark:text-blue-500 rounded-full"
        >
          <a href="#">
            <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
              <path
                d="M12 1c-5 0-9 4-9 9v7a3 3 0 003 3h3v-8H5v-2a7 7 0 017-7
						7 7 0 017 7v2h-4v8h4v1h-7v2h6a3 3 0
						003-3V10c0-5-4.03-9-9-9z"
              ></path>
            </svg>
          </a>
        </div> */}
      </nav>
    </>
  );
}
