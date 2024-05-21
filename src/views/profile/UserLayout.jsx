import React from "react";
import NavProfile from "./NavProfile";

const UserLayout = ({ children, setIsAuth, infoUser }) => (
  <div style={{ display: "flex", height: "100vh" }}>
    <NavProfile setIsAuth={setIsAuth} />
    <div className="content" style={{ flex: 1, overflowY: "auto" }}>
      {children}
    </div>
  </div>
);

export default UserLayout;
