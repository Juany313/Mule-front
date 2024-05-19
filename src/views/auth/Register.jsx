import React, { useState } from "react";
import { Link } from "react-router-dom";

/* actions */
import {postUser} from '../../redux/actions/index'

/* icons */
import { RiMailLine, RiLock2Line, RiUserLine } from "react-icons/ri";
import { LuEye, LuEyeOff } from "react-icons/lu";

/* hooks */
import {useDispatch, useSelector} from "react-redux";

const Register = () => {

  /* Estado global */
  const dispatch = useDispatch();

  /* Estados locales */
  const [showPassword, SetShowPassword] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [property]: value });
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      dispatch(postUser(userData));
      alert("CONDUCTOR CREADO CON EXITO!!")
     
    };

  return (
    <div className="bg-p100 p-8 rounded-xl w-auto  lg:w-[450px]">
      <h1 className="text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8">
        Crear <span className="text-primary">cuenta</span>
      </h1>
      <form className="mb-8  text-white" onSubmit={handleSubmit}>
        <button
          className="flex items-center justify-center py-3 px-4 gap-4 bg-secondary-900 w-full rounded-full mb-8
        text-gray-100"
        >
          <img
            src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png"
            className="w-4 h-4"
          />
          Registrate con google
        </button>
 
        <div className="relative mb-4">
          
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
            placeholder="Correo electrónico"
          />
        </div>
 
        <div className="relative mb-4">
          
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
            placeholder="Contraseña"
          />
        </div>
 
  
        <div>
          <button
            type="submit"
            className="bg-s300 text-black uppercase font-bold text-sm w-full py-3 px-4 rounded-lg hover:text-gray-100 transition-colors"
          >
            Registrarme
          </button>
        </div>
      </form>

      <span className="flex justify-center gap-2">
        ¿Ya tienes cuenta?
        <Link
          to="/auth/"
          className="text-primary hover:text-gray-100 transition-colors "
        >
          Ingresa
        </Link>
      </span>
    </div>
  );
};

export default Register;
