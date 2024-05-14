import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { getAllOrders,orderDeclaredValue } from '../redux/actions';
import Pagination from '../components/Pagination';

const Ordershipment = () => {
  const dispatch = useDispatch();
  const allOrders = useSelector ((state)=>state.allOrders)

  useEffect(()=>{
    dispatch(getAllOrders());
  }, [dispatch])


//  console.log(allOrders)
 
//  const [options, setOptions] = useState([]);

//  const set = new Set();

//  useEffect(() => {
//    const fetchData = async () => {
//      try {
//        const response = await fetch("http://localhost:3000/order_shipments");

//        const data = await response.json();

//        data.map((elem) => set.add(elem.city_transmiter, elem.city_receiver, declared_value, pay_method));

//        const optionsArr = [...set];

//        setOptions(optionsArr);
//      } catch (error) {
//        console.log("error: ", error);
//      }
//    };

//    fetchData();
//  }, []);

const [selectedFilters, setSelectedFilters] = useState({});


const handleClickOrderDeclaredValue = (e) => {
  e.preventDefault();


  const fieldName = e.target.name;
  const fieldValue = e.target.value;


    // Actualizar el estado de los filtros seleccionados
    setSelectedFilters(prevState => ({
      ...prevState,
      [fieldName]: fieldValue
    }));

    dispatch(orderDeclaredValue(selectedFilters));

}

//  //order
//  const handleClickOrderDeclaredValue = (e) => {
//   e.preventDefault();

//   // Obtener los nombres de los campos (claves) de los <select>
//   const fieldNames = ["city_transmiter", "city_receiver", "declared_value", "pay_method"];

//   // Obtener los valores seleccionados de los <select>
//   const selectedValue = e.target.value;

//   // Crear un array de objetos donde cada objeto tiene una clave y su valor asociado
//   const selectedFields = fieldNames.map(fieldName => ({
//     [fieldName]: fieldName === e.target.name ? selectedValue : null
//   }));

//   // Llamar a dispatch con el array de objetos clave-valor
//   dispatch(orderDeclaredValue(selectedFields));
// };
// }
  return (
    <>
    <div id='ordershipment' className='min-h-screen bg-p300 flex flex-col items-center justify-start pt-[7rem] text-white' >
      <h1 className='mb-[100px] font-bold text-4xl mb-2'>
        Clientes que confían en nosotros
      </h1>
      <div>
      <section >
          <h1 className='font-bold'>Ciudad origen</h1>
          <select className='text-g500'
          name="city_transmiter" onChange = {(e)=>{ handleClickOrderDeclaredValue(e)}}>
          <option value="Rosario">Rosario</option>
          <option value="Esperanza">Esperanza</option>
          <option value="Reconquista">Reconquista</option> 
          <option value="Rufino">Rufino</option> 
        </select>
        </section>
        <section>
          <h1 className='font-bold'>Ciudad destino</h1>
          <select className='text-g500'
          name="city_receiver" onChange = {(e)=>{ handleClickOrderDeclaredValue(e)}}>
          <option value="Rosario">Rosario</option>
          <option value="Esperanza">Esperanza</option>
          <option value="Reconquista">Reconquista</option> 
          <option value="Rufino">Rufino</option>
        </select>
        </section>
        <section>
          <h1>Valor Declarado</h1>
          <select className='text-g500' 
          name="declared_value" onChange = {(e)=>{ handleClickOrderDeclaredValue(e)}}>
          <option value="10000">10000</option>
          <option value="20000">20000</option>
          <option value="30000">30000</option>
          <option value="40000">40000</option> 
        </select>
        </section>
        <section>
          <h1>Método de pago</h1>
          <select className='text-g500'
          name="pay_method" onChange = {(e)=>{ handleClickOrderDeclaredValue(e)}}>
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