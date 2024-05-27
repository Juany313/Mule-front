import React, { useState } from "react";
import { Link } from "react-router-dom";
import validate from "../../utils"


/* actions */
import {postUser} from '../../redux/actions/index'

/* icons */
import { RiMailLine, RiLock2Line } from "react-icons/ri";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { TbUserSquare } from "react-icons/tb";

/* hooks */
import {useDispatch} from "react-redux";

const Register = () => {

  /* Estado global */
  const dispatch = useDispatch();

  /* Estados locales */
  const [submitButtonClicked, setSubmitButtonClicked] = useState(false);
  const [showPassword, SetShowPassword] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [property]: value });

    setErrors((prevErrors) => {
      const newErrors = validate({
        ...userData,
        [property]: value, 
      });
  

      return newErrors;
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitButtonClicked(true);
    if (errors.name || errors.email || errors.password) {
      return; // No se envía la solicitud si hay errores presentes
    }
    const result = await dispatch(postUser(userData));
    console.log("result.success", result);
    if (result.success) {
      alert("USUARIO CREADO CON EXITO!!");
    } else {
      alert("Ocurrió un error al crear el usuario");
    }
  };
  
  
    

  return (
    <div className="bg-p100 p-8 rounded-xl w-auto  lg:w-[450px]">
      <h1 className="text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8">
        Crear <span className="text-primary">cuenta</span>
      </h1>
      <form className="mb-8  " onSubmit={handleSubmit}>

        <div className="mb-4">
            <div className="relative ">
            <TbUserSquare className="absolute top-1/2 -translate-y-1/2 left-2 text-black" />
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleChange}
                className="py-3 pl-8 pr-8  w-full outline-none rounded-lg focus:border focus:border-black"
                placeholder="Nombre"
              />
            </div>
              {submitButtonClicked && errors.name && <span className="text-red-800 mb-4">{errors.name}</span>}
        </div>

        <div className="mb-4">
            <div className="relative ">
            <RiMailLine className="absolute top-1/2 -translate-y-1/2 left-2 text-black" />
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                className="py-3 pl-8 pr-8  w-full outline-none rounded-lg focus:border focus:border-black"
                placeholder="Correo electrónico"
              />
            </div>
              {submitButtonClicked && errors.email && <span className="text-red-800 mb-4">{errors.email}</span>}
        </div>
        <div className=" mb-2">
          <div className="relative">
            <RiLock2Line className="absolute top-1/2 -translate-y-1/2 left-2 text-black" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={userData.password}
              onChange={handleChange}
              className="py-3 pl-8 pr-8  w-full outline-none rounded-lg focus:border focus:border-black"
              placeholder="Contraseña"
            />
            
            {showPassword ? (
              <LuEye
                onClick={() => SetShowPassword(!showPassword)}
                className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-black"
              />
            ) : (
              <LuEyeOff
                onClick={() => SetShowPassword(!showPassword)}
                className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-black"
              />
            )}
          </div>
          {submitButtonClicked && errors.password && <span className="text-red-800 mb-4">{errors.password}</span>}
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