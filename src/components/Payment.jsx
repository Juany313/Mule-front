import React from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import { useState } from "react";

const products = [
  {
    id: 1,
    type_shipments: "Puerta a Puerta",
    measure: "Pequeño",
    city_receiver: "Córdoba",
    city_transmiter: "Santa Fe",
    price: 2500,
    quantity: 1,
  },
  {
    id: 2,
    type_shipments: "Puerta a Sucursal",
    measure: "Mediano",
    city_receiver: "Buenos Aires",
    city_transmiter: "Corrientes",
    price: 5000,
    quantity: 1,
  },
  {
    id: 3,
    type_shipments: "Sucursal a Puerta",
    measure: "Grande",
    city_receiver: "Córdoba",
    city_transmiter: "Entre Ríos",
    price: 7500,
    quantity: 1,
  },
];

const Payment = () => {
  const [preferenceId, setPreferenceId] = useState(null);
  const location = useLocation();
  const { orderData } = location.state;

  initMercadoPago("APP_USR-cfcbc101-b2d1-447a-9572-dc7a2935f197", {
    locale: "es-AR",
  });

  const handlePay = async (id, title, quantity, unit_price) => {
    try {
      const response = await axios.post("http://localhost:3000/payments/", {
        id: orderData.id,
        title:
          orderData.typeShipmentId === 1
            ? "Sucursal a puerta"
            : orderData.typeShipmentId === 2
            ? "Sucursal a sucursal"
            : orderData.typeShipmentId === 3
            ? "Puerta a sucursal"
            : orderData.typeShipmentId === 4
            ? "Puerta a Puerta"
            : null,
        quantity: 1,
        unit_price: orderData.cost,
        // orderData.measureId === 1
        //   ? 15000
        //   : orderData.measureId === 2
        //   ? 30000
        //   : orderData.measureId === 3
        //   ? 45000
        //   : null,
        payer: {
          name: orderData.name_transmiter,
          surname: orderData.surname_transmiter,
          phone: {
            area_code: "54",
            number: orderData.celphone_transmiter,
          },
          address: {
            street_name: orderData.address_transmiter,
          },
          identification: {
            type: "DNI",
            number: orderData.cedula_claimant,
          },
        },
        shipments: {
          receiver_address: {
            street_name: orderData.address_receiver,
            city_name: orderData.city_receiver,
          },
        },
      });
      const iDpreference = response.data.id;
      setPreferenceId(iDpreference);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((elem, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-4 transform hover:scale-105 transition-transform duration-300"
          >
            <h1 className="font-bold text-lg">
              Tipo de envío: {elem.type_shipments}
            </h1>
            <h2 className="text-md">Tamaño: {elem.measure}</h2>
            <label className="block mt-2">Remitente:</label>
            <h4 className="text-sm">{elem.city_transmiter}</h4>
            <label className="block mt-2">Destinatario:</label>
            <h4 className="text-sm">{elem.city_receiver}</h4>
            <label className="block mt-2">Precio:</label>
            <h3 className="text-md font-semibold">{elem.price}</h3>

            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              onClick={() =>
                handlePay(
                  elem.id,
                  elem.type_shipments,
                  elem.quantity,
                  elem.price
                )
              }
            >
              PAGAR
            </button>
          </div>
        ))}
      </div>
      <div id="wallet_container">
        {preferenceId && (
          <div className="mt-8">
            <Wallet initialization={{ preferenceId: preferenceId }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;
