
import useEnlistment from '../../../hooks/useEnlistment';


const EnlistmentRow = ({
    orderShipment_Id,
    enlistment,
    key,
    editOnOff, 
    setEditOnOff, 
    deleteOnOff, 
    setDeleteOnOff,
    setActualBackOrder,
    setSelectSubmit,
    createOnOff,
    setCreateOnOff,}) => {



    const onEdit = () => {
        setEditOnOff(false);
        setDeleteOnOff(false);
        setActualBackOrder(enlistment);
    }

    const onDelete = () => {
        console.log('Eliminando');
    }


    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">{enlistment.state}</td>
            <td className="px-6 py-4 whitespace-nowrap">{enlistment.guide_number}</td>
            <td className="px-6 py-4 whitespace-nowrap">{enlistment.distance}</td>
            <td className="px-6 py-4 whitespace-nowrap">{enlistment.delivery_time}</td>
            <td className="px-6 py-4 whitespace-nowrap">{enlistment.order_time}</td>
            <td className="px-6 py-4 whitespace-nowrap">{enlistment.price_order}</td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button onClick={onEdit} className="text-indigo-600 hover:text-indigo-900 mr-2">Editar</button>
                <button onClick={onDelete} className="text-red-600 hover:text-red-900">Eliminar</button>
            </td>
        </tr>
    );
}

export default EnlistmentRow;