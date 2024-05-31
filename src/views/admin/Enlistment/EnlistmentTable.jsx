import React from 'react';

const EnlistmentTable = ({ enlistments, handleEdit, handleDelete }) => {
    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Solicitante</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Receptor</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado de envío</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Costo</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Calificación</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {enlistments.map((enlistment, index) => (
                    <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">{enlistment.solicitante}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{enlistment.receptor}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{enlistment.fecha}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{enlistment.estado}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{enlistment.costo}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{enlistment.calificacion}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button onClick={() => handleEdit(index)} className="text-indigo-600 hover:text-indigo-900 mr-2">Editar</button>
                            <button onClick={() => handleDelete(index)} className="text-red-600 hover:text-red-900">Eliminar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default EnlistmentTable;