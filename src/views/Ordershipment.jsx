import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { getAllOrders } from '../redux/actions';
import Pagination from '../components/Pagination';

const Ordershipment = () => {
  const dispatch = useDispatch();
  const allOrders = useSelector ((state)=>state.allOrders)

  useEffect(()=>{
    dispatch(getAllOrders());
  }, [dispatch])
 console.log(allOrders)

  return (
    <>
    <div id='service' className='min-h-screen bg-p300 flex flex-col items-center justify-start pt-[7rem] text-white' >
      <h1 className='mb-[100px] font-bold text-4xl mb-2'>
        Clientes que confían en nosotros
      </h1>
      <div>
          <Pagination allOrders={allOrders}/>      
        </div>
    </div>
    </>
  )
}


export default Ordershipment