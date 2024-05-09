import React from 'react'

/* dependencias */
import {useEffect,useState} from "react";
import {useDispatch, useSelector} from "react-redux";

/* actions */
import {getDrivers} from "../redux/actions"

const Landing = () => {
  const dispatch = useDispatch();
  /* Estado global */
  const allDrivers = useSelector((state)=> state.allDrivers);



  //Primera renderizacion
  useEffect(() => {
    // Verifica si la lista de conductores ya está cargada en el estado global de Redux
    if (!allDrivers.length) {
      // Si no está cargada, realiza la carga inicial
      dispatch(getDrivers());
      
    }
  }, [dispatch, allDrivers]);

  return (
    <div className='min-h-screen'>
      <h1>Landing</h1>
      <button onClick={()=>console.log(allDrivers)} className='bg-primary text-secondary-900'>GetDrivers</button>
    </div>

  )
}

export default Landing