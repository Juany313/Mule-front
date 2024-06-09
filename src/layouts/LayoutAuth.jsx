import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import parseJwt from "../helpers/parseJwt";
import { useSelector } from "react-redux";
import { setInfoUserLogged } from "../redux/actions";
import { useDispatch } from "react-redux";

const LayoutAuth = () => {
  const dispatch = useDispatch();

  const infoUserLogged = useSelector((state) => state.infoUserLogged);

  useEffect(
    () => {
      if (localStorage.getItem("token")) {
        dispatch(setInfoUserLogged(parseJwt(localStorage.getItem("token"))));
      }
    },
    [
      // infoUserLogged.id
    ]
  );

  return (
    <div className=" min-h-screen flex justify-center items-center">
      <Outlet />
    </div>
  );
};

export default LayoutAuth;
