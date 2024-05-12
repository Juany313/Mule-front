import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getOrderById } from "../redux/actions"
import { useNavigate } from "react-router-dom";

const SearchBar = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [id, setId] = useState("");

    const handleChange = (event)=>{
        event.preventDefault();
        setId(event.target.value);
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        dispatch(getOrderById(id))
        setId('')
        navigate(`ordershipment/detail/${id}`)
    }

    return (
        /* 
        <div className='bg-white border border-gray-800 flex justify-center w-[500px] p-0 rounded-md'>
              <input type="text" 
                className='flex-1 pl-2 py-1 rounded-l-md bg-white'
                placeholder='Número de seguimiento'
              />
              <button className='bg-yellow-500 rounded-md px-4 py-2'>Buscar</button>
            </div>
        */
        
            <div onSubmit={handleSubmit} className="bg-white border border-gray-800 flex justify-center w-[500px] p-0 rounded-md">
                    <input className="flex-1 pl-2 py-1 rounded-l-md bg-white"
                        type='text'
                        value={id}
                        placeholder= 'Código de seguimiento'
                        onChange={handleChange}
                    />
                    <button className="bg-yellow-500 rounded-md px-4 py-2"
                        type='submit'
                        onClick={handleSubmit}>
                            Buscar
                    </button>                    
            </div>
        
    )


}

export default SearchBar;