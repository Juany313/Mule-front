import React, { useState } from "react";
import NavAdmin from "../views/admin/NavAdmin";
import { Outlet } from "react-router-dom";
import AdminHome from "../views/admin/adminHome/AdminHome";

const LayoutAdminAlpha = ({ setIsAuth, children }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="min-h-screen flex">
      <NavAdmin
        isChecked={isChecked}
        handleCheck={handleCheck}
        setIsAuth={setIsAuth}
      />
      <div
        className={`transition-all duration-300 ${
          isChecked ? "ml-[20rem]" : "ml-0"
        } flex-1 mt-[150px]`}
      >
        <Outlet />

      </div>
    </div>
  );
};

export default LayoutAdminAlpha;
