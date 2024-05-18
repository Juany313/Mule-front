import React from "react";
import UserLayout from "../profile/UserLayout";
import Header from "../../assets/Header.png";
import { FaBox, FaSearch, FaPaperPlane } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate(); // Hook para la navegación

  // Funciones para manejar los clics en cada tarjeta
  const handleQuote = () => {
    navigate("/cotizar-paquete");
  };

  const handleTrack = () => {
    navigate("/rastrear-pedido");
  };

  const handleSend = () => {
    navigate("/enviar-paquete");
  };

  return (
    <UserLayout>
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