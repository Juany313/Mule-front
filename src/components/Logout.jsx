import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setIsLogged } from "../redux/actions/index";
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";


const Logout = () => {
    const dispatch = useDispatch();
    
    const navigate = useNavigate();
    const { logout } = useAuth0();
    const logoutSuccess = () => {
        localStorage.removeItem("token");
        console.log("Logout success");
        dispatch(setIsLogged(false));
        logout({ logoutParams: { returnTo: "http://localhost:4000/header" } })
    }
    return (
        <button 
            onClick={logoutSuccess}
            className="text-primary font-normal hover:text-white transition-colors p-2 bg-red-500 py-2 px-4 rounded"
        >
            Cerrar Sesion
        </button>
    );
}

export default Logout;