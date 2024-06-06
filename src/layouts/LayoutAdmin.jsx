import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { setInfoUserLogged } from "../redux/actions";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import parseJwt from "../helpers/parseJwt";

const LayoutAdmin = () => {
  const dispatch = useDispatch();

  const infoUserLogged = useSelector((state) => state.infoUserLogged);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(setInfoUserLogged(parseJwt(localStorage.getItem("token"))));
    }
  }, [infoUserLogged.id]);

  return (
    <div className="min-h-screen ">
      <div>
        <Header />
      </div>
      <Outlet />
    </div>
  );
};

export default LayoutAdmin;
