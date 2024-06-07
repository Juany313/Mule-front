import React from 'react';
import icon_cancel from '../../../assets/Icon_cancelar.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setInfoUserLogged, createOrderAdmin } from '../../../redux/actions';
import { useEffect, useState, useRef } from 'react';
import { validateEnlistment } from '../../../helpers/validates.js'
import parseJwt from '../../../helpers/parseJwt.js';
import axios from 'axios'

const EnlistmentForm = ({
    setShowModal,
    setSelectSubmit,
    createOnOff,
    setCreateOnOff,
    actualBackOrder,
    setActualBackOrder,
}) => {


    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});
    const inputRef = useRef(null);
    const infoUserLogged = useSelector((state) => state.infoUserLogged)

    useEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch(
                setInfoUserLogged(
                    parseJwt(localStorage.getItem('token'))))
                }
        }, [dispatch]
    );

    const handleSave = (e) => {
        e.preventDefault();
        if (infoUserLogged.id){
        dispatch(createOrderAdmin(actualBackOrder, infoUserLogged.id));
        setShowModal(false);
    }
}

const handleCancel = () => {
    setShowModal(false);
};

useEffect(() => {
    if (actualBackOrder) {
        setErrors(validateEnlistment(actualBackOrder))
    }
}, [actualBackOrder]);


const handleChange = (e) => {
    const { name, value } = e.target;
    setActualBackOrder({
        ...actualBackOrder,
        [name]: value
    });
};


const handleSelectChange = (e) => {
    const { name, value } = e.target;
    if (value !== 'none') {
        setActualBackOrder((prevState) => {
            const updatedField = Array.isArray(prevState[name])
                ? prevState[name].includes(value)
                    ? prevState[name]
                    : [...prevState[name], value]
                : value;

            return {
                ...prevState,
                [name]: updatedField,
            };
        });
    }
};

const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {

        try {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", import.meta.env.VITE_PRESET);
            const res = await axios.post(
                `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME
                }/image/upload`,
                formData
            );
            const { url } = res.data;
            setActualBackOrder({ ...actualBackOrder, product_image: url })
        } catch (error) {
            console.log('error al cargar la imagen')
        }
    }
}

return (
    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center '>
        <div className='bg-white p-5 rounded flex-col justify-center items-center gap-5 mt-20' style={{ width: '500px', maxHeight: '80vh', overflowY: 'auto' }}>
            CREAR PEDIDO
            <div className='icon-create-container' style={{ display: 'flex', justifyContent: 'flex-end' }}>
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
                    {errors.name_claimant && <p style={{ color: 'darkgrey' }}>{errors.name_claimant}</p>}
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
                    {errors.cedula_claimant && <p style={{ color: 'darkgrey' }}>{errors.cedula_claimant}</p>}
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
                    {errors.cellphone_claimant && <p style={{ color: 'darkgrey' }}>{errors.cellphone_claimant}</p>}
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
                    {errors.name_transmiter && <p style={{ color: 'darkgrey' }}>{errors.name_transmiter}</p>}
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
                    {errors.surname_transmiter && <p style={{ color: 'darkgrey' }}>{errors.surname_transmiter}</p>}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Telefono del remitente</label>
                    <input
                        type="number"
                        name="celphone_transmiter"
                        value={actualBackOrder.celphone_transmiter}
                        onChange={handleChange}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errors.celphone_transmiter && <p style={{ color: 'darkgrey' }}>{errors.celphone_transmiter}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Provincia Origen</label>
                    <select
                        name="city_transmiter"
                        value={actualBackOrder.city_transmiter}
                        onChange={(e) => handleSelectChange(e)}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option value="">Seleccionar</option>
                        <option value="buenos aires">Buenos Aires</option>
                        <option value="cordoba">Córdoba</option>
                        <option value="corrientes">Corrientes</option>
                        <option value="entre rios">Entre Ríos</option>
                        <option value="santa fe">Santa Fe</option>
                    </select>
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
                    {errors.address_transmiter && <p style={{ color: 'darkgrey' }}>{errors.address_transmiter}</p>}
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
                    {errors.name_receiver && <p style={{ color: 'darkgrey' }}>{errors.name_receiver}</p>}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Teléfono del destinatario</label>
                    <input
                        type="number"
                        name="celphone_receiver"
                        value={actualBackOrder.celphone_receiver}
                        onChange={handleChange}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errors.celphone_receiver && <p style={{ color: 'darkgrey' }}>{errors.celphone_receiver}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Provincia Destino</label>
                    <select
                        name="city_receiver"
                        value={actualBackOrder.city_receiver}
                        onChange={(e) => handleSelectChange(e)}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option value="">Seleccionar</option>
                        <option value="buenos aires">Buenos Aires</option>
                        <option value="cordoba">Córdoba</option>
                        <option value="corrientes">Corrientes</option>
                        <option value="entre rios">Entre Ríos</option>
                        <option value="santa fe">Santa Fe</option>
                        
                    </select>
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
                    {errors.address_receiver && <p style={{ color: 'darkgrey' }}>{errors.address_receiver}</p>}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Peso del pedido (kg)</label>
                    <input
                        type="number"
                        name="weight"
                        value={actualBackOrder.weight}
                        onChange={handleChange}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errors.weight && <p style={{ color: 'darkgrey' }}>{errors.weight}</p>}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Tipo de envío</label>
                    <select
                        name="typeShipmentId"
                        value={actualBackOrder.typeShipmentId}
                        onChange={(e) => handleSelectChange(e)}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option value="">Seleccionar</option>
                        <option value="1">Sucursal a Puerta</option>
                        <option value="2">Sucursal a Sucursal</option>
                        <option value="3">Puerta a Sucursal</option>
                        <option value="4">Puerta a Puerta</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Medida</label>
                    <select
                        name="measureId"
                        value={actualBackOrder.measureId}
                        onChange={(e) => handleSelectChange(e)}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option value="">Seleccionar</option>
                        <option value="1">Pequeño</option>
                        <option value="2">Mediano</option>
                        <option value="3">Grande</option>

                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Valor declarado</label>
                    <input
                        type="number"
                        name="declared_value"
                        value={actualBackOrder.declared_value}
                        onChange={handleChange}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                     {errors.declared_value && <p style={{ color: 'darkgrey' }}>{errors.declared_value}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Selecciona tu imagen</label>
                    <input
                        type="file"
                        name="product_image"
                        ref={inputRef} onChange={handleImageChange}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {actualBackOrder.product_image && (
                        <img src={actualBackOrder.product_image} alt="product_image" className="mt-2 h-20 w-20 object-cover" />
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Método de pago</label>
                    <select
                        name="pay_method"
                        value={actualBackOrder.pay_method}
                        onChange={(e) => handleSelectChange(e)}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option value="">Seleccionar</option>
                        <option value="Efectivo">Efectivo</option>
                        <option value="Credito">Crédito</option>
                        <option value="Debito">Débito</option>
                    </select>
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