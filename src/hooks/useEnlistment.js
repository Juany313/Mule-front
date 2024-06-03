import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllEnlistments } from '../redux/actions/index';



const useEnlistment = () => {

    const dispatch = useDispatch();
    const allEnlistments = useSelector(state => state.allEnlistments);
    const [error, setError] = useState(null);
    const [currentOrder, setCurrentOrder] = useState(null);


const getOrderShipmentById = async (id) => {
    const response = await fetch(`http://localhost:3000/order_shipments/${id}`);
    const data = await response.json();
    return data;
}

    useEffect(() => {
        fetch('http://localhost:3000/order_shipments')
            .then(response => response.json())
            .then(data => {
                dispatch(
                    getAllEnlistments(data)
                );
            })
            .catch(error => {
                setError(error);
            });

    }, []);

    useEffect(() => {
        fetch('http://localhost:3000/enlistments')
            .then(response => response.json())
            .then(data => {
                dispatch(
                    getAllEnlistments(data)
                );
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });

    }, []);

        return { allEnlistments, error, getOrderShipmentById };

}

export default useEnlistment;