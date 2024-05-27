import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders, agregarPedido } from "../redux/actions";
import Pagination from "../components/Pagination";

const Ordershipment = () => {
  const dispatch = useDispatch();
  const allOrders = useSelector((state) => state.allOrders);
  const filtrados = useSelector((state) => state.filtrados);

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  const [estado, setEstado] = useState({
    city_transmiter: "",
    city_receiver: "",
    declared_value: "",
    pay_method: "",
  });

  const [filtrosActivos, setFiltrosActivos] = useState(false);

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setEstado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const manejarFiltrarClick = () => {
    const pedido = Object.keys(estado).reduce((acc, key) => {
      if (estado[key] !== "") {
        acc[key] = estado[key];
      }
      return acc;
    }, {});

    if (Object.keys(pedido).length > 0) {
      dispatch(agregarPedido(pedido));
      setFiltrosActivos(true); // Activar los filtros
    } else {
      console.error("No hay propiedades para agregar al pedido.");
    }
  };

  const manejarSinFiltrosClick = () => {
    // Establecer todas las propiedades del estado a cadenas vacías
    dispatch(getAllOrders());
    setFiltrosActivos(false); // Desactivar los filtros
  };

  return (
    <>
      <div
        id="orderShipment"
        className="min-h-screen bg-p300 flex flex-col items-center justify-start pt-28 text-white"
      >
        <h1 className="font-bold text-4xl mb-16">
          Clientes que confían en nosotros
        </h1>
        <div className="w-full max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <section>
              <h2 className="font-bold text-lg mb-2">Ciudad origen</h2>
              <select
                className="w-full p-2 border border-gray-300 rounded-md text-gray-700"
                name="city_transmiter"
                value={estado.city_transmiter}
                onChange={manejarCambio}
              >
                <option value="">Seleccionar</option>
                <option value="santa fe">Santa Fe</option>
                <option value="buenos aires">Buenos Aires</option>
                <option value="cordoba">Cordoba</option>
                <option value="entre rios">Entre Rios</option>
                <option value="corrientes">Corrientes</option>
              </select>
            </section>
            <section>
              <h2 className="font-bold text-lg mb-2">Ciudad destino</h2>
              <select
                className="w-full p-2 border border-gray-300 rounded-md text-gray-700"
                name="city_receiver"
                value={estado.city_receiver}
                onChange={manejarCambio}
              >
                <option value="">Seleccionar</option>
                <option value="santa fe">Santa Fe</option>
                <option value="buenos aires">Buenos Aires</option>
                <option value="cordoba">Cordoba</option>
                <option value="entre rios">Entre Rios</option>
                <option value="corrientes">Corrientes</option>
              </select>
            </section>
            <section>
              <h2 className="font-bold text-lg mb-2">Valor Declarado</h2>
              <select
                className="w-full p-2 border border-gray-300 rounded-md text-gray-700"
                name="declared_value"
                value={estado.declared_value}
                onChange={manejarCambio}
              >
                <option value="">Seleccionar</option>
                <option value="10000">10000</option>
                <option value="20000">20000</option>
                <option value="30000">30000</option>
                <option value="40000">40000</option>
              </select>
            </section>
            <section>
              <h2 className="font-bold text-lg mb-2">Método de pago</h2>
              <select
                className="w-full p-2 border border-gray-300 rounded-md text-gray-700"
                name="pay_method"
                value={estado.pay_method}
                onChange={manejarCambio}
              >
                <option value="">Seleccionar</option>
                <option value="Efectivo">Efectivo</option>
                <option value="Credito">Tarjeta de crédito</option>
                <option value="Debito">Tarjeta de débito</option>
              </select>
            </section>
          </div>
          <div className="flex justify-between">
            <button
              onClick={manejarFiltrarClick}
              className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition"
            >
              Filtrar
            </button>
            <button
              onClick={manejarSinFiltrosClick}
              className="bg-gray-500 text-white py-2 px-6 rounded-md hover:bg-gray-600 transition"
            >
              Sin Filtros
            </button>
          </div>
        </div>
        <div className="w-full mt-10">
          <Pagination data={filtrosActivos ? filtrados : allOrders} />
        </div>
      </div>
    </>
  );
};

export default Ordershipment;
