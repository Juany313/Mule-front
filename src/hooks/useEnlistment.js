import {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { getAllEnlistments , setEnlistments } from '../redux/actions/index';



const useEnlistment = () => {

    const allEnlistments = useSelector(state => state.allEnlistments);
   
    useEffect(() => {
        getAllEnlistments();
    }, []);

        return { allEnlistments, setEnlistments };

}

export default useEnlistment;