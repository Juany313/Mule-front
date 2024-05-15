import React from "react";

/* imágenes */
import puertaPuerta from "../assets/puertaPuerta.jpg";
import puertaSucursal from "../assets/puertaSucursal.jpg";
import sucursalPuerta from "../assets/sucursalPuerta.jpg";
import sucursalSucursal from "../assets/sucursalSucursal.jpg";

const Service = () => {
  return (
    <div
      id="service"
      className="h-screen bg-p300 flex flex-col items-center justify-center text-white"
    >
      <h1 className="font-bold text-4xl mb-2">NUESTROS SERVICIOS</h1>

      <div className="text-center font-semibold text-xl">
        <hr className="border-t-4 border-s400 mt-4 mb-4 w-[75vw]" />
        <p>Estamos aquí para facilitar tus envíos</p>
        <p>
          Disponemos de diferentes soluciones logísticas diseñadas para cada
          necesidad.
        </p>
        <p>
          Sabemos que cada cliente tiene sus propias necesidades, por eso en
          Mule contamos con servicios con
        </p>
        <p>
          soluciones personalizadas, confiables y seguras, a través de nuestra
          amplia red en todo el país.
        </p>
        <hr className="border-t-4 border-s400 mt-4 mb-4 w-[75vw]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
          <div className="bg-white h-56 rounded-t-xl flex justify-center items-center">
            <img
              src={puertaPuerta}
              alt="Puerta a Puerta"
              className="w-full h-full object-cover rounded-t-xl"
            />
          </div>
          <div className="p-4 bg-s300 text-center text-xl text-gray-800">
            <span>Puerta a Puerta</span>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
          <div className="bg-white h-56 rounded-t-xl flex justify-center items-center">
            <img
              src={puertaSucursal}
              alt="Puerta a Sucursal"
              className="w-full h-full object-cover rounded-t-xl"
            />
          </div>
          <div className="p-4 bg-s300 text-center text-xl text-gray-800">
            <span>Puerta a Sucursal</span>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
          <div className="bg-white h-56 rounded-t-xl flex justify-center items-center">
            <img
              src={sucursalPuerta}
              alt="Sucursal a Puerta"
              className="w-full h-full object-cover rounded-t-xl"
            />
          </div>
          <div className="p-4 bg-s300 text-center text-xl text-gray-800">
            <span>Sucursal a Puerta</span>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
          <div className="bg-white h-56 rounded-t-xl flex justify-center items-center">
            <img
              src={sucursalSucursal}
              alt="Sucursal a Sucursal"
              className="w-full h-full object-cover rounded-t-xl"
            />
          </div>
          <div className="p-4  bg-s300 text-center text-xl text-gray-800">
            div<span>Sucursal a Sucursal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
