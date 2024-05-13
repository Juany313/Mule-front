import React, { useState } from "react";

/* utils */
import validate from "../utils"

/* hooks */
import {useDispatch} from "react-redux";

/* actions */
import {createOrder} from "../redux/actions/index"



const OrderForm = () => {

/* Estados Locales */
  const [userData, setUserData] = useState({
    name_claimant: "",
    cedula_claimant: "",
    cellphone_claimant: "",
    name_transmiter: "",
    celphone_transmiter: "",
    city_transmiter: "",
    address_transmiter: "",
    name_receiver: "",
    celphone_receiver: "",
    city_receiver: "",
    address_receiver: "",
    weight: "",
    declared_value: "",
    product_image: "",
    pay_method: "",
    typeShipmentId: null,
    measureId: null,
    user_id: null,
  });
  const [errors, setErrors] = useState({
    name_claimant: "",
  });

  /* Estado global */
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
  
    setUserData({ ...userData, [property]: value });
  
    setErrors((prevErrors) => {
      const newErrors = validate({
        ...userData,
        [property]: value, 
      });
  

      return newErrors;
      });
    };
 
    const handleSubmit = (event) => {
      event.preventDefault();
      dispatch(createOrder(userData));
      alert("CONDUCTOR CREADO CON EXITO!!")
    };

  return (
    <div className="min-h-screen bg-p300 flex items-center justify-center p-4">
      <div className="bg-p100 p-8 rounded-xl w-auto  lg:w-[450px]">
        <h1 className="text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8">
          INICIA TU PEDIDO
        </h1>

        <h2>Datos del usuario</h2>

        <form className="mb-8" onSubmit={handleSubmit}>
          <div className="relative mb-4">
            <input
              type="text"
              name="name_claimant"
              value={userData.name_claimant}
              onChange={handleChange}
              className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
              placeholder="Nombre/s"
            /> <span className="text-red-600 font-semibold">{errors.name_claimant}</span>
          </div>

          <div className="relative mb-4">
            <input
              type="text"
              name="cedula_claimant"
              value={userData.cedula_claimant}
              onChange={handleChange}
              className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
              placeholder="Cedula"
            />
          </div>

          <div className="relative mb-4">
            <input
              type="text"
              name="cellphone_claimant"
              value={userData.cellphone_claimant}
              onChange={handleChange}
              className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
              placeholder="Telefono"
            />
          </div>

          <h2>Datos del remitente</h2>

          <div className="relative mb-4">
            <input
              type="text"
              name="name_transmiter"
              value={userData.name_transmiter}
              onChange={handleChange}
              className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
              placeholder="Nombre/s"
            />
          </div>

          <div className="relative mb-4">
            <input
              type="text"
              name="celphone_transmiter"
              value={userData.celphone_transmiter}
              onChange={handleChange}
              className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
              placeholder="Telefono"
            />
          </div>

          <div className="relative mb-4">
            <input
              type="text"
              name="city_transmiter"
              value={userData.city_transmiter}
              onChange={handleChange}
              className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
              placeholder="Ciudad"
            />
          </div>

          <div className="relative mb-4">
            <input
              type="text"
              name="address_transmiter"
              value={userData.address_transmiter}
              onChange={handleChange}
              className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
              placeholder="Direccion"
            />
          </div>

          <h2>Datos del destinatario</h2>

          <div className="relative mb-4">
            <input
              type="text"
              name="name_receiver"
              value={userData.name_receiver}
              onChange={handleChange}
              className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
              placeholder="Nombre/s"
            />
          </div>

          <div className="relative mb-4">
            <input
              type="text"
              name="celphone_receiver"
              value={userData.celphone_receiver}
              onChange={handleChange}
              className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
              placeholder="Telefono"
            />
          </div>

          <div className="relative mb-4">
            <input
              type="text"
              name="city_receiver"
              value={userData.city_receiver}
              onChange={handleChange}
              className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
              placeholder="Ciudad"
            />
          </div>

          <div className="relative mb-4">
            <input
              type="text"
              name="address_receiver"
              value={userData.address_receiver}
              onChange={handleChange}
              className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
              placeholder="Dirección"
            />
          </div>

          <h2>Datos del pedido</h2>

          <div className="relative mb-4">
            <input
              type="text"
              name="weight"
              value={userData.weight}
              onChange={handleChange}
              className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
              placeholder="Peso del pedido"
            />
          </div>

          <div className="relative mb-4">
            <input
              type="text"
              name="declared_value"
              value={userData.declared_value}
              onChange={handleChange}
              className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
              placeholder="Valor declarado"
            />
          </div>

          <div className="relative mb-4">
            <input
              type="text"
              name="product_image"
              value={userData.product_image}
              onChange={handleChange}
              className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
              placeholder="Imagen del pedido"
            />
          </div>

          <div className="relative mb-4">
            <input
              type="text"
              name="pay_method"
              value={userData.pay_method}
              onChange={handleChange}
              className="py-3 pl-8 pr-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
              placeholder="Metodo de pago"
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-s300 text-black uppercase font-bold text-sm w-full py-3 px-4 rounded-lg hover:text-gray-100 transition-colors"
            >
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
