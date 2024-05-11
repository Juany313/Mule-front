import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from 'react-scroll';
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
            
            
            <span className="text-white hover:text-gray-300 p-2">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70} // Ajusta el offset según tu diseño
                duration={700}
              >
                Nosotros
              </Link>
            </span>
            <span className="text-white hover:text-gray-300 p-2">
              <Link
                to="service"
                spy={true}
                smooth={true}
                offset={-70} // Ajusta el offset según tu diseño
                duration={700}
              >
                Servicios
              </Link>
            </span>
           
            
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
            
            <NavLink to ='/auth/' className='text-primary hover:text-gray-100 transition-colors '>
              <button className="bg-s300 py-2 px-4 rounded">Ingresar</button>
          </NavLink>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
