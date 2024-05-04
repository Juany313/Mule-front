import React from 'react'
import { Link } from 'react-router-dom'

/* Icons */
import { RiBarChart2Line, RiEarthLine, RiMessage3Line, RiCalendarTodoLine, RiLogoutCircleRLine } from "react-icons/ri";
//! Mirar a partir de 2hs 54 minutos y hacer correccionesssssssssssss


const Sidebar = () => {
  return (
    <div 
    className='xl:h-[100vh] fixed xl:static overflow-y-scroll bg-secondary-100 w-ful h-full -left-full -top-full p-8 flex flex-col justify-between'>
      <div>
        <h1 className='text-center text-2xl font-bold text-white mb-10'>
          Admin<span className='text-primary text-4xl'>.</span>
        </h1>
        <ul>
          <li>
            <Link to="/" className=' flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors'>
              <RiBarChart2Line className='text-primary' /> Analíticas
            </Link>
          </li>
          <li>
            <Link to="/" className=' flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors'>
              <RiEarthLine  className='text-primary' /> Redes sociales
            </Link>
          </li>
          <li>
            <Link to="/" className=' flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors'>
              <RiMessage3Line  className='text-primary' /> Mensajes
            </Link>
          </li>
          <li>
            <Link to="/" className=' flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors'>
              <RiCalendarTodoLine  className='text-primary' /> Calendario
            </Link>
          </li>
        </ul>
      </div>
      <nav>
        <Link to="/auth" className=' flex items-center justify-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors'>
              <span className='text-primary text-center hover:font-semibold'>
                Iniciar sesión
              </span> 
        </Link>
      </nav>
    </div>
  )
}

export default Sidebar