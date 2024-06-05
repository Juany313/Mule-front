import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increasePageDrivers, decreasePageDrivers, deleteDrivers, getDrivers } from '../../../redux/actions/index';

function DriversTable({ drivers }) {
    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.currentPageDrivers);
  const itemsPerPage = useSelector(state => state.itemsPerPageDrivers);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedDrivers = drivers?.slice(startIndex, endIndex);

  function handleDelete(id){
    //console.log("aca lo que hay en searchString",searchString);
    dispatch(deleteDrivers(id))
    dispatch(getDrivers())
    
  }
console.log("displayedDriversrrrrrrrrrrr", displayedDrivers);
  return (
    <div className=" overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3  text-xs text-center font-medium text-gray-500 uppercase tracking-wider ">Eliminar</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {displayedDrivers?.map((fila, index) => (
            
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{fila.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{fila.email}</td>
              <td className="px-6 py-4 whitespace-nowrap flex items-center justify-center"><button 
                 
                onClick={() => handleDelete(fila.id)}>X</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="absolute bottom-0 left-0 w-full py-4 flex justify-center">
        {/* Botón Anterior */}
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
        {/* Botón Siguiente */}
        <button
          onClick={() => {
              dispatch(increasePageDrivers())
              console.log("currentPage",currentPage);
              console.log("endIndex",endIndex);
          }}
          disabled={endIndex >= drivers?.length}
          className="mx-1 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default DriversTable;

