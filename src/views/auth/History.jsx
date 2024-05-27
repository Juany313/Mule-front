import React from 'react'
import UserLayout from '../profile/UserLayout'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getOrdersByClient, orderDate, filterCity, getAllOrders, getOrderById } from '../../redux/actions';
import { setInfoUserLogged } from '../../redux/actions'

const History = () => {
  const dispatch = useDispatch();
  const allOrders = useSelector((state) => state.allOrders)
  const orderDetail = useSelector((state) => state.orderDetail);
  // const userId = userDetail.id
  const [currentPage, setCurrentPage] = useState(1)
  const ordersPerPage = 4;
  // const filteredOrders = useSelector((state) => state.filteredOrders);
  const infoUserLogged = useSelector((state) => state.infoUserLogged)

  console.log('history', orderDetail)


  const [filters, setFilters] = useState({
    city_transmiter: '',
    city_receiver: '',
  })


  useEffect(() => {
    dispatch(getAllOrders())
  }, [dispatch])

  //orden por fecha
  // const handleSortChange = (e) => {
  //   const order = e.target.value;
  //   dispatch(orderDate(order));
  // };

  //filtro por ciudad
  const handleCityFilter = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const filteredOrders = allOrders.filter((order) => {
    const filterByTransmiter = filters.city_transmiter ? order.city_transmiter === filters.city_transmiter : true;
    const filterByReceiver = filters.city_receiver ? order.city_receiver === filters.city_receiver : true;
    return filterByTransmiter && filterByReceiver;
  });


  // Calcular el índice inicial y final de los usuarios en la página actual
  const indexOfLastUser = currentPage * ordersPerPage;
  const indexOfFirstUser = indexOfLastUser - ordersPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstUser, indexOfLastUser);

  // Cambiar a la página siguiente
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  // Cambiar a la página anterior
  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };


  //ordershipments del usuario (el id del usuario está en el token)
  //mapeo todos los pedidos del usuario y filtro

  //filtros (de forma local)


  return (
    <UserLayout>
      <body className="antialiased font-sans bg-gray-200 mt-24">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="py-8">
            <div>
              <h2 className="text-2xl leading-tight">Historial</h2>
            </div>
            {/* FILTROS */}
            <div className="my-2 flex sm:flex-row flex-col">
              <div className="flex flex-row mb-1 sm:mb-0">


                <div className="relative">
                  <select id="city_transmiter" className="h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="city_transmiter"
                    value={filters.city_transmiter}
                    onChange={handleCityFilter}>
                    <option value=""> Ciudad de origen</option>
                    <option value="santa fe">Santa Fe</option>
                    <option value="buenos aires">Buenos Aires</option>
                    <option value="cordoba">Cordoba</option>
                    <option value="entre rios">Entre Rios</option>
                    <option value="corrientes">Corrientes</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>

                <div className="relative">
                  <select id="city_receiver" className="h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="city_receiver"
                    value={filters.city_receiver}
                    onChange={handleCityFilter}>
                    <option value=""> Ciudad de origen</option>
                    <option value="santa fe">Santa Fe</option>
                    <option value="buenos aires">Buenos Aires</option>
                    <option value="cordoba">Cordoba</option>
                    <option value="entre rios">Entre Rios</option>
                    <option value="corrientes">Corrientes</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>



                <div className="relative">
                  {/* <select className="h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
                    onChange={handleSortChange}>
                    <option value="">Ordenar por fecha</option>
                    <option value="asc">Orden Ascendente</option>
                    <option value="desc">Orden Descendente</option>
                  </select> */}
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* ENCABEZADO */}
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Imagen
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Fecha
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Remitente
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Origen
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Destino
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Destinatario
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Contacto
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        valor declarado
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        metodo de pago
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentOrders.map((order) => (
                      <tr key={order.id}>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img className="w-full h-full rounded-full" src={order.product_image} alt="" />
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">{order.created_at}</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">{order.name_claimant}</p>
                        </td>
                        {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">{order.cedula_claimant}</p>
                      </td> */}
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">{order.city_transmiter}</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">{order.city_receiver}</p>
                        </td>

                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">{order.name_receiver}</p>
                        </td>

                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">{order.celphone_receiver}</p>
                        </td>

                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">{order.declared_value}</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">{order.pay_method}</p>
                        </td>

                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">

                  <div className="inline-flex mt-2 xs:mt-0">
                    <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l" onClick={prevPage} disabled={currentPage === 1}>
                      Prev
                    </button>
                    <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r" onClick={nextPage} disabled={indexOfLastUser >= allOrders?.length}>
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>

    </UserLayout>
  )
}

export default History