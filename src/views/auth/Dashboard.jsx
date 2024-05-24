import React from "react";
import { useDispatch, useSelector } from "react-redux";
import UserLayout from "../profile/UserLayout";
import Header from "../../assets/Header.png";
import { FaBox, FaSearch, FaPaperPlane } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { getUserDetail } from "../../redux/actions";
import { useEffect } from "react";
//import { useSelect } from "@material-tailwind/react";
import Login from "../auth/Login";
import { setIsLogged } from "../../redux/actions";


const Dashboard = ({ setIsAuth, infoUser, isAuth }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userDetail = useSelector((state) => state.userDetail);
  const isLogged = useSelector((state) => state.isLogged);
  const idUser = infoUser.id;
  console.log("loggggg", infoUser);

  useEffect(() => {
    dispatch(getUserDetail(idUser));
  }, [dispatch, idUser]);

  useEffect(() => {
    if (localStorage.getItem("token") && isLogged === true){
      dispatch(
        setIsLogged(
          true
        )
      );
    }
  }
  , []);
      

  const parseJwt = (token) => {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(jsonPayload);
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

  const handleSend = () => {
    navigate("/header/pedido");
  };

  return (
    <>
      {isLogged ? (
        <UserLayout infoUser={infoUser} setIsAuth={setIsAuth} isAuth={isAuth}>
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
                {/* <ActionButton
              icon={<FaBox size="3rem" />}
              title="Cotizar Paquete"
              onClick={handleQuote}
            />
            <ActionButton
              icon={<FaSearch size="3rem" />}
              title="Rastrear Pedido"
              onClick={handleTrack}
            /> */}
                <ActionButton
                  icon={<FaPaperPlane size="3rem" />}
                  title="Enviar Paquete"
                  onClick={handleSend}
                />
              </div>
            </div>
          </div>
        </UserLayout>
      ) : (
        <Login setIsAuth={setIsAuth} />
      )}
    </>
  );
};

export default Dashboard;
