import React from 'react';
import icon_crear from '../../../assets/Icon_crear.svg';
import { putEnlistment } from '../../../redux/actions';
import { useDispatch } from 'react-redux';

const EnlistmentForm = ({
     editOnOff,
     setEditOnOff,
     setDeleteOnOff,
     selectSubmit,
     setSelectSubmit,
     createOnOff,
     setCreateOnOff,
     actualBackOrder,
    }) => {
    
    const dispatch = useDispatch();
    const enlistment = actualBackOrder; 

    const handleCreateChange = () => {
        if (createOnOff === false) {
            setCreateOnOff(true)
            setSelectSubmit('post')
        }
    }
    
    const handleSave = (e) => {
        e.preventDefault();
        
    };

    const handleChange = (e) => {
        console.log(e.target.value);
    };
    
    
    return (
        <div>
            <div className='icon-create-container'>
                <img src={icon_crear} alt="crear" 
                    onClick={handleCreateChange} 
                    className='icon-create'
                    style={{ cursor: 'pointer' }} />
            </div>
            <form className="space-y-4" onSubmit={handleSave}>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Solicitante</label>
                    <input
                        type="text"
                        name="solicitante"
                        value={enlistment && enlistment.state}
                        onChange={handleChange}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Receptor</label>
                    <input
                        type="text"
                        name="receptor"
                        value={enlistment && enlistment.guide_number}
                        onChange={handleChange}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Fecha</label>
                    <input
                        type="date"
                        name="fecha"
                        value={enlistment && enlistment.distance}
                        onChange={handleChange}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Estado de envío</label>
                    <input
                        type="text"
                        name="estado"
                        value={enlistment && enlistment.delivery_time}
                        onChange={handleChange}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Costo</label>
                    <input
                        type="number"
                        name="costo"
                        value={enlistment && enlistment.order_time}
                        onChange={handleChange}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Calificación</label>
                    <input
                        type="number"
                        name="calificacion"
                        value={enlistment && enlistment.price_order}
                        onChange={handleChange}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Guardar
                </button>
            </form>
        </div>
        
    );
};

export default EnlistmentForm;