import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const LayoutAdmin = () => {
  return (
    <div className="min-h-screen  xl:bg-slate-500 ">
      <div>
        <Header />
      </div>
      <Outlet />
    </div>
  );
};

export default LayoutAdmin;
