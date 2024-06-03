import React from "react";

/* imágenes */
import puertaPuerta from "../assets/puertaPuerta.jpg";
import puertaSucursal from "../assets/puertaSucursal.jpg";
import sucursalPuerta from "../assets/sucursalPuerta.jpg";
import sucursalSucursal from "../assets/sucursalSucursal.jpg";
import image from "../assets/bgServices.png"

const Service = () => {
  return (
    <div
      id="service"
      className="h-screen flex flex-col items-center justify-center bg-blue-700"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1 className=" font-Merriweather font-bold text-gray-200 text-4xl mb-2">NUESTROS SERVICIOS</h1>

      <div className="text-center font-Montserrat font-medium text-xl">
        <p className="text-gray-200">ESTAMOS AQUÍ PARA FACILITAR TUS ENVÍOS</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
        <div className="bg-white rounded-xl shadow-xl">
          <div class="max-w-sm px-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img src={puertaPuerta} alt="Puerta a Puerta" className="max-w-xs w-1/2" />
            <a href="#">
              <h5 class="mb-2 text-2xl font-Merriweather font-semibold tracking-tight text-gray-700 dark:text-white">Puerta a Puerta</h5>
            </a>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Nos acercaremos a tu domicilio para retirar la encomienda y se la entregaremos directamente al destinatario en el domicilio pactado.</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg ">
          <div class="max-w-sm px-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img src={puertaSucursal} alt="Puerta a Sucursal" className="max-w-xs w-1/2" />
            <a href="#">
              <h5 class="mb-2 text-2xl font-Merriweather font-semibold tracking-tight text-gray-700 dark:text-white">Puerta a Sucursal</h5>
            </a>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Podés elegir la opción para que retiren la encomienda en tu domicilio, nosotros nos encargaremos de entregada en la sucursal que nos indiques.</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg ">
          <div class="max-w-sm px-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img src={sucursalPuerta} alt="Sucursal a Puerta" className="max-w-xs w-1/2" />
            <a href="#">
              <h5 class="mb-2 text-2xl font-Merriweather font-semibold tracking-tight text-gray-700 dark:text-white">Sucursal a Puerta</h5>
            </a>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Podés realizar el envío desde una de nuestras sucursales y nosotros la entregaremos al destinatario en su domicilio o dirección pactada.</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg ">
          <div class="max-w-sm px-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img src={sucursalSucursal} alt="Sucursal a Sucursal" className="max-w-xs w-1/2" />
            <a href="#">
              <h5 class="mb-2 text-2xl font-Merriweather font-semibold tracking-tight text-gray-700 dark:text-white">Sucursal a Sucursal</h5>
            </a>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Si deseás realizar el envío desde una de nuestras sucursales podés acercarte a la más cercana y nosotros la enviaremos hacia la sucursal de destino.</p>
          </div>
        </div>

      </div>
    </div >
  );
};

export default Service;
