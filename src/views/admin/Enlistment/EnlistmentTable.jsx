import React from 'react';
import { useDispatch} from 'react-redux';
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

const chargingData = async () => {
    if (!dataLoaded) {
        await dispatch(getAllEnlistments());
        await dispatch(getAllOrders());
        const orderWithEnlistmet = allEnlistments.map((enlistment) => {
            const orderShipment_Id = enlistment.ordershipment_id;
            const order = allOrders.find(order => order.id === orderShipment_Id);
            console.log('order', order);    
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
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"># Guía</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Distancia (Km)</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tiempo de entrega</th>
                    {/*<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hora de Solicitud</th>*/}
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Precio</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre Solicitante</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teléfono Solicitante</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dirección Origen</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dirección Destino</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                </tr>
            </thead>
            {
                orderWithEnlistmet &&  orderWithEnlistmet.map((enlistment) => {
                    return (
                        <EnlistmentRow
                            enlistment={enlistment}
                            setShowModalEdit = {setShowModalEdit} 
                            setShowModalDetail={setShowModalDetail}
                            setShowModalDelete={setShowModalDelete}
                            setCurrentEnlistmentId={setCurrentEnlistmentId}
                            setActualDetail={setActualDetail}
                            />
                    )
                })

            }

        </table>
    );
};

export default EnlistmentTable;