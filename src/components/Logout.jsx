import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setIsLogged } from "../redux/actions/index";
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logoutSuccess = () => {
        console.log("Logout success");
        dispatch(setIsLogged(false));
        navigate("/header");
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