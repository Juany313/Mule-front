import { useState } from "react";
import Payment from "../components/Payment.jsx"
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'

import axios from 'axios'; 



const products= [
    {
    type_shipments: "Puerta a Puerta",
    measure: "Pequeño",
    city_receiver: "Cordoba",
    city_transmiter: "Santa Fe",
    price: 2500,
},
{
    type_shipments: "Puerta a Sucursal",
    measure: "Mediano",
    city_receiver: "Buenos Aires",
    city_transmiter: "Corrientes",
    price: 5000,
},
{
    type_shipments: "Sucursal a Puerta",
    measure: "Grande",
    city_receiver: "Cordoba",
    city_transmiter: "Entre Ríos",
    price: 7500,
}
] 



const Products = () =>{

    const [payment, setPayment] = useState (null)


    const handleClick =(e) =>{
        setPayment()
    }

    return (
        <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            
            {products.map((elem, index) =>(
                <div>
            <h1>Tipo de envío: {elem.type_shipments} </h1>
            <h2>Tamaño: {elem.measure}</h2>
            <label>Remitente:</label>
            <h4>{elem.city_transmiter}</h4>
            <label>Destinatario:</label>
            <h4>{elem.city_receiver}</h4>
            <label>Precio:</label>
            <h3>{elem.price}</h3>
            <button onClick={handleClick}></button>
            <Payment titulo={elem.type_shipments} id={index} quantity={1} unit_price={elem.price} />
            </div>
        ))}
        </div>
        </div> 
        </div>
    )
}

export default Products;