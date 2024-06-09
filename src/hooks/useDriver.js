import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDrivers } from '../redux/actions';

const useDriver = () => {
    const dispatch = useDispatch();
    const  allDrivers  = useSelector(state => state.allDrivers);

    const [dataLoaded, setDataLoaded] = useState(false);

    const chargingData = async () => {
        if (!dataLoaded) {
            await dispatch(getDrivers());
            setDataLoaded(true);
        }
    }

    useEffect(() => {
        chargingData();
    }, [dispatch]);

    return {
        allDrivers
    }
}

export default useDriver;