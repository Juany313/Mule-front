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
        <p>Id: {id}</p>   
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
    </div>
  )
}

export default DetailOrder;