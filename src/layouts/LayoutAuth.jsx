import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';


const LayoutAuth = () => {
  return (
    <div className="bg-p300 min-h-screen flex justify-center items-center">
      <Outlet />
    </div>
  );
};

export default LayoutAuth;
