import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";

const Payment = () => {
  const [preferenceId, setPreferenceId] = useState(null);
  const location = useLocation();
  const { orderData } = location.state;
  console.log("DATA:", orderData);

  initMercadoPago("TEST-fba43614-ef7f-45c0-8443-fc699301ff2c", {
    locale: "es-AR",
  });

  const handlePay = async () => {
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
        unit_price: 30000,
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
      {orderData && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-4 transform hover:scale-105 transition-transform duration-300">
            <h1 className="font-bold text-lg">
              Tipo de envío:{" "}
              {orderData.typeShipmentId === 1
                ? "Sucursal a puerta"
                : orderData.typeShipmentId === 2
                ? "Sucursal a sucursal"
                : orderData.typeShipmentId === 3
                ? "Puerta a sucursal"
                : orderData.typeShipmentId === 4
                ? "Puerta a Puerta"
                : null}
            </h1>
            <h2 className="text-md">
              Tamaño:{" "}
              {orderData.measureId === 1
                ? "Pequeño"
                : orderData.measureId === 2
                ? "Mediano"
                : orderData.typeShipmentId === 3
                ? "Grande"
                : null}
            </h2>
            <label className="block mt-2">Remitente:</label>
            <h4 className="text-sm">{orderData.city_transmiter}</h4>
            <label className="block mt-2">Destinatario:</label>
            <h4 className="text-sm">{orderData.city_receiver}</h4>
            <label className="block mt-2">Peso:</label>
            <h4 className="text-sm">{orderData.weight}kg</h4>
            <label className="block mt-2">Declarado:</label>
            <h4 className="text-sm">{orderData.declared_value}$</h4>
            <label className="block mt-2">Método de pago:</label>
            <h4 className="text-sm">{orderData.pay_method}</h4>
            <img
              src={orderData.product_image}
              alt="Producto"
              className="mt-4"
            />
          </div>
        </div>
      )}
      <div className="p-4">
        <button
          onClick={() => handlePay(1, "Pieza", 1, 10)}
          className="bg-s300 text-black uppercase font-bold text-sm w-full py-3 px-4 rounded-lg hover:text-gray-100 transition-colors"
        >
          Pagar
        </button>
      </div>
      {preferenceId && <Wallet initialization={{ preferenceId }} />}
    </div>
  );
};

export default Payment;
