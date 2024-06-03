import React, { useState } from 'react';
import EnlistmentForm from './EnlistmentForm';
import EnlistmentTable from './EnlistmentTable';
import icon_crear from '../../../assets/Icon_crear.svg';

const Enlistments = () => {
    const [enlistments, setEnlistments] = useState([]);
    const [enlistment, setEnlistment] = useState({});
    const [editOnOff, setEditOnOff] = useState(true);
    const [deleteOnOff, setDeleteOnOff] = useState(true);
    const [actualBackOrder, setActualBackOrder] = useState('')
    const [selectSubmit, setSelectSubmit] = useState('')
    const [createOnOff, setCreateOnOff] = useState(false) 

    

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

    const handleCreateChange = () => {
        if (createOnOff === false) {
            setCreateOnOff(true)
            setSelectSubmit('post')
        }
    }

    return (

        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 m-8">
            {/*<div className="md:w-1/4">

                <h1 className="text-2xl font-semibold mb-4">Enlistments</h1>
                <EnlistmentForm  
                    setDeleteOnOff = {setDeleteOnOff}
                    editOnOff= {editOnOff}
                    setEditOnOff = {setEditOnOff}
                    actualBackOrder = {actualBackOrder}
                    selectSubmit = {selectSubmit}
                    setSelectSubmit = {setSelectSubmit}
                    createOnOff = {createOnOff}
                    setCreateOnOff = {setCreateOnOff}
                    />
            </div>*/}
            <div className='icon-create-container'>
                <img src={icon_crear} alt="crear" 
                    onClick={handleCreateChange} 
                    className='icon-create'
                    style={{ cursor: 'pointer' }} />
            </div>
            <div className="md:w-2/3">
                <EnlistmentTable 
                    handleEdit={handleEdit} 
                    handleDelete={handleDelete} 
                    editOnOff= {editOnOff}
                    setEditOnOff = {setEditOnOff}
                    deleteOnOff = {deleteOnOff}
                    setDeleteOnOff = {setDeleteOnOff}
                    actualBackOrder = {actualBackOrder}
                    setActualBackOrder = {setActualBackOrder}   
                    setSelectSubmit = {setSelectSubmit}     
                    createOnOff = {createOnOff}
                    setCreateOnOff = {setCreateOnOff}
                    />
            </div>
        </div>
    );
};

export default Enlistments;