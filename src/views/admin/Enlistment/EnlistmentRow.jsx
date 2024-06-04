
import useEnlistment from '../../../hooks/useEnlistment';
import icon_editar from '../../../assets/Icon_editar1.svg';
import icon_eliminar from '../../../assets/Icon_eliminar1.svg';
import { IoIosEye } from "react-icons/io";
import { useState } from 'react';


const EnlistmentRow = ({
    enlistment,
    setShowModalEdit,
    setShowModalDetail,
    setShowModalDelete,
    setCurrentEnlistmentId
    }) => {

    
    console.log('EnlistmentRow', enlistment);
    

    const onEdit = () => {
        setShowModalEdit(true);
    }

    const onDelete = () => {
        setCurrentEnlistmentId(enlistment.id);
        setShowModalDelete(true);
    }

    const onDetail = () => {
        setShowModalDetail(true)
    }


    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">{enlistment.state}</td>
            <td className="px-6 py-4 whitespace-nowrap">{enlistment.guide_number}</td>
            <td className="px-6 py-4 whitespace-nowrap">{enlistment.distance}</td>
            <td className="px-6 py-4 whitespace-nowrap">{enlistment.delivery_time}</td>
            {/*<td className="px-6 py-4 whitespace-nowrap">{enlistment.order_time}</td>*/}
            <td className="px-6 py-4 whitespace-nowrap">{enlistment.price_order}</td>
            <td className="px-6 py-4 whitespace-nowrap">{enlistment.order && enlistment.order.name_claimant}</td>
            <td className="px-6 py-4 whitespace-nowrap">{enlistment.order && enlistment.order.cellphone_claimant}</td>
            <td className="px-6 py-4 whitespace-nowrap">{enlistment.order && enlistment.order.address_transmiter}</td>
            <td className="px-6 py-4 whitespace-nowrap">{enlistment.order && enlistment.order.address_receiver}</td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button 
                    onClick={onEdit} 
                    className="text-indigo-600 hover:text-indigo-900 mr-2"
                    style={{ marginRight: '10px' }}
                >
                    
                    <img src={icon_editar} alt="editar" 
                    className='w-5'
                    style={{ cursor: 'pointer' }} />
                </button>
                <button 
                    style={{ marginRight: '10px' }}
                    onClick={onDelete} 
                    >
                    <img src={icon_eliminar} alt="eliminar" 
                    className='w-5'
                    style={{ cursor: 'pointer' }} />
                </button>
                <button  className='w-5'> 
                <IoIosEye 
                    style={{ fontSize: '24px' }}
                    onClick={onDetail}
                    />
                </button>
            </td>
        </tr>
    );
}

export default EnlistmentRow;