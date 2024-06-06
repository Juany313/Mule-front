import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import { TbUsers } from "react-icons/tb";
import { IoHomeOutline } from "react-icons/io5";
import { BsBoxSeam } from "react-icons/bs";
import { LiaShippingFastSolid } from "react-icons/lia";
import { TfiLocationPin } from "react-icons/tfi";
import { LuUserSquare2 } from "react-icons/lu";
import { useAuth0 } from "@auth0/auth0-react";
import "./NavAdmin.css";
import LOGO from "../../assets/LogoMule.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsLogged } from "../../redux/actions";
import { useLocation } from "react-router-dom";

const NavAdmin = ({ isChecked, handleCheck, setIsAuth }) => {
  const dispatch = useDispatch();
  const { logout } = useAuth0();
  const location = useLocation();

  useEffect(() => {
    // Ocultar la barra de navegación al cambiar de ubicación
    handleCheck(false);
  }, [location]);

  const handleLogout = () => {
    logout({
      logoutParams: { returnTo: `${import.meta.env.VITE_REDIRECT_URI}/header` },
    });
    dispatch(setIsLogged(false));
    localStorage.removeItem("token");
  };

  return (
    <div className="flex flex-col flex-wrap">
      <nav className="fixed bg-white w-full p-4 flex gap-4 items-center border-b-2 text-black z-50">
        <label className="ml-10">
          <div className=" w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
            <input
              className="hidden peer"
              type="checkbox"
              checked={isChecked}
              onChange={handleCheck}
            />
            <div className="w-[80%] h-[2px] bg-black rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]"></div>
            <div className="w-[80%] h-[2px] bg-black rounded-md transition-all duration-300 origin-center peer-checked:hidden"></div>
            <div className="w-[80%] h-[2px] bg-black rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]"></div>
          </div>
        </label>
        <img src={LOGO} alt="LOGO" className="w-20 h-20" />
      </nav>

      <div
        className={`fixed h-screen pt-16 transition-all duration-300 ${
          isChecked ? "w-[20rem]" : "w-0"
        } bg-white overflow-hidden z-40`}
      >
        <Card className="h-full bg-p100 p-12 shadow-xl shadow-blue-gray-900/8 rounded-none">
          <div className="mb-2 p-4 flex flex-row items-center gap-6">
            <button className="Btn" onClick={handleLogout}>
              <div className="sign">
                <svg viewBox="0 0 512 512">
                  <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                </svg>
              </div>
              <div className="text">Logout</div>
            </button>
          </div>
          <List className=" gap-8">
            <ListItem className="gap-3 text-white">
              <Link
                to="/admin/"
                className="flex items-center gap-3 w-full h-full"
              >
                <ListItemPrefix>
                  <IoHomeOutline className="h-8 w-8" />
                </ListItemPrefix>
                Inicio
              </Link>
            </ListItem>

            <ListItem className=" gap-3 text-white">
              <Link
                to="customers"
                className="flex items-center gap-3 w-full h-full"
              >
                <ListItemPrefix>
                  <TbUsers className="h-8 w-8" />
                </ListItemPrefix>
                Clientes
              </Link>
            </ListItem>

            <ListItem className=" gap-3 text-white">
              <Link
                to="drivers"
                className="flex items-center gap-3 w-full h-full"
              >
                <ListItemPrefix>
                  <LiaShippingFastSolid className="h-8 w-8" />
                </ListItemPrefix>
                Conductores
              </Link>
            </ListItem>
            <ListItem className=" gap-3 text-white">
              <Link
                to="enlistment"
                className="flex items-center gap-3 w-full h-full"
              >
                <ListItemPrefix>
                  <BsBoxSeam className="h-8 w-8" />
                </ListItemPrefix>
                Pedidos
              </Link>
               
            </ListItem>
          </List>
        </Card>
      </div>
    </div>
  );
};

export default NavAdmin;
