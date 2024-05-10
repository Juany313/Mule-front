import React from "react";
import landing from "../assets/landing.jpg";
import { NavLink } from "react-router-dom";


const Landing = () => {

  return (

    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${landing})` }}
    >
      <div className="grid grid-cols-3 grid-rows-12">
        <NavLink
          to="/header"
          className="text-7xl text-white font-bold text-center col-start-2 row-start-5"
        >
          MULE
        </NavLink>
      </div>
    </div>
  );
};


export default Landing;
