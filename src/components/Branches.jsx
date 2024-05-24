import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getAllBranches} from '../redux/actions/index'
import { useEffect } from 'react';

const Branches = () =>{
    const dispatch = useDispatch();
    const allBranches = useSelector((state)=>state.allBranches)
    
    useEffect(()=> {
        dispatch(getAllBranches())
    }, [dispatch])


    const handleClickBranches = (e) =>{
        e.preventDefault();
        dispatch(getAllBranches(e.target.value))
    }

    return (
        <div>
            <section>
            <select className="w-full p-2 border border-gray-300 rounded-md text-gray-700"
              onChange={(e)=>{
                handleClickBranches(e)
              }}>
                <option value="all">Sucursal</option>
                {allBranches.map((elem)=>{
                  return (
                    <option value={elem.name} key={elem.name}>
                      {elem.name}
                    </option>
                  )
                })}
            </select>
            </section>
        </div>
    )
}

export default Branches;