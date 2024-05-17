import React from "react";
import { Link } from "react-router-dom";

/* icons */
import { RiMailLine } from "react-icons/ri";

const ForgetPassword = () => {
  return (
    <div className="bg-p100 p-8 rounded-xl w-auto  lg:w-[450px]">
      <h1 className="text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8">
        Recuperar <span className="text-primary">contraseña</span>
      </h1>
      <form className="mb-8">
        <div className="relative mb-8">
          <RiMailLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
          <input
            type="email"
            className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
            placeholder="Correo electrónico"
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-s300 text-black uppercase font-bold text-sm w-full py-3 px-4 rounded-lg hover:text-gray-100 transition-colors"
          >
            Enviar instrucciones
          </button>
        </div>
      </form>
      <div className="flex flex-col flex-gap-4 items-center ">
        <span className="flex items-center gap-2">
          ¿Ya tienes cuenta?
          <Link
            to="/auth"
            className="text-primary hover:text-gray-100 transition-colors "
          >
            Ingresa
          </Link>
        </span>
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

export default ForgetPassword;
