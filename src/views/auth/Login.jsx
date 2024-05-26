/* dependencies */
import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from "sweetalert2";

/* icons */
import { RiMailLine, RiLock2Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { LuEye, LuEyeOff } from "react-icons/lu";
//import { Checkbox } from "@material-tailwind/react";

/* services, helpers and actions */
import loginUser from "../../services/auth/requestLogin";
import parseJwt from "../../helpers/parseJwt";
import {
  setIsLogged,
  setInfoUserLogged
  } from "../../redux/actions/index";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogged = useSelector((state) => state.isLogged);
  const infoUserLogged = useSelector((state) => state.infoUserLogged);
  const [isAuth0, setIsAuth0] = useState(false);
  const [showPassword, SetShowPassword] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const { isAuthenticated, user } = useAuth0();
  const { loginWithRedirect } = useAuth0();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const checkToken = () => {
      if (localStorage.getItem("token") && (isLogged === true || isAuthenticated === true))  {
        dispatch(setIsLogged(
          parseJwt(localStorage.getItem("token")).exp * 1000 > Date.now()
        ));
        const emailAuth = infoUserLogged.email;
        navigate("dashboard");
      }
      if (localStorage.getItem("token") && isLogged === false) {
        dispatch(setIsLogged(
          false
        ));
      }
    };
    // Verificar la validez del token inmediatamente
    checkToken();
    // Verificar la validez del token cada minuto
    const intervalId = setInterval(checkToken, 60000);
    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, [isLogged, isAuthenticated]);

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = await loginUser(formData);
      localStorage.setItem("token", token);
      dispatch(setInfoUserLogged(
        localStorage.getItem("token") && parseJwt(localStorage.getItem("token"))
      ));
      Swal.fire({
        icon: "success",
        title: "Inicio de sesión exitoso",
        text: "Bienvenido a la plataforma",
        showConfirmButton: true,
      });
      
      dispatch(setIsLogged(
        parseJwt(localStorage.getItem("token")).exp * 1000 > Date.now()

      ));
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Error al iniciar sesión",
        showConfirmButton: true,
      });
    }
  };

  return (
    <div>
        <div className="bg-p100 p-8 rounded-xl w-auto  lg:w-[450px]">
          <h1 className="text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8">
            Iniciar <span className="text-primary">sesión</span>
          </h1>
          <button
            className="flex items-center justify-center py-3 px-4 gap-4 bg-secondary-900 w-full rounded-full mb-8 text-gray-100"
            onClick={() => loginWithRedirect()}
          >
            <img
              src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png"
              alt="Google Logo"
              className="w-4 h-4"
            />
            Ingresa con Google
          </button>

          <div className="relative mb-4">
            <RiMailLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
            <input
              type="email"
              className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <IoMdClose
              className="absolute top-1/2 -translate-y-1/2 right-2 text-primary hover:cursor-pointer"
              onClick={() => setFormData({ ...formData, email: "" })}
            />

            {showEmail ? (
              <button
                onClick={handleDeleteEmail}
                className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary"
              >
                <IoCloseCircleOutline />
              </button>
            ) : null}
          </div>
          <div className="relative mb-8">
            <RiLock2Line className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
            <input
              type={showPassword ? "text" : "password"}
              className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
              placeholder="Contraseña"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            {showPassword ? (
              <LuEye
                onClick={() => SetShowPassword(!showPassword)}
                className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary"
              />
            ) : (
              <LuEyeOff
                onClick={() => SetShowPassword(!showPassword)}
                className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary"
              />
            )}
          </div>

          <div>
            <button
              type="submit"
              className="bg-s300 text-black uppercase font-bold text-sm w-full py-3 px-4 rounded-lg hover:text-gray-100 transition-colors"
              onClick={handleLoginSubmit}
            >
              Ingresar
            </button>
          </div>
          <div className="flex flex-col flex-gap-4 items-center ">
            <Link
              to="/auth/olvide-password"
              className="hover:text-primary transition-colors "
            >
              ¿Olvidaste tu contraseña?
            </Link>
            <span className="flex items-center gap-2">
              ¿No tienes cuenta?
              <Link
                to="/auth/registro"
                className="text-primary hover:text-gray-100 transition-colors "
              >
                Registrate
              </Link>
            </span>
          </div>
        </div>
      
    </div>
  );
};

export default Login;