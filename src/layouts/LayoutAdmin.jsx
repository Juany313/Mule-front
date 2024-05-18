import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const LayoutAdmin = () => {
  return (
    <div className="min-h-screen ">
      <div>
        <Header />
      </div>
      <Outlet />
    </div>
  );
};

export default LayoutAdmin;
