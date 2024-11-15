import React from "react";
import SideBar from "./components/SideBar";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import { AdminDashboardProvider } from "@/contexts/AdminDashboardContext";
import { sideBarRoutes } from "@/constants";

export default function Dashboard() {
  return (
    <AdminDashboardProvider>
      <Navbar />
      <SideBar sideBarRoutes={sideBarRoutes}/>
      <Body />
    </AdminDashboardProvider>
  );
}
