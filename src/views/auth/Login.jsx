import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

/* icons */
import { RiMailLine, RiLock2Line } from "react-icons/ri";
import { LuEye, LuEyeOff } from "react-icons/lu";

//! 2hs 02 minutos 43 segundos https://www.youtube.com/watch?v=m_0YupLc6Fo&list=PLVIqDRk3tnzwgIw2Rdz_yFlNhFAMJeGiT



const Login = () => {
  const [showPassword, SetShowPassword] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const [signUp, setSignUp] = useState(false);
  const localsignUp = localStorage.getItem("signUp");

  useEffect(() => {
    setSignUp(localsignUp);
  }
  ,[]);

  const handleSubmit = () => {
    if(emailRef.current.value && passwordRef.current.value){
      console.log(emailRef.current.value);
      console.log(passwordRef.current.value);
      localStorage.setItem("email", emailRef.current.value);
      localStorage.setItem("password", passwordRef.current.value);
      localStorage.setItem("signUp", emailRef.current.value);
      }
    else{
      alert("Por favor llene todos los campos");
    }
    
  }

  return (
    <div className="bg-p100 p-8 rounded-xl w-auto  lg:w-[450px]">
      {signUp && alert("Simulando que se abre la home de su cuenta")}
      <h1 className="text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8">
        Iniciar <span className="text-primary">sesión</span>
      </h1>
        <button
          className="flex items-center justify-center py-3 px-4 gap-4 bg-secondary-900 w-full rounded-full mb-8
        text-gray-100"
        >
          <img
            src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png"
            className="w-4 h-4"
          />
          Ingresa con google
        </button>
        <div className="relative mb-4">
          <RiMailLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
          <input
            type="email"
            className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
            placeholder="Correo electrónico"
            ref={emailRef}
          />
        </div>
        <div className="relative mb-8">
          <RiLock2Line className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
          <input
            type={showPassword ? "text" : "password"}
            className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
            placeholder="Contraseña"
            ref={passwordRef}
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
            onClick={handleSubmit}
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
  );
};

export default Login;
