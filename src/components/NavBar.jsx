import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <nav className="bg-p300 p-4">
      <div className="mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold pl-9 text-4xl pt-1">
            <NavLink to="/">MULE</NavLink>
          </div>
          <div className="flex space-x-4">
            <NavLink
              to="/header"
              className="text-white hover:text-gray-300 p-2"
              activeClassName="text-blue-500"
              exact
            >
              Inicio
            </NavLink>
            <NavLink
              to="/header/about"
              className="text-white hover:text-gray-300 p-2"
              activeClassName="text-blue-500"
            >
              Nosotros
            </NavLink>
            <NavLink
              to="/header/service"
              className="text-white hover:text-gray-300 p-2"
              activeClassName="text-blue-500"
            >
              Servicios
            </NavLink>
            <NavLink
              to="/agencias"
              className="text-white hover:text-gray-300 p-2"
              activeClassName="text-blue-500"
            >
              Agencias
            </NavLink>
            <NavLink
              to="/contacto"
              className="text-white hover:text-gray-300 p-2"
              activeClassName="text-blue-500"
            >
              Contacto
            </NavLink>
            <NavLink
              to="/cotizar"
              className="text-white hover:text-gray-300 p-2"
              activeClassName="text-blue-500"
            >
              Cotizar
            </NavLink>
            
            <Link to ='/auth/' className='text-primary hover:text-gray-100 transition-colors '>
              <button className="bg-s300 py-2 px-4 rounded">Ingresar</button>
          </Link>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
