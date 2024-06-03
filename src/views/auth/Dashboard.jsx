import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import UserLayout from "../profile/UserLayout";
import Header from "../../assets/Header.png";
import { FaBox, FaSearch, FaPaperPlane } from "react-icons/fa";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { setIsLogged } from "../../redux/actions";
import { useEffect } from "react";
//import { useSelect } from "@material-tailwind/react";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from "sweetalert2";
import loginUserAuth from "../../services/auth/requestAuthLogin";
import parseJwt from "../../helpers/parseJwt";

import { Link } from "react-router-dom";



import { setInfoUserLogged, getUserDetail } from "../../redux/actions";



const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const infoUserLogged = useSelector((state) => state.infoUserLogged);
  const userDetail = useSelector((state) => state.userDetail); 
  const { isAuthenticated, user } = useAuth0();
  const idUser = infoUserLogged?.id


  let role = infoUserLogged?.role



  console.log(user);


    useEffect(() => {
      if (isAuthenticated) {
        dispatch(setInfoUserLogged(parseJwt(localStorage.getItem("token"))));
        dispatch(getUserDetail(infoUserLogged.id))
      }
    }, []);

  if (isAuthenticated) {
    var emailAuth = user.email;
    var nameAuth = user.name;
  }
  useEffect(() => {
  if (isAuthenticated) {
    handleLoginSubmitAuth();
  } 
}, [isAuthenticated, dispatch]);

  const handleLoginSubmitAuth = async () => {
    try {
      // modificar para utilizar nameAuth
      const token = await loginUserAuth(emailAuth, nameAuth);
      localStorage.setItem("token", token);
      dispatch(setInfoUserLogged(parseJwt(localStorage.getItem("token"))));
      Swal.fire({
        icon: "success",
        title: "Inicio de sesión exitoso",
        text: "Bienvenido a la plataforma",
        showConfirmButton: true,
      });
      dispatch(setIsLogged(true));
    } catch (error) {
      console.log(error);
    }
  };

  // Funciones para manejar los clics en cada tarjeta
   const handleQuote = () => {
     navigate("/header/shipment-price");
   };

   const handleTrack = () => {
     navigate("/rastrear-pedido");
  };

  const handleSend = () => {
    navigate("/header/pedido");
  };

  


  return (
    role === "user" ? 
      (<UserLayout >
        <div className="flex flex-col h-screen pt-28">
        
          <header className="bg-#efefef shadow-md w-full py-0 px-0 text-center">
            <img
              className="  bg-cover h-full w-full"
              src={Header}
              alt="Delivery"
            />
          </header>
          <div className="flex-1 p-0 overflow-y-auto">
            <h2 className="text-xl font-semibold text-gray-800"></h2>

            <div className="p-0 grid grid-cols-1 md:grid-cols-3 gap-4">
              <ActionButton
                icon={<FaBox size="3rem" />}
                title="Cotizar Paquete"
                onClick={handleQuote}
              />
              <ActionButton
                icon={<FaSearch size="3rem" />}
                title="Rastrear Pedido"
                onClick={handleTrack}
              /> 
              <ActionButton
                icon={<FaPaperPlane size="3rem" />}
                title="Enviar Paquete"
                onClick={handleSend}
              />
            </div>
          </div>
        </div>
      </UserLayout>
    ) : (window.location.href = "http://localhost:4000/admin")
  );
};

const ActionButton = ({ icon, title, onClick }) => {
  return (
    <div 
      className="flex flex-col items-center justify-center bg-white shadow-md rounded-lg p-4 hover:bg-blue-100 cursor-pointer"
      onClick={onClick}
    >
      {icon}
      <p className="text-lg font-semibold mt-2">{title}</p>
    </div>
  );
};

export default Dashboard;