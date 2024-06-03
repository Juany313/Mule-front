import React from 'react';
import { useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { getAllEnlistments } from '../../../redux/actions';
import useEnlistment from '../../../hooks/useEnlistment';
import EnlistmentRow from './EnlistmentRow';

const EnlistmentTable = (
    editOnOff ,
    setEditOnOff,
    deleteOnOff,
    setDeleteOnOff,   
    actualBackOrder, 
    setActualBackOrder,
    setSelectSubmit,
    createOnOff,
    setCreateOnOff
) => {
    const { allEnlistments } = useEnlistment();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllEnlistments());
    }
    , [dispatch]);

    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"># Guía</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Distancia (Km)</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tiempo de entrega</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hora de Solicitud</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Precio</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                </tr>
            </thead>
            {
                allEnlistments.map((enlistment) => {
                    const orderShipment_Id = enlistment.ordershipment_id;
                    return (
                        <EnlistmentRow
                            orderShipment_Id={orderShipment_Id}
                            enlistment={enlistment} 
                            key={enlistment.id} 
                            actualBackOrder={actualBackOrder}
                            editOnOff={editOnOff} 
                            setEditOnOff={setEditOnOff}
                            deleteOnOff={deleteOnOff}
                            setDeleteOnOff={setDeleteOnOff}                            
                            setActualBackOrder={setActualBackOrder}
                            setSelectSubmit={setSelectSubmit}
                            createOnOff = {createOnOff}
                            setCreateOnOff = {setCreateOnOff}  
                            />
                    )
                })

            }

        </table>
    );
};

export default EnlistmentTable;