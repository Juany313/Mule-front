import React from 'react';
import { useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { getDrivers} from '../../../redux/actions';
import useDriver from '../../../hooks/useDriver';
import DriverRow from './DriverRow';

const DriverTable = (
   {
    setShowModalEdit,
    setShowModalDetail,
    setShowModalDelete,
    setCurrentDriverId,
    setActualDetail
   }
) => {
    const { allDrivers } = useDriver();
    const dispatch = useDispatch();

    const [dataLoaded, setDataLoaded] = useState(false);

const chargingData = async () => {
    if (!dataLoaded) {
        await dispatch(getDrivers());
        setDataLoaded(true);
    }
}

useEffect(() => {
    chargingData();
    console.log(allDrivers);
}, [dispatch, allDrivers ]);
    

    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deuda</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Antiguedad</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                </tr>
            </thead>
            {
                allDrivers &&  allDrivers.map((driver) => {
                    return (
                        <DriverRow
                            driver={driver}
                            setShowModalEdit = {setShowModalEdit} 
                            setShowModalDetail={setShowModalDetail}
                            setShowModalDelete={setShowModalDelete}
                            setCurrentDriverId={setCurrentDriverId}
                            setActualDetail={setActualDetail}
                            />
                    )
                })

            }

        </table>
    );
};

export default DriverTable;