import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserDetail } from "../../redux/actions/index";
import UserLayout from "./UserLayout";

const Profile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const userDetail = useSelector((state) => state.userDetail);

  useEffect(() => {
    dispatch(getUserDetail(id));
  }, [dispatch, id]);

  return (
    <UserLayout>
      <div className="flex h-screen absolute top-0 w-full">
        <div className="flex-1 bg-white pt-28 px-10 border border-gray-200 mb-4 lg:mb-0 shadow-md overflow-y-auto">
          <div className="container max-w-15 mx-auto my-24 border-2 rounded-xl bg-gradient-to-r from-p500 to-p100 shadow-md">
            <div className="m-5">
              <p className="font-ArchivoBlack font-semibold text-2xl text-white text-center">MI PERFIL</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-5">
              <div className="m-5">
                <div className="flex-1 p-4 overflow-y-auto border-2 border-s300 rounded-xl shadow-md bg-gray-200 ">
                  <h5 className="font-semibold mb-2">DATOS PERSONALES</h5>
                  <p>Usuario: {userDetail?.nickname}</p>
                  <p>Email: {userDetail?.email}</p>
                  <p>Nombre y apellido: {userDetail?.name}</p>
                  <p>DNI: {userDetail?.cedula}</p>
                  <p>Teléfono: {userDetail?.cel_Phone_Number}</p>
                  <p>Categoría: {userDetail?.category}</p>
                  <p>Edad: {userDetail?.age}</p>
                </div>
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>

  );
};

export default Profile;

