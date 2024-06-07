import React, { useState } from "react";
import { NavLink } from "react-router-dom";

/* views */
import About from "../About";
import Service from "../Service";
import SearchBar from "../../components/SearchBar";

const Home = () => {

  return (
    <>
      <div id="header"
        className="relative bg-cover bg-end h-[100vh]"
        style={{
          backgroundImage: `url(https://ontrack.global/wp-content/uploads/2023/10/logistica-contra-entrega.jpg)`,
        }}
      >
        <div className="absolute w-[500px] h-[300px]  top-[200px] left-[50px] right-0 bottom-0 flex flex-col justify-center items-start mx-6">
          <div className=" p-4  rounded-md text-center bg-p500 bg-opacity-10">
            <h3 className="text-p500 font-Montserrat font-bold text-xl ">
              SEGUIMIENTO DE TU ENVÍO
            </h3>
            <h2 className="text-p500 font-Montserrat text-lg font-medium"> Conocé el estado de tus envíos en todo momento</h2>
            <SearchBar />
            <h2 className="text-gray-700 ">Si no tenés el número de seguimiento</h2>
            <h2 className="text-gray-700 shadow-md rounded-sm "> <NavLink to='/auth' className='text-p400 font-medium shadow-md'>Iniciá sesión</NavLink> para ver todos los envíos asociados a tu e-mail</h2>
          </div>
        </div>
      </div>
      <Service />
      <About />
    </>
  );
};

export default Home;
