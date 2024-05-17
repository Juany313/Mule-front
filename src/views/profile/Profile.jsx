import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUserDetail } from '../../redux/actions/index'
import { NavProfile } from './NavProfile';



const Profile = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const userDetail = useSelector ((state)=>state.userDetail)

    useEffect(()=>{
        dispatch(getUserDetail(id))
    }, [dispatch, id])

  return (
    <>
      <NavProfile/>
    <div className="lg:flex justify-center gap-4 items-stretch">
    <div className="bg-white md:p-2 p-6 rounded-lg border border-gray-200 mb-4 lg:mb-0 shadow-md lg:w-[85%]">
    <table className="table-auto w-full">
        <thead>
            <tr>
                <th class="px-4 py-2 text-left border-b-2 w-full">
                    <h2 class="text-ml font-bold text-gray-600">Perfil del usuario</h2>
                </th>
            </tr>
        </thead>
        <p>Nombre: {userDetail.name}</p>
        <p>Teléfono: {userDetail.Cel_Phone_Number}</p>
        <p>Documento: {userDetail.cedula}</p>
        <p>Fecha de nacimiento: {userDetail.Birthdate}</p>
        <p>Email: {userDetail.email}</p>
        <p>Categoría: {userDetail.Category}</p>
        <p>Rol: {userDetail.Role}</p>          
          </table>
            </div>
    </div>
    </>
  )
}

export default Profile;
//ver imagen 

//genres: dataId.genres.map((g) => g.name),

// <h2>Pedidos del usuario:</h2>
// {userDetail.ordershipments.map((order) => (
//     <div key={order.id}>
//         <h3>Pedido {order.id}</h3>
//         <p>Nombre del reclamante: {order.name_claimant}</p>
//         <p>Cédula del reclamante: {order.cedula_claimant}</p>
//         <p>Teléfono del reclamante: {order.cellphone_claimant}</p>
//         {/* Otros detalles del pedido */}
//     </div>
// ))}