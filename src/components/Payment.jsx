import React from 'react'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import axios from 'axios';
import { useState } from 'react';

const products = [
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

const Payment = (props) => {


  const [preferenceId, setPreferenceId] = useState(null)

  /*inicializa mercado pago con una credencial.
  La YOUR_PUBLIC_KEY (credencial) la creamos en la página de MP*/
  initMercadoPago('YOUR_PUBLIC_KEY', {
    locale: "es-AR"
  });

  //envío el pedido para que me de una preferencia del pedido en sí(id)
  const createPreference = async () => {
    try {

      products.map(async (elem) => {

        const response = await axios.post(
          "http://localhost:3000/create_preferences",
          //envío los datos de mi pedido:
          {
            id: elem.id,
            title: elem.titulo,
            quantity: 1,
            unit_price: elem.unit_price,
          });
        const { id } = response.data;
        return id
      })
    } catch (error) {
      console.log(error)
    }
  }

  //guardo el id en mi estado local
  const handlePay = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id)
    }
  }
  return (
    <div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">

          {products.map((elem, index) => (
            <div>
              <h1>Tipo de envío: {elem.type_shipments} </h1>
              <h2>Tamaño: {elem.measure}</h2>
              <label>Remitente:</label>
              <h4>{elem.city_transmiter}</h4>
              <label>Destinatario:</label>
              <h4>{elem.city_receiver}</h4>
              <label>Precio:</label>
              <h3>{elem.price}</h3>

              <button onClick={handlePay}>PAGAR</button>
              {preferenceId && <Wallet initialization={{ preferenceId: preferenceId }} customization={{ texts: { valueProp: 'smart_option' } }} />}

            </div>
          ))}
        </div>
      </div>





    </div>
  )
}


export default Payment

