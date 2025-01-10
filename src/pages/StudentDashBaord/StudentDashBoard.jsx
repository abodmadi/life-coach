import React from "react";
import DashboardSideBar from "./Components/DashboardSideBar";
import DashboardBody from "./Components/DashboardBody";
import { StudentDashboardProvider } from "@/contexts/StudentDashboardContext";

export default function StudentDashboard() {
  return (
    <div className="font-elMessiri flex justify-between gap-4 bg-slate-300">
      <StudentDashboardProvider>
        <DashboardSideBar />
        <DashboardBody />
      </StudentDashboardProvider>
    </div>
  );
}
{
  /* <>
      <div className="h-screen overflow-hidden flex items-center justify-center bg-[#edf2f7] font-elMessiri">
        <div className="h-screen w-full flex overflow-hidden select-none">
         
        </div>
      </div>
    </> */
}
