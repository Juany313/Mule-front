import React from 'react';
import icon_cancel from '../../../assets/Icon_cancelar.svg';
import { deleteEnlistment } from '../../../redux/actions';
import { useDispatch } from 'react-redux';

const EnlistmentDelete = (
    {
        setShowModalDelete,
        actualBackOrder,
        currentEnlistmentId
    }
) => {
    const enlistment = actualBackOrder; 
    const dispatch = useDispatch();
    const handleCancel = () => {
        setShowModalDelete(false);
    };

    const onDelete = () => {
        setShowModalDelete(false);
        dispatch(deleteEnlistment(currentEnlistmentId));
        window.location.reload();
    };



    return (
        <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center '>
            <div className='bg-white p-5 rounded flex-col justify-center items-center gap-5 mt-20'  style={{ width: '500px', maxHeight: '80vh', overflowY: 'auto' }}>
                <div className='icon-cancel-container'style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <img src={icon_cancel} alt="crear" 
                        onClick={handleCancel} 
                        className='icon-create'
                        style={{ cursor: 'pointer' }} />
                </div>
                
                <div className="p-4 bg-white rounded shadow-lg">
                    <h3 className="text-lg font-semibold mb-2">Información Detallada del envío</h3>
                    <p className="mb-4">¿Estás seguro de que quieres borrar este elemento?</p>
                    <button onClick={onDelete} className="bg-red-500 text-white px-4 py-2 rounded shadow">Confirmar</button>
                </div>

            </div>
        </div>
        
        
    );
};

export default EnlistmentDelete;