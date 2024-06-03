import React from 'react'
import { BsSearch } from "react-icons/bs";

/* Components */
import DriversTable from './DriversTable';

/* dependencias */
import {useEffect,useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";

/* actions */
import {getDrivers} from "../../../redux/actions/index"

let drivers = [
  {name: "Juany", email: "lala@gmail.com", state: "active"},
  {name: "Juany", email: "lala@gmail.com", state: "active"},
  {name: "Juany", email: "lala@gmail.com", state: "active"},
  {name: "Juany", email: "lala@gmail.com", state: "active"},
  {name: "Juany", email: "lala@gmail.com", state: "active"},
  {name: "Jany", email: "lala@gmail.com", state: "active"},
  {name: "Jany", email: "lala@gmail.com", state: "active"},
  {name: "Jany", email: "lala@gmail.com", state: "active"},
  {name: "Jany", email: "lala@gmail.com", state: "active"},
  {name: "Juany", email: "lala@gmail.com", state: "active"},
  {name: "Juany", email: "lala@gmail.com", state: "active"},
  {name: "Juany", email: "lala@gmail.com", state: "active"},
];

const Drivers = () => {

  const dispatch = useDispatch();

  /* Estado global */
  const allDrivers = useSelector((state)=> state.allDrivers);

  //Primera renderizacion
  useEffect(() => {
    // Verifica si la lista de conductores ya está cargada en el estado global de Redux
    if (!allDrivers.length) {
      // Si no está cargada, realiza la carga inicial
      dispatch(getDrivers());
    }
  }, [dispatch, allDrivers]);
  console.log("driverssss",allDrivers );
  
  return (
    <div className='relative h-[650px] mt-[150px] mx-[400px] p-[60px] border border-black rounded'>
      
        <h2 className='text-xl font-semibold mb-4'>Conductores</h2>
        <div className='flex m-2 mb-10'>
          <div className="">
            <input 
              type="text" 
              className='text-center border border-black rounded px-4 mr-2'
              placeholder='Nombre'
              />
            <button className=' w-8 h-8 '><BsSearch className=' w-6 h-6' /></button>
            <button className=''>
                <Link
                    to="create"
                    className="mx-6 px-4 py-2 bg-gray-500 text-left text-xs font-medium text-black uppercase rounded hover:text-gray-100  transition-colors "
                  >
                      Agregar conductor
                </Link>
            </button>
          </div>
        
        
      </div>
      <DriversTable drivers={drivers} />
    </div>
  )
}

export default Drivers;