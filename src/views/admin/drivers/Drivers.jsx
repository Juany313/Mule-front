import React from 'react'
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

/* Components */
import DriversTable from './DriversTable';

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
  return (
    <div className=' mt-[150px] mx-[28px] p-[20px] border border-black rounded'>
      <h2 className='text-xl font-semibold mb-4'>Conductores</h2>
      <div className='flex m-2 mb-10'>
        <div className="w-1/2">
          <span className=' border border-black rounded px-4 mr-2'>Nombre</span> 
          <input type="text" className=' border border-black rounded px-4 mr-2'/>
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