import {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { getAllEnlistments } from '../redux/actions/index';



const useEnlistment = () => {

    const allEnlistments = useSelector(state => state.allEnlistments);
   
    useEffect(() => {
        getAllEnlistments();
    }, []);

        return { allEnlistments };

}

export default useEnlistment;