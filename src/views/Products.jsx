import React from 'react';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

// const validate = (Products, setErrors, errors) = {

// }

const Products = () => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)

    const [isEditing, setIsEditing] = useState(false);
    const [input, setInput] = useState({
        name: "",
        email: "",
        cedula: "",
        cel_Phone_Number: "",
        age: "",
        // photo:
    })
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        cedula: "",
        cel_Phone_Number: "",
        age: ""
    })

    // useEffect(() => {
    //     if (input) {
    //         setErrors(validation(input))
    //     }
    // }, [input])

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setInput({ ...input, [property]: value })
        // validate({ ...input, [property]: value }, setErrors, errors)
    }



    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(updateUser(input))
        setInput({
            name: "",
            email: "",
            cedula: "",
            cel_Phone_Number: "",
            age: "",
        });
    }

    // Función para activar la edición
    const handleEditClick = () => {
        setIsEditing(true);
    };
    // Función para guardar los cambios
    const handleSaveClick = () => {
        // Validar que todos los campos estén completos
        if (!input.name && !input.email && !input.cedula && !input.cel_Phone_Number && !input.age) {
            return ('Por favor, completa todos los campos')
        }
        // Si todos los campos están completos, guardar los datos
        setIsEditing(false);
    }

    return (
        <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
            <div className="container max-w-screen-lg mx-auto">
                <div>

                    <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                            <form onSubmit={submitHandler}>
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
                                                disabled={!isEditing}/>
                                            <span>{errors.name}</span>
                                        </div>

                                        <div className="md:col-span-2">
                                            <label htmlFor="cedula">DNI</label>
                                            <input type="text" name="cedula" id="cedula" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                                            value={input.cedula} placeholder=""
                                                onChange={handleChange} 
                                                disabled={!isEditing}/>
                                            <span>{errors.cedula}</span>
                                        </div>

                                        <div className="md:col-span-3">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                                            value={input.email} placeholder="email@domain.com"
                                                onChange={handleChange} 
                                                disabled={!isEditing}/>
                                            <span>{errors.email}</span>
                                        </div>

                                        <div className="md:col-span-2">
                                            <label htmlFor="cel_Phone_Number">Teléfono</label>
                                            <input type="text" name="cel_Phone_Number" id="cel_Phone_Number" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                                            value={input.cel_Phone_Number} placeholder="" 
                                            disabled={!isEditing}/>
                                        </div>

                                        <div className="md:col-span-2">
                                            <label htmlFor="age">Edad</label>
                                            <input type="text" name="age" id="age" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                                            value={input.age} placeholder="" 
                                            disabled={!isEditing}/>
                                        </div>

                                        <div className="md:col-span-5 text-right">
                                            <div className="inline-flex items-end">
                                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                                    onClick={isEditing ? handleSaveClick : handleEditClick}>
                                                    {isEditing ? 'Guardar' : 'Actualizar datos'}
                                                </button>
                                                {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit"
                                                    disable={!input.name && !input.email && !input.cedula && !input.cel_Phone_Number && !input.age}>Actualizar datos</button> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products