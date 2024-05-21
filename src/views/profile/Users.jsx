// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect, useState } from 'react';
// import { getAllUsers } from '../../redux/actions/index'
// // import  Pagination  from '../../components/Pagination'

// const Users = () => {
//     const dispatch = useDispatch();
//     const allUsers = useSelector ((state)=>state.allUsers)
//     const [currentPage, setCurrentPage] = useState(1);
//     const usersPerPage = 4;

//     useEffect(()=>{
//         dispatch(getAllUsers())
//     }, [dispatch])

//     // Calcular el índice inicial y final de los usuarios en la página actual
//     const indexOfLastUser = currentPage * usersPerPage;
//     const indexOfFirstUser = indexOfLastUser - usersPerPage;
//     const currentUsers = allUsers.slice(indexOfFirstUser, indexOfLastUser);

//     // Cambiar a la página siguiente
//     const nextPage = () => {
//         setCurrentPage(currentPage + 1);
//     };

//     // Cambiar a la página anterior
//     const prevPage = () => {
//         setCurrentPage(currentPage - 1);
//     };

//   return(
//     <div className="lg:flex justify-center gap-4 items-stretch">
//     <div className="bg-white md:p-2 p-6 rounded-lg border border-gray-200 mb-4 lg:mb-0 shadow-md lg:w-[85%]">
//     <table className="table-auto w-full">
//         <thead>
//             <tr>
//                 <th className="px-4 py-2 text-left border-b-2 w-full">
//                     <h2 className="text-ml font-bold text-gray-600">Usuarios</h2>
//                 </th>
//             </tr>
//         </thead>
//             {currentUsers.map((user) => (
//                 <div key={user.id}>
//                     <p>Nombre: {user?.name}</p>
//                     <p>Teléfono: {user.cel_Phone_Number}</p>
//                     <p>Documento: {user.cedula}</p>
//                     <p>Edad: {user.age}</p>
//                     <p>Email: {user.email}</p>
//                     <p>Verificación de email: {user.emailVerified}</p>
//                     <p>Contraseña: {user.password}</p>
//                     <p>Categoría: {user.category}</p>
//                     <p>Rol: {user.role}</p>
//                     <hr />
//                 </div>
//             ))}
//             </table>
//             <div>
//         </div >
//         <div className='flex justify-center gap-4 mt-4'>
//                 <button className='bg-p300 hover:bg-p500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
//                 onClick={prevPage} disabled={currentPage === 1}>
//                     Anterior
//                 </button>
//                 <button className='bg-p300 hover:bg-p500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
//                 onClick={nextPage} disabled={indexOfLastUser >= allUsers.length}>
//                     Siguiente
//                 </button>
//                 </div>
//             </div>
//         </div>

//   )
// }

// export default Users;
