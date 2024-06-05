import React from 'react';
import { useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { getAllUsers} from '../../../redux/actions';
import useUser from '../../../hooks/useUser';
import CustomerRow from './CustomerRow';

const CustomerTable = (
   {
    setShowModalDelete,
    setCurrentUserId
   }
) => {
    const { allUsers } = useUser();
    const dispatch = useDispatch();
    const [dataLoaded, setDataLoaded] = useState(false);

const chargingData = async () => {
    if (!dataLoaded) {
        await dispatch(getAllUsers());
        setDataLoaded(true); 
    }
}

useEffect(() => {
    chargingData();
}, [dispatch, allUsers]);
    

    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Usuario </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Verificación de Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DNI</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Telefono</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Taza de Categoria</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Categoria</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Foto</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                </tr>
            </thead>
            {
                allUsers &&  allUsers.map((user) => {
                    return (
                        <CustomerRow
                            user={user}
                            setShowModalDelete={setShowModalDelete}
                            setCurrentUserId={setCurrentUserId}
                            />
                    )
                })

            }

        </table>
    );
};

export default CustomerTable;



/* import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increasePageDrivers, decreasePageDrivers } from '../../../redux/actions/index';

function DriversTable() {
    const dispatch = useDispatch();


  const allUsers = useSelector((state)=> state.allUsers);

    const currentPage = useSelector(state => state.currentPageDrivers);
  const itemsPerPage = useSelector(state => state.itemsPerPageDrivers);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedUsers = allUsers?.slice(startIndex, endIndex);

  return (
    <div className=" overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
          
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {displayedUsers?.map((fila, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{fila.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{fila.email}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
      <div className="absolute bottom-0 left-0 w-full py-4 flex justify-center">
       
        <button
          onClick={() => {
              dispatch(decreasePageDrivers())
              console.log("startIndex",startIndex);
          }}
          disabled={currentPage === 1}
          className="mx-1 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Anterior
        </button>
       
        <button
          onClick={() => {
              dispatch(increasePageDrivers())
              console.log("currentPage",currentPage);
              console.log("endIndex",endIndex);
          }}
          disabled={endIndex >= allUsers?.length}
          className="mx-1 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default DriversTable; */