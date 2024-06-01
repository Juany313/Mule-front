import React from 'react'
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
        <div className="w-1/2 bg-slate-500">
          <span>Nombre</span> <input type="text" /><button>Search</button>
        </div>
      </div>
      
    </div>
  )
}

export default Drivers