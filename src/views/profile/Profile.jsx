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
      <div class="bg-white overflow-hidden shadow rounded-lg border">
    <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
            User Profile
        </h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">
            This is some information about the user.
        </p>
    </div>
    <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl class="sm:divide-y sm:divide-gray-200">
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Full name
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    John Doe
                </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Email address
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    johndoe@example.com
                </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Phone number
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    (123) 456-7890
                </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Address
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    123 Main St
                     Anytown, USA 12345
                </dd>
            </div>
        </dl>
    </div>
</div>
      {/* <div className="flex h-screen absolute top-0 w-full">
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
      </div> */}
    </UserLayout>

  );
};

export default Profile;

