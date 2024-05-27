import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setInfoUserLogged } from "../../redux/actions/index";
import UserLayout from "./UserLayout";

const Profile = () => {

  const dispatch = useDispatch();
  const userDetail = useSelector((state) => state.userDetail);
  const userId = userDetail.id
  console.log(userId)
  
  useEffect(() => {
    if (userId) {
    dispatch(setInfoUserLogged(userId));
    
    }
  }, [dispatch, userId]);

  return (
    <UserLayout>
      <div class="bg-white overflow-hidden shadow rounded-lg border mt-28">
        <div class="px-4 py-5 sm:px-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Mi perfil
          </h3>
          {/* <p class="mt-1 max-w-2xl text-sm text-gray-500">
            This is some information about the user.
        </p> */}
        </div>
        <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl class="sm:divide-y sm:divide-gray-200">
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Nombre y apellido
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <p>{userDetail?.name}</p>
              </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Email
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <p>{userDetail?.email}</p>
              </dd>
            </div>
            {/* <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                DNI
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <p>{userDetail?.cedula}</p>
              </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Teléfono
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <p>{userDetail?.cel_Phone_Number}</p>
              </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Edad
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <p>{userDetail?.age}</p>
              </dd>
            </div> */}
          </dl>
        </div>
      </div>
    </UserLayout>

  );
};
export default Profile;