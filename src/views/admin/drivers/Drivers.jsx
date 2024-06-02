import React from 'react'
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Drivers = () => {
  return (
    <div className=' mt-[150px] mx-[28px] p-[20px] border border-black rounded'>
      <h2>Conductores</h2>
      <div className='flex m-2'>
        <div className="w-1/2">
          <span className=' border border-black rounded px-4 mr-2'>Nombre</span> 
          <input type="text" className=' border border-black rounded px-4 mr-2'/>
          <button className=' w-8 h-8 '><BsSearch className=' w-6 h-6' /></button>
        </div>
       
        
      </div>
      <div className='mt-4'>
          <Link
              to="create"
              className=" bg-p100 rounded-xl p-2 px-4 m-4 hover:text-gray-100 hover:bg-p300 transition-colors "
            >
                Agregar conductor
          </Link>
      </div>
    </div>
  )
}

export default Drivers