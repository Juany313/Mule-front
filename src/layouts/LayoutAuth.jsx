import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';


const LayoutAuth = () => {
  return (
    <div className="min-h-screen">
      <div>
        <Link to="/header">
          <button
            className="text-black uppercase font-bold text-sm  ml-5 mt-5 p-2 bg-slate-400 rounded-lg hover:text-gray-600 transition-colors"
            
            >Home</button></Link>
      </div>
      <div className=" flex min-h-[90vh] justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutAuth;
