import React from 'react';
import icon_cancel from '../../../assets/Icon_cancelar.svg';
import { putDriver } from '../../../redux/actions';
import { useDispatch } from 'react-redux';

const DriverFormEdit = (
    {
        setShowModalEdit,
        actualBackOrder
    }
) => {
    const Driver = actualBackOrder; 
    const dispatch = useDispatch();

    const handleCreateChange = () => {
        if (createOnOff === false) {
            setCreateOnOff(true)
            setSelectSubmit('post')
        }
    }
    
    const handleSave = (e) => {
        e.preventDefault();
        setShowModalEdit(false);
           
    };

    const handleCancel = () => {
        setShowModalEdit(false);
    };

    const handleChange = (e) => {
        console.log(e.target.value);
    };
    
    
    return (
        <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center '>
            <div className='bg-white p-5 rounded flex-col justify-center items-center gap-5 mt-20'  style={{ width: '500px', maxHeight: '80vh', overflowY: 'auto' }}>
                <div className='icon-create-container'style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <img src={icon_cancel} alt="crear" 
                        onClick={handleCancel} 
                        className='icon-create'
                        style={{ cursor: 'pointer' }} />
                </div>
                <form className="space-y-4" onSubmit={handleSave}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nombre </label>
                        <input
                            type="text"
                            name="name_claimant"
                            value={actualBackOrder.name}
                            onChange={handleChange}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="number"
                            name="cedula_claimant"
                            value={actualBackOrder.email}
                            onChange={handleChange}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Deuda</label>
                        <input
                            type="number"
                            name="cellphone_claimant"
                            value={actualBackOrder.debit}
                            onChange={handleChange}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Antiguedad</label>
                        <input
                            type="text"
                            name="name_transmiter"
                            value={actualBackOrder.antiquity}
                            onChange={handleChange}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Estado</label>
                        <input
                            type="text"
                            name="surname_transmiter"
                            value={actualBackOrder.status}
                            onChange={handleChange}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>



                    <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Guardar
                    </button>
                </form>
            </div>
        </div>
        
        
    );
};

export default DriverFormEdit;