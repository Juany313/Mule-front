import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { getAllOrders,orderDeclaredValue } from '../redux/actions';
import Pagination from '../components/Pagination';

const Ordershipment = () => {
  const dispatch = useDispatch();
  const allOrders = useSelector ((state)=>state.allOrders)

  useEffect(()=>{
    dispatch(getAllOrders());
  }, [dispatch])
 console.log(allOrders)

 //order
 const handleClickOrderDeclaredValue = (e) => {
  e.preventDefault();

  // Obtener los nombres de los campos (claves) de los <select>
  const fieldNames = Array.from(e.target.parentNode.querySelectorAll('select')).map(select => select.name);

  // Obtener los valores seleccionados de los <select>
  const selectedValues = Array.from(e.target.parentNode.querySelectorAll('select')).map(select => select.value);

  // Crear un array de objetos donde cada objeto tiene una clave y su valor asociado
  const selectedFields = fieldNames.map((fieldName, index) => ({ [fieldName]: selectedValues[index] }));

  // Llamar a dispatch con el array de objetos clave-valor
  dispatch(orderDeclaredValue(selectedFields));
};
 
  return (
    <>
    <div id='service' className='min-h-screen bg-p300 flex flex-col items-center justify-start pt-[7rem] text-white' >
      <h1 className='mb-[100px] font-bold text-4xl mb-2'>
        Clientes que confían en nosotros
      </h1>

      <div>
      <section>
          <h1>Ciudad origen</h1>
          <select name="city_transmiter" onChange = {(e)=>{ handleClickOrderDeclaredValue(e)}}>
          <option value="null">Rosario</option>
          <option value="Esperanza">Esperanza</option>
          <option value="Reconquista">Reconquista</option> 
          <option value="Rufino">Rufino</option> 
        </select>
        </section>
        <section>
          <h1>Ciudad destino</h1>
          <select name="city_receiver" onChange = {(e)=>{ handleClickOrderDeclaredValue(e)}}>
          <option value="null">Rosario</option>
          <option value="Esperanza">Esperanza</option>
          <option value="Reconquista">Reconquista</option> 
          <option value="Rufino">Rufino</option>
        </select>
        </section>
        <section>
          <h1>Valor Declarado</h1>
          <select name="declared_value" onChange = {(e)=>{ handleClickOrderDeclaredValue(e)}}>
          <option value="null">10000</option>
          <option value="20000">20000</option>
          <option value="20000">30000</option>
          <option value="50000">50000</option> 
        </select>
        </section>
        <section>
          <h1>Método de pago</h1>
          <select name="pay_method" onChange = {(e)=>{ handleClickOrderDeclaredValue(e)}}>
          <option value="Efectivo">Efectivo</option>
          <option value="Tarjeta de debito">Tarjeta de débito</option>
          <option value="Tarjeta de credito">Tarjeta de crédito</option> 
        </select>
        </section>

      </div>
      <div>
          <Pagination allOrders={allOrders}/>      
        </div>
    </div>
    </>
  )
}

export default Ordershipment