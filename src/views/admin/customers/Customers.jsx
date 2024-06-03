import React from 'react'

/* Components */
import CustomersTable from './CustomersTable';

/* dependencias */
import {useEffect,useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";

/* actions */
import {getAllUsers} from "../../../redux/actions/index"


const Customers = () => {

  const dispatch = useDispatch();

  /* Estado global */
  const allUsers = useSelector((state)=> state.allUsers);


  //Primera renderizacion
  useEffect(() => {
    // Verifica si la lista de conductores ya está cargada en el estado global de Redux
    if (!allUsers.length) {
      // Si no está cargada, realiza la carga inicial
      dispatch(getAllUsers());
    }
  }, [dispatch, allUsers]);

  return (
    <div className='relative h-[650px] mt-[150px] mx-[400px] p-[60px] border border-black rounded'>
        <CustomersTable />
    </div>
  )
}

export default Customers