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
  console.log('estoy en dashboard')

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userDetail = useSelector((state) => state.userDetail);
  const isLogged = useSelector((state) => state.isLogged);
  const idUser = infoUser.id;
  console.log("loggggg", infoUser);

  if (isAuthenticated) {
    var emailAuth = user.email;
    var nameAuth = user.nickname;
    console.log("aca emaaaill",emailAuth);
    console.log("aca emaaaill",nameAuth);
    console.log(isAuthenticated);
  }

  const handleLoginSubmitAuth = async () => {
    try {
      // modificar para utilizar nameAuth
      const token = await loginUserAuth(emailAuth);
      localStorage.setItem("token", token);
      Swal.fire({
        icon: "success",
        title: "Inicio de sesión exitoso",
        text: "Bienvenido a la plataforma",
        showConfirmButton: true,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Correo o contraseña incorrectos",
        showConfirmButton: true,
      });
    }
  };

    useEffect(() => {
    if (isAuthenticated) {
      handleLoginSubmitAuth();
    } 
  }, [isAuthenticated]);

  
  

    useEffect(()=>{
        dispatch(getUserDetail(idUser))
    }, [dispatch, idUser])


  // Funciones para manejar los clics en cada tarjeta
  // const handleQuote = () => {
  //   navigate("/cotizar-paquete");
  // };

  // const handleTrack = () => {
    //   navigate("/rastrear-pedido");
    // };
 
    
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