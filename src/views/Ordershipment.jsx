import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders, agregarPedido } from '../redux/actions';
import Pagination from '../components/Pagination';

const Ordershipment = () => {
  const dispatch = useDispatch();
  const allOrders = useSelector((state) => state.allOrders);
  const filtrados = useSelector((state) => state.filtrados);

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  const [estado, setEstado] = useState({
    city_transmiter: '',
    city_receiver: '',
    declared_value: '',
    pay_method: ''
  });

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setEstado(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const manejarFiltrarClick = () => {
    const pedido = Object.keys(estado).reduce((acc, key) => {
      if (estado[key] !== '') {
        acc[key] = estado[key];
      }
      return acc;
    }, {});

    if (Object.keys(pedido).length > 0) {
      dispatch(agregarPedido(pedido));
    } else {
      console.log('No hay propiedades para agregar al pedido.');
    }
  };

  const manejarSinFiltrosClick = () => {
    // Establecer todas las propiedades del estado a cadenas vacías
    dispatch(getAllOrders())
    console.log("acaaaaa", allOrders);
  };
  return (
    <>
      <div id='orderShipment' className='min-h-screen bg-p300 flex flex-col items-center justify-start pt-[7rem] text-white' >
        <h1 className='mb-[100px] font-bold text-4xl mb-2'>
          Clientes que confían en nosotros
        </h1>
        <div>
          <section>
            <h1 className='font-bold'>Ciudad origen</h1>
            <select className='text-g500' name="city_transmiter" value={estado.city_transmiter} onChange={manejarCambio}>
              <option value="">Seleccionar</option>
              <option value="Rosario">Rosario</option>
              <option value="Esperanza">Esperanza</option>
              <option value="Reconquista">Reconquista</option>
              <option value="Rufino">Rufino</option>
            </select>
          </section>
          <section>
            <h1 className='font-bold'>Ciudad destino</h1>
            <select className='text-g500' name="city_receiver" value={estado.city_receiver} onChange={manejarCambio}>
              <option value="">Seleccionar</option>
              <option value="Rosario">Rosario</option>
              <option value="Esperanza">Esperanza</option>
              <option value="Reconquista">Reconquista</option>
              <option value="Rufino">Rufino</option>
            </select>
          </section>
          <section>
            <h1>Valor Declarado</h1>
            <select className='text-g500' name="declared_value" value={estado.declared_value} onChange={manejarCambio}>
              <option value="">Seleccionar</option>
              <option value="10000">10000</option>
              <option value="20000">20000</option>
              <option value="30000">30000</option>
              <option value="40000">40000</option>
            </select>
          </section>
          <section>
            <h1>Método de pago</h1>
            <select className='text-g500' name="pay_method" value={estado.pay_method} onChange={manejarCambio}>
              <option value="">Seleccionar</option>
              <option value="Efectivo">Efectivo</option>
              <option value="Tarjeta de debito">Tarjeta de débito</option>
              <option value="Tarjeta de credito">Tarjeta de crédito</option>
            </select>
          </section>
            <div>
              <button onClick={manejarFiltrarClick} className='text-primary hover:text-gray-100 transition-colors '>Filtrar</button>
            </div>
            <div>
              <button onClick={manejarSinFiltrosClick} className='text-primary hover:text-gray-100 transition-colors '>Sin Filtros</button>
            </div>
        </div>
        <div>
          <Pagination allOrders={filtrados.length > 0 ? filtrados : allOrders} />
        </div>
      </div>
    </>
  );
}

export default Ordershipment;



