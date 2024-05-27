import React from 'react';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetail, updateUserDetail } from '../../redux/actions';
import validateProfile from './validateProfile';
import UserLayout from './UserLayout';
import Swal from "sweetalert2";

const Profile = () => {
    const dispatch = useDispatch()
    const userDetail = useSelector((state) => state.userDetail)
    const infoUserLogged = useSelector((state) => state.infoUserLogged)

    const [isEditing, setIsEditing] = useState(false);

    const [input, setInput] = useState({
        name: userDetail.name || "",
        email: userDetail.email || "",
        cedula: userDetail.cedula || "",
        cel_Phone_Number: userDetail.cel_Phone_Number || "",
        age: userDetail.age || "",
        // photo: userDetail.photo,
    })

    const [errors, setErrors] = useState({});


    useEffect(() => {
        console.log(infoUserLogged)
        if (infoUserLogged.id) {
            dispatch(getUserDetail(infoUserLogged.id))
        }
    }, [])


    useEffect(() => {
        if (input) {
            setErrors(validateProfile(input))
        }
    }, [input])


    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setInput({ ...input, [property]: value })
    }


    const submitHandler = () => {
        try {
            dispatch (updateUserDetail(infoUserLogged.id, input))
            setIsEditing(false);
            Swal.fire({
                icon: "success",
                title: "Actualización de datos ",
                text: "Exitosa",
                showConfirmButton: true,
              });
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Error, por favor intente de nuevo",
                showConfirmButton: true,
              });
            
        }

    }


    // Función para activar la edición
    const handleEditClick = () => {
        setIsEditing(true);
    };
    // Función para guardar los cambios
    const handleSaveClick = () => {
        // Validar que todos los campos estén completos
        if (!input.name || !input.email || !input.cedula || !input.cel_Phone_Number || !input.age) {
        Swal.fire("Por favor, complete todos los campos")
     } else {
            submitHandler();
            // Si todos los campos están completos, guardar los datos
        }
    }

    return (
        <UserLayout>
            <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
                <div className="container max-w-screen-lg mx-auto">
                    <div>

                        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">

                                <div className="text-gray-600">
                                    <p className="font-medium text-lg">Datos personales</p>
                                    <p>Por favor, complete todos los campos</p>
                                </div>

                                <div className="lg:col-span-2">
                                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                        <div className="md:col-span-3">
                                            <label htmlFor="name">Nombre y apellido</label>
                                            <input type="text" name="name" id="name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                value={input.name}
                                                onChange={handleChange}
                                                disabled={!isEditing} />

                                            {errors.name && <p style={{ color: 'darkgrey' }}>{errors.name}</p>}
                                        </div>

                                        <div className="md:col-span-2">
                                            <label htmlFor="cedula">DNI</label>
                                            <input type="text" name="cedula" id="cedula" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                value={input.cedula}
                                                onChange={handleChange}
                                                disabled={!isEditing} />
                                            {errors.cedula && <p style={{ color: 'darkgrey' }}>{errors.cedula}</p>}
                                        </div>

                                        <div className="md:col-span-3">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                value={input.email} placeholder="email@domain.com"
                                                onChange={handleChange}
                                                disabled={!isEditing} />
                                            {errors.email && <p style={{ color: 'darkgrey' }}>{errors.email}</p>}
                                        </div>

                                        <div className="md:col-span-2">
                                            <label htmlFor="cel_Phone_Number">Teléfono</label>
                                            <input type="text" name="cel_Phone_Number" id="cel_Phone_Number" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                value={input.cel_Phone_Number}
                                                onChange={handleChange}
                                                disabled={!isEditing} />
                                            {errors.cel_Phone_Number && <p style={{ color: 'darkgrey' }}>{errors.cel_Phone_Number}</p>}
                                        </div>

                                        <div className="md:col-span-2">
                                            <label htmlFor="age">Edad</label>
                                            <input type="text" name="age" id="age" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                value={input.age}
                                                onChange={handleChange}
                                                disabled={!isEditing} />
                                            {errors.age && <p style={{ color: 'darkgrey' }}>{errors.age}</p>}
                                        </div>

                                        <div className="md:col-span-5 text-right">
                                            <div className="inline-flex items-end">
                                                {!isEditing ? (
                                                    <button
                                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                                        onClick={handleEditClick}
                                                    >
                                                        Actualizar datos
                                                    </button>
                                                ) : (
                                                    <button
                                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                                        onClick={handleSaveClick}
                                                    >
                                                        Guardar
                                                    </button>
                                                )}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </UserLayout>
    )
}

export default Profile