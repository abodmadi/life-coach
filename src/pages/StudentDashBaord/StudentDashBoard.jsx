import React from "react";
import DashBaordSideBar from "./components/DashBaordSideBar";
import DashBoardBody from "./components/DashBoardBody";

export default function StudentDashBoard() {
  return (
    <>
      <div className="h-screen overflow-hidden flex items-center justify-center bg-[#edf2f7] font-elMessiri">
        <div className="h-screen w-full flex overflow-hidden select-none">
          <DashBaordSideBar />
          <DashBoardBody />
        </div>
      </div>
    </>
  );
}
