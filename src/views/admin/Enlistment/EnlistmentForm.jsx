import React from 'react';

const EnlistmentForm = ({ enlistment, setEnlistment, handleSave }) => {
    const handleChange = (e) => {
        setEnlistment({ ...enlistment, [e.target.name]: e.target.value });
    };

    return (
        <form className="space-y-4" onSubmit={handleSave}>
            <div>
                <label className="block text-sm font-medium text-gray-700">Solicitante</label>
                <input
                    type="text"
                    name="solicitante"
                    value={enlistment.solicitante}
                    onChange={handleChange}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Receptor</label>
                <input
                    type="text"
                    name="receptor"
                    value={enlistment.receptor}
                    onChange={handleChange}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    value={enlistment.fecha}
                    onChange={handleChange}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Estado de envío</label>
                <input
                    type="text"
                    name="estado"
                    value={enlistment.estado}
                    onChange={handleChange}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Costo</label>
                <input
                    type="number"
                    name="costo"
                    value={enlistment.costo}
                    onChange={handleChange}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Calificación</label>
                <input
                    type="number"
                    name="calificacion"
                    value={enlistment.calificacion}
                    onChange={handleChange}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Guardar
            </button>
        </form>
    );
};

export default EnlistmentForm;