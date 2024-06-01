import React, { useState } from 'react';
import EnlistmentForm from './EnlistmentForm';
import EnlistmentTable from './EnlistmentTable';

const Enlistments = () => {
    const [enlistments, setEnlistments] = useState([]);
    const [enlistment, setEnlistment] = useState({});

    const handleSave = (e) => {
        e.preventDefault();
        // Aquí irá la lógica para guardar o actualizar los datos de enlistamiento
    };

    const handleEdit = (index) => {
        // Aquí irá la lógica para editar un enlistamiento
    };

    const handleDelete = (index) => {
        // Aquí irá la lógica para eliminar un enlistamiento
    };

    return (
        <div className="flex flex-col  md:flex-row md:space-x-6 space-y-6 md:space-y-0 m-8">
            <div className="md:w-1/3">
                <h1 className="text-2xl font-semibold mb-4">Enlistments</h1>
                <EnlistmentForm enlistment={enlistment} setEnlistment={setEnlistment} handleSave={handleSave} />
            </div>
            <div className="md:w-2/3">
                <EnlistmentTable enlistments={enlistments} handleEdit={handleEdit} handleDelete={handleDelete} />
            </div>
        </div>
    );
};

export default Enlistments;