import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { StudentDashboardContext } from "@/contexts/StudentDashboardContext";
export default function DashboardBody() {
  const { isCourseOpened } = useContext(StudentDashboardContext);
  return (
    <div
      className={`container min-h-screen ${
        !isCourseOpened
          ? "border rounded-xl  p-4 m border-blueVeryDark-400 border-dashed"
          : null
      }`}
    >
      <Outlet />
    </div>
  );
}
