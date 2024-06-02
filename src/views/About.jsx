import React from "react";
import cliente from "../assets/cliente.jpg"
import repartidor from "../assets/repartidor.jpg"
import { FaUsers, FaTruckFront } from "react-icons/fa6";
import { MdMapsHomeWork } from "react-icons/md";
import { BsFillBoxSeamFill } from "react-icons/bs";


const About = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white relative overflow-hidden">
      <div className="bg-p300 h-1/4 lg:h-1/4 w-full" style={{ borderBottomRightRadius: '6rem' }}>
        <div className="font-Merriweather font-bold text-gray-200 text-2xl md:text-3xl lg:text-4xl mb-16 mt-16 mx-auto text-center">SOBRE NOSOTROS</div>
      </div>

      <div className="absolute inset-0 flex justify-center items-center" style={{ top: '-10%' }}>
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 w-full lg:w-11/12 mx-auto justify-center">
          <div className="flex flex-col lg:flex-row rounded-lg bg-white text-surface shadow-lg dark:bg-surface-dark dark:text-white w-full lg:w-2/3 h-96 lg:h-80">
            <img className="h-full w-full lg:w-2/5 rounded-t-lg object-cover lg:rounded-none lg:rounded-l-lg" src={repartidor} alt="Descripción de la imagen" />
            <div className="flex flex-col justify-start p-4 lg:p-8 w-full lg:w-3/5">
              <h5 className="mb-4 text-xl lg:text-xl font-Merriweather font-semibold">Nuestra flota</h5>
              <p className="mb-6 text-sm lg:text-lg">Contamos con una flota propia de vehículos de carga y transporte que aseguran que todos tus paquetes lleguen en 24hs a las principales ciudades de Córdoba, Santa Fe, Entre Ríos, Corrientes y Buenos Aires.</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row rounded-lg bg-white text-surface shadow-lg dark:bg-surface-dark dark:text-white w-full lg:w-2/3 h-96 lg:h-80">
            <img className="h-full w-full lg:w-2/5 rounded-t-lg object-cover lg:rounded-none lg:rounded-l-lg" src={cliente} alt="Descripción de la imagen" />
            <div className="flex flex-col justify-start p-4 lg:p-8 w-full lg:w-3/5">
              <h5 className="mb-4 text-xl lg:text-xl font-Merriweather font-semibold">Nuestros clientes</h5>
              <p className="mb-6 text-sm lg:text-lg">Entendemos la importancia del contacto y la atención al cliente. Sabemos que lo más importante en logística es estar siempre cerca y hacer que las cosas sucedan de forma simple y ágil.</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10"> */}
      <div class="flex justify-center gap-8 mb-10 mx-32">
        
        <div className="bg-white rounded-xl shadow-md border border-gray-300 p-6 w-10/12 h-4/5">
          <div className="bg-white h-20 rounded-t-xl flex justify-center items-center">
            <BsFillBoxSeamFill className="text-5xl text-gray-600" />
          </div>
          <div className="p-2 bg-s300 rounded-xl text-center text-lg text-gray-800">
            <span>+ 150.000</span>
            <p className="font-Montserrat font-semibold ">Entregas semanales</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md border border-gray-300 p-6 w-10/12 h-4/5">
          <div className="bg-white h-20 rounded-t-xl flex justify-center items-center">
            <FaUsers className="text-5xl text-gray-600" />
          </div>
          <div className="p-2 bg-s300 rounded-xl text-center text-lg text-gray-800">
            <span>+ de 10</span>
            <p className="font-Montserrat font-semibold ">Trabajadores</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md border border-gray-300 p-6 w-10/12 h-4/5">
          <div className="bg-white h-20 rounded-t-xl flex justify-center items-center">
            <MdMapsHomeWork className="text-5xl text-gray-600" />
          </div>
          <div className="p-2 bg-s300 rounded-xl text-center text-lg text-gray-800">
            <span>5</span>
            <p className="font-Montserrat font-semibold ">Provincias</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md border border-gray-300 p-6 w-10/12 h-4/5">
          <div className="bg-white h-20 rounded-t-xl flex justify-center items-center">
            <FaTruckFront className="text-5xl text-gray-600" />
          </div>
          <div className="p-2 bg-s300 rounded-xl text-center text-lg text-gray-800">
            <span>+ de 20</span>
            <p className="font-Montserrat font-semibold ">Vehículos</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;