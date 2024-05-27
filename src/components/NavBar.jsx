// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { Link } from "react-scroll";
// import { FaBars, FaTimes } from "react-icons/fa";

// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-p300 py-4 pl-4 pr-8">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-white font-bold text-4xl">
//           <NavLink to="/">MULE</NavLink>
//         </div>
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="text-white">
//             {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//           </button>
//         </div>
//         <div
//           className={`md:flex space-x-4 font-bold ${
//             isOpen ? "block" : "hidden"
//           } md:block`}
//         >
//           <div
//             className={`flex flex-col md:flex-row md:space-x-4 ${
//               isOpen ? "block" : "hidden"
//             } md:block`}
//           >
//             <span className="text-white hover:text-s300 p-2 cursor-pointer">
//               <NavLink
//                 to="/header"
//                 spy={true}
//                 smooth={true}
//                 offset={0}
//                 duration={700}
//               >
//                 Inicio
//               </NavLink>
//             </span>
//             <span className="text-white hover:text-s300 p-2 cursor-pointer">
//               <Link
//                 to="service"
//                 spy={true}
//                 smooth={true}
//                 offset={0}
//                 duration={700}
//               >
//                 Servicios
//               </Link>
//             </span>
//             <span className="text-white hover:text-s300 p-2 cursor-pointer">
//               <Link
//                 to="about"
//                 spy={true}
//                 smooth={true}
//                 offset={0}
//                 duration={700}
//               >
//                 Nosotros
//               </Link>
//             </span>
//             <span className="text-white hover:text-s300 p-2 cursor-pointer">
//               <Link
//                 to="orderShipment"
//                 spy={true}
//                 smooth={true}
//                 offset={0}
//                 duration={700}
//               >
//                 Pedidos
//               </Link>
//             </span>
//             <NavLink
//               to="pedido"
//               className="text-white hover:text-s300 p-2"
//               activeClassName="text-blue-500"
//             >
//               Iniciar Pedido
//             </NavLink>
//             <NavLink
//               to="/auth/"
//               className="text-primary font-normal hover:text-white transition-colors p-2"
//             >
//               <button className="bg-s300 py-2 px-4 rounded">Ingresar</button>
//             </NavLink>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
import Logout from "./Logout";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user } = useAuth0();
  const isLogged = useSelector((state) => state.isLogged);
  console.log(isLogged);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`bg-p300 py-4 pl-4 pr-8 ${
        isOpen ? "fixed top-0 left-0 w-full" : ""
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-4xl">
          <NavLink to="/" onClick={closeMenu}>
            MULE
          </NavLink>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <div
          className={`md:flex space-x-4 font-bold ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <div
            className={`flex flex-col md:flex-row md:space-x-4 ${
              isOpen ? "block" : "hidden"
            } md:block`}
          >
            <span className="text-white hover:text-s300 p-2 cursor-pointer">
              <NavLink
                to="/header"
                spy={true}
                smooth={true}
                offset={0}
                duration={700}
                onClick={closeMenu}
              >
                Inicio
              </NavLink>
            </span>
            {!isLogged && <span className="text-white hover:text-s300 p-2 cursor-pointer">

              <Link
                to="service"
                spy={true}
                smooth={true}
                offset={0}
                duration={700}
                onClick={closeMenu}
              >
                Servicios
              </Link>
            </span>}
            {!isLogged &&<span className="text-white hover:text-s300 p-2 cursor-pointer">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={700}
                onClick={closeMenu}
              >
                Nosotros
              </Link>
            </span>}
            {!isLogged &&<span className="text-white hover:text-s300 p-2 cursor-pointer">
              <Link
                to="orderShipment"
                spy={true}
                smooth={true}
                offset={0}
                duration={700}
                onClick={closeMenu}
              >
                Pedidos
              </Link>
            </span>}
            { isLogged && <NavLink
              to="auth/dashboard/"
              className="text-white hover:text-s300 p-2"
              activeClassName="text-blue-500"
              onClick={closeMenu}
            >
              Perfil
            </NavLink>}

            {!isLogged ? <NavLink
              to="/auth/"
              className="text-primary font-normal hover:text-white transition-colors p-2"
              onClick={closeMenu}
            >
              <button className="bg-s300 py-2 px-4 rounded">Iniciar Sesion</button>
            </NavLink>: <Logout />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
