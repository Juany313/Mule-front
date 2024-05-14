import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOrderById } from '../redux/actions';

const DetailOrder = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const orderDetail = useSelector ((state)=>state.orderDetail)

    useEffect(()=>{
        dispatch(getOrderById(id))
    }, [dispatch, id])

  return (
    <div>
      <div className="lg:flex justify-center gap-4 items-stretch">
      <div className="bg-white md:p-2 p-6 rounded-lg border border-gray-200 mb-4 lg:mb-0 shadow-md lg:w-[85%]">
      <table className="table-auto w-full">
         <thead>
         <tr>
                 <th className="px-4 py-2 text-left border-b-2 w-full">
                     <h2 className="text-ml font-bold text-gray-600"><p>PEDIDO: {id}</p></h2>
                 </th>
             </tr>
         </thead>
             
        <p>Nombre y apellido: {orderDetail?.name_claimant}</p>
        <p>Documento: {orderDetail?.cedula_claimant}</p>
        <p>Teléfono: {orderDetail?.cellphone_claimant}</p>
        <p>Nombre remitente: {orderDetail?.name_transmiter}</p>
        <p>Teléfono remitente: {orderDetail?.celphone_transmiter}</p>
        <p>Ciudad de origen: {orderDetail?.city_transmiter}</p>
        <p>Dirección de origen: {orderDetail?.address_transmiter}</p>
        <p>Nombre destinatario: {orderDetail?.name_receiver}</p>
        <p>Teléfono destinatario: {orderDetail?.celphone_receiver}</p>
        <p>Ciudad de destino: {orderDetail?.city_receiver}</p>
        <p>Dirección de destino: {orderDetail?.address_receiver}</p>
        <p>Peso paquete: {orderDetail?.weight}</p>
        <p>Valor declarado: {orderDetail?.declared_value}</p>
        <p>Método de pago: {orderDetail?.pay_method}</p>
        <div>
        <div >
            <img src = {orderDetail?.product_image} alt= "name" />
        </div>
        </div>
    </table>
    </div>
    </div>
    </div>
  )
}

export default DetailOrder;