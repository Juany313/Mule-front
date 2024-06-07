import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsLogged } from "../redux/actions/index";
import { useAuth0 } from "@auth0/auth0-react";

const Logout = () => {
  const dispatch = useDispatch();

  const { logout } = useAuth0();
  const logoutSuccess = () => {
    localStorage.removeItem("token");
    dispatch(setIsLogged(false));
    logout({
      logoutParams: { returnTo: `${import.meta.env.VITE_REDIRECT_URI}/header` },
    });
  };
  return (
    <button
      onClick={logoutSuccess}
      className="text-primary font-normal hover:text-white transition-colors p-2 bg-red-500 py-2 px-4 rounded"
    >
      Cerrar Sesion
    </button>
  );
};

export default Logout;
