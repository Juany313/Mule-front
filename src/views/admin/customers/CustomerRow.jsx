
import useEnlistment from '../../../hooks/useEnlistment';
import icon_editar from '../../../assets/Icon_editar1.svg';
import icon_eliminar from '../../../assets/Icon_eliminar1.svg';
import { IoIosEye } from "react-icons/io";
import { useState } from 'react';


const CustomerRow = ({
    user,
    setShowModalDelete,
    setCurrentUserId,
    }) => {

    
    console.log('UserRow', user);

    const onDelete = () => {
        setCurrentUserId(user.id);
        setShowModalDelete(true);
    }

    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
            <td className="px-6 py-4 whitespace-nowrap">{user.nickname}</td>
            <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
            <td className="px-6 py-4 whitespace-nowrap">{user.emailVerified}</td>
            <td className="px-6 py-4 whitespace-nowrap">{user.cedula}</td>
            <td className="px-6 py-4 whitespace-nowrap">{user.cel_Phone_Number}</td>
            <td className="px-6 py-4 whitespace-nowrap">{user.fee_Category_Percentage}</td>
            <td className="px-6 py-4 whitespace-nowrap">{user.category}</td>
            <td className="px-6 py-4 whitespace-nowrap">{user.age}</td>
            <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
            <td className="px-6 py-4 whitespace-nowrap">{user.isActive}</td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                
                <button 
                    style={{ marginRight: '10px' }}
                    onClick={onDelete} 
                    >
                    <img src={icon_eliminar} alt="eliminar" 
                    className='w-5'
                    style={{ cursor: 'pointer' }} />
                </button>
            </td>
        </tr>
    );
}

export default CustomerRow;