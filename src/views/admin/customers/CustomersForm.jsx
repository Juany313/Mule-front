import React from 'react';
import icon_cancel from '../../../assets/Icon_cancelar.svg';
import { useDispatch } from 'react-redux';
import { postUser } from '../../../redux/actions';
import { useEffect, useState, useRef } from 'react';
import validateCustomer from './validateCustomer.js';
import axios from 'axios'


const CustomersForm = ({
    setShowModal,
    actualBackOrder,
    setActualBackOrder
}) => {

    const dispatch = useDispatch();
    const [errors, setErrors] = useState({})
    const inputRef = useRef(null);

    const handleSave = (e) => {
        e.preventDefault();
        dispatch(postUser(actualBackOrder))
        setShowModal(false)
    }

    const handleCancel = () => {
        setShowModal(false)
    }

    useEffect(() => {
        if (actualBackOrder) {
            setErrors(validateCustomer(actualBackOrder))
        }
    }, [actualBackOrder])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setActualBackOrder({
            ...actualBackOrder,
            [name]: value
        })
    }

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
                setActualBackOrder({ ...actualBackOrder, photo: url })
            } catch (error) {
                console.log('error al cargar la imagen')
            }
        }
    const handleSelectsChange = (e) => {
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
    }

    return (
        <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center '>
            <div className='bg-white p-5 rounded flex-col justify-center items-center gap-5 mt-20' style={{ width: '500px', maxHeight: '80vh', overflowY: 'auto' }}>
                CARGAR NUEVO USUARIO
                <div className='icon-create-container' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <img src={icon_cancel} alt="crear"
                        onClick={handleCancel}
                        className='icon-create'
                        style={{ cursor: 'pointer' }} />
                </div>
                <form className="space-y-4" onSubmit={handleSave}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Usuario</label>
                        <input
                            type="text"
                            name="nickname"
                            value={actualBackOrder.nickname}
                            onChange={handleChange}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.nickname && <p style={{ color: 'darkgrey' }}>{errors.nickname}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nombre y apellido</label>
                        <input
                            type="text"
                            name="name"
                            value={actualBackOrder.name}
                            onChange={handleChange}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.name && <p style={{ color: 'darkgrey' }}>{errors.name}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="text"
                            name="email"
                            value={actualBackOrder.email}
                            onChange={handleChange}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.email && <p style={{ color: 'darkgrey' }}>{errors.email}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="text"
                            name="password"
                            value={actualBackOrder.password || 'Hola123*'}
                            onChange={handleChange}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.password && <p style={{ color: 'darkgrey' }}>{errors.password}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">DNI</label>
                        <input
                            type="number"
                            name="cedula"
                            value={actualBackOrder.cedula}
                            onChange={handleChange}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.cedula && <p style={{ color: 'darkgrey' }}>{errors.cedula}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Teléfono</label>
                        <input
                            type="number"
                            name="cel_Phone_Number"
                            value={actualBackOrder.cel_Phone_Number}
                            onChange={handleChange}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.cel_Phone_Number && <p style={{ color: 'darkgrey' }}>{errors.cel_Phone_Number}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Categoría</label>
                        <select
                            name="category"
                            value={actualBackOrder.category}
                            onChange={(e) => handlesSelectChange(e)}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="">Seleccionar</option>
                            <option value="regular">Regular</option>
                            <option value="pro">Pro</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Rol</label>
                        <select
                            name="role"
                            value={actualBackOrder.role}
                            onChange={(e) => handlesSelectChange(e)}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="">Seleccionar</option>
                            <option value="admin">Administrador</option>
                            <option value="user">Usuario</option>
                            <option value="asesor">Asesor</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Estado</label>
                        <select
                            name="role"
                            value={actualBackOrder.role}
                            onChange={(e) => handlesSelectChange(e)}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="">Seleccionar</option>
                            <option value="true">Activo</option>
                            <option value="false">Inactivo</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Edad</label>
                        <input
                            type="number"
                            name="age"
                            value={actualBackOrder.age}
                            onChange={handleChange}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.age && <p style={{ color: 'darkgrey' }}>{errors.age}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Selecciona tu imagen</label>
                        <input
                            type="file"
                            name="product_image"
                            ref={inputRef} onChange={handleImageChange}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {actualBackOrder.photo && (
                            <img src={actualBackOrder.photo} alt="product_image" className="mt-2 h-20 w-20 object-cover" />
                        )}
                    </div>

                    <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Guardar
                    </button>
                </form>
            </div>
        </div>
    );

}

export default CustomersForm;