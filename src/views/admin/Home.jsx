import React from "react";

/* views */
import About from "../About";
import Service from "../Service";
import SearchBar from "../../components/SearchBar";
import Ordershipment from "../Ordershipment";

const Home = () => {
  return (
    <>
      <div
        className="relative bg-cover bg-end h-[100vh]"
        style={{
          backgroundImage: `url(https://ontrack.global/wp-content/uploads/2023/10/logistica-contra-entrega.jpg)`,
        }}
      >
        <div className="absolute w-[500px] h-[300px]  top-[200px] left-[50px] right-0 bottom-0 flex flex-col justify-center items-start">
          <div className=" p-4  rounded-md text-center">
            <h1 className="text-black text-start font-semibold text-2xl mb-2">
              SEGUIMIENTO DE TU ENVÍO
            </h1>
            <SearchBar />
          </div>
        </div>
      </div>
      <Service />
      <About />
      <Ordershipment />
    </>
  );
};

export default Home;
