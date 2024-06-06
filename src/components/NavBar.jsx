import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
import Logout from "./Logout";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setIsLogged } from "../redux/actions";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user } = useAuth0();
  const isLogged = useSelector((state) => state.isLogged);

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(setIsLogged(true));
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`bg-p300 py-4 px-8 transition-all duration-300 fixed top-0 left-0 w-full z-50 ${
        isOpen ? "h-screen md:h-16" : "h-16 md:h-16" // Full screen on mobile when open
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
              isOpen
                ? "block fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:static md:transform-none"
                : "hidden"
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
            {!isLogged && (
              <span className="text-white hover:text-s300 p-2 cursor-pointer">
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
              </span>
            )}
            {!isLogged && (
              <span className="text-white hover:text-s300 p-2 cursor-pointer">
                <NavLink
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={700}
                  onClick={closeMenu}
                >
                  Nosotros
                </NavLink>
              </span>
            )}
            {isLogged && (
              <NavLink
                to="../auth/dashboard"
                className="text-white hover:text-s300 p-2"
                activeClassName="text-blue-500"
                onClick={closeMenu}
              >
                Perfil
              </NavLink>
            )}

            {!isLogged ? (
              <NavLink
                to="/auth/"
                className="text-primary font-normal hover:text-white transition-colors p-2"
                onClick={closeMenu}
              >
                <button className="bg-s300 py-2 px-4 rounded">
                  Iniciar Sesion
                </button>
              </NavLink>
            ) : (
              <Logout />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
