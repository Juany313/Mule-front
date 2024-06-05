import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increasePageCustomers, decreasePageCustomers } from '../../../redux/actions/index';

let users = [
  {name: "Juany", email: "lala@gmail.com", state: "active"},
  {name: "Juany", email: "lala@gmail.com", state: "active"},
  {name: "Juany", email: "lala@gmail.com", state: "active"},
  {name: "Juany", email: "lala@gmail.com", state: "active"},
  {name: "Juany", email: "lala@gmail.com", state: "active"},
  {name: "Jany", email: "lala@gmail.com", state: "active"},
  {name: "Jany", email: "lala@gmail.com", state: "active"},
  {name: "Jany", email: "lala@gmail.com", state: "active"},
  {name: "Jany", email: "lala@gmail.com", state: "active"},
  {name: "Juany", email: "lala@gmail.com", state: "active"},
  {name: "Juany", email: "lala@gmail.com", state: "active"},
  {name: "Juany", email: "lala@gmail.com", state: "active"},
];

function DriversTable() {
    const dispatch = useDispatch();

    /* Estado global */
  const allUsers = useSelector((state)=> state.allUsers);

  console.log("allUsers tabla",allUsers );
    const currentPage = useSelector(state => state.currentPageCustomers);
  const itemsPerPage = useSelector(state => state.itemsPerPageCustomers);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedUsers = users?.slice(startIndex, endIndex);
  console.log("startIndex", startIndex);
  console.log("endIndex", endIndex);
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
        {/* Botón Anterior */}
        <button
          onClick={() => {
              dispatch(decreasePageCustomers())
              console.log("startIndex",startIndex);
          }}
          //disabled={currentPage === 1}
          className="mx-1 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Anterior
        </button>
        {/* Botón Siguiente */}
        <button
          onClick={() => {
              dispatch(increasePageCustomers())
              console.log("currentPage",currentPage);
              console.log("endIndex",endIndex);
          }}
          //disabled={endIndex >= allUsers?.length}
          className="mx-1 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default DriversTable;