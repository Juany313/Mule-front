import React from 'react';
import icon_cancel from '../../../assets/Icon_cancelar.svg';
import { useDispatch } from 'react-redux';
import { createOrder } from '../../../redux/actions';
import { useEffect } from 'react';

const EnlistmentForm = ({
     setShowModal,
     setSelectSubmit,
     createOnOff,
     setCreateOnOff,
     actualBackOrder,
     setActualBackOrder,
    }) => {

    

    const dispatch = useDispatch();
    
    const handleSave = (e) => {
        e.preventDefault();
        dispatch(createOrder(actualBackOrder));
        setShowModal(false);
           
    };

    const handleCancel = () => {
        setShowModal(false);
    };

    useEffect(() => {
        console.log('actualBackOrder', actualBackOrder);
    }, [actualBackOrder]);

    const handleChange = (e) => {
        const { value } = e.target;
        setActualBackOrder({
            ...actualBackOrder,
            [e.target.name]: value
        });
    };
    
    
    return (
        <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center '>
            <div className='bg-white p-5 rounded flex-col justify-center items-center gap-5 mt-20'  style={{ width: '500px', maxHeight: '80vh', overflowY: 'auto' }}>
                a partir de este div se renderiza el formulario de creación de una orden de envío, no tocar arriba
                <div className='icon-create-container'style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <img src={icon_cancel} alt="crear" 
                        onClick={handleCancel} 
                        className='icon-create'
                        style={{ cursor: 'pointer' }} />
                </div>
                <form className="space-y-4" onSubmit={handleSave}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nombre del usuario </label>
                        <input
                            type="text"
                            name="name_claimant"
                            value={actualBackOrder.name_claimant}
                            onChange={handleChange}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">DNI</label>
                        <input
                            type="number"
                            name="cedula_claimant"
                            value={actualBackOrder.cedula_claimant}
                            onChange={handleChange}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Telefono del usuario</label>
                        <input
                            type="number"
                            name="cellphone_claimant"
                            value={actualBackOrder.cellphone_claimant}
                            onChange={handleChange}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nombre del remitente</label>
                        <input
                            type="text"
                            name="name_transmiter"
                            value={actualBackOrder.name_transmiter}
                            onChange={handleChange}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Apellido del remitente</label>
                        <input
                            type="text"
                            name="surname_transmiter"
                            value={actualBackOrder.surname_transmiter}
                            onChange={handleChange}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Telefono del remitente</label>
                        <input
                            type="number"
                            name="cellphone_transmiter"
                            value={actualBackOrder.cellphone_transmiter}
                            onChange={handleChange}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Ciudad de Origen</label>
                        <input
                            type="text"
                            name="city_transmiter"
                            value={actualBackOrder.city_transmiter}
                            onChange={handleChange}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Dirección de Origen</label>
                        <input
                            type="text"
                            name="address_transmiter"
                            value={actualBackOrder.address_transmiter}
                            onChange={handleChange}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nombre del destinatario</label>
                        <input
                            type="text"
                            name="name_receiver"
                            value={actualBackOrder.name_receiver}
                            onChange={handleChange}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Telefono del destinatario</label>
                        <input
                            type="number"
                            name="celphone_receiver"
                            value={actualBackOrder.celphone_receiver}
                            onChange={handleChange}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Ciudad de entrega</label>
                        <input
                            type="text"
                            name="city_receiver"
                            value={actualBackOrder.city_receiver}
                            onChange={handleChange}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Dirección de Entrega</label>
                        <input
                            type="text"
                            name="address_receiver"
                            value={actualBackOrder.address_receiver}
                            onChange={handleChange}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Peso del pedido</label>
                        <input
                            type="number"
                            name="weight"
                            value={actualBackOrder.weight}
                            onChange={handleChange}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Tipo de envío</label>
                        <select 
                        name="shipment_type" 
                        value={actualBackOrder.shipment_type}
                        onChange={handleChange}
                        >
                            <option >Sucursal a Puerta</option>
                            <option >Sucursal a Sucursal</option>
                            <option >Puerta a Sucursal</option>
                            <option >Puerta a Puerta</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Medida</label>
                        <select 
                            name="" 
                            id=""
                            value={actualBackOrder.measure}
                            >
                            <option value="small">Pequeño</option>
                            <option value="medium">Mediano</option>
                            <option value="large">Grande</option>

                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Valor declarado</label>
                        <input
                            type="text"
                            name="valor"
                            value={actualBackOrder.declared_value}
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

export default EnlistmentForm;