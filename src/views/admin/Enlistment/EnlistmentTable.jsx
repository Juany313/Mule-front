import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { getAllEnlistments, getAllOrders } from '../../../redux/actions';
import useEnlistment from '../../../hooks/useEnlistment';
import useOrderShipment from '../../../hooks/useOrderShipment';
import EnlistmentRow from './EnlistmentRow';

const EnlistmentTable = (
   {
    setShowModalEdit,
    setShowModalDetail,
    setShowModalDelete,
    setCurrentEnlistmentId,
    setActualDetail
   }
) => {
    const { allEnlistments } = useEnlistment();
    const {allOrders} = useOrderShipment();
    const dispatch = useDispatch();
    const [orderWithEnlistmet, setOrderWithEnlistmet] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8; // Define cuántos elementos quieres mostrar por página
    const [filters, setFilters] = useState({
        city_transmiter: '',
        city_receiver: '',
        pay_method: '',
      })

    const totalPages = Math.ceil(allEnlistments.length / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    }

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const chargingData = async () => {
        if (!dataLoaded) {
            await dispatch(getAllEnlistments());
            await dispatch(getAllOrders());
            const orderWithEnlistmet = allEnlistments.map((enlistment) => {
                const orderShipment_Id = enlistment.ordershipment_id;
                const order = allOrders.find(order => order.id === orderShipment_Id);
                return {
                    ...enlistment,
                    order
                }
            });
            setOrderWithEnlistmet(orderWithEnlistmet);
            await dispatch(getAllEnlistments());
            setDataLoaded(true);
        }
    }

    useEffect(() => {
        chargingData();
    }, [dispatch, allEnlistments, allOrders]);

    return (
        <div >
            <h2 className="px-5 py-5 justify-center font-semibold text-gray-600">PEDIDOS</h2>
            
            <table className="min-w-full leading-normal">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"># Guía</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Distancia (Km)</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tiempo de entrega</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Precio</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre Solicitante</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teléfono Solicitante</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dirección Origen</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dirección Destino</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>    
                    </tr>
                </thead>
                {
                    orderWithEnlistmet.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((enlistment) => {
                        return (
                            <EnlistmentRow
                                enlistment={enlistment}
                                setShowModalDelete={setShowModalDelete}
                                setCurrentEnlistmentId={setCurrentEnlistmentId}
                                setActualDetail={setActualDetail}
                            />
                        )
                    })
                }
            </table>
            <div className="fixed bottom-0 left-0 right-0 flex justify-center bg-white py-5">
                <div className="inline-flex mt-2 xs:mt-0">
                    <button onClick={handlePreviousPage} className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                        Anterior
                    </button>
                    <button onClick={handleNextPage} className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                        Siguiente
                    </button>
                </div>
            </div>
            
        </div>
    );
};

export default EnlistmentTable;