import React from 'react';
import icon_cancel from '../../../assets/Icon_cancelar.svg';
import { putEnlistment } from '../../../redux/actions';
import { useDispatch } from 'react-redux';

const EnlistmentDetail = (
    {
        setShowModalDetail,
        actualBackOrder
    }
) => {
    const enlistment = actualBackOrder; 

    const handleCancel = () => {
        setShowModalDetail(false);
    };

    return (
        <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center '>
            <div className='bg-white p-5 rounded flex-col justify-center items-center gap-5 mt-20'  style={{ width: '500px', maxHeight: '80vh', overflowY: 'auto' }}>
                <div className='icon-cancel-container'style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <img src={icon_cancel} alt="crear" 
                        onClick={handleCancel} 
                        className='icon-create'
                        style={{ cursor: 'pointer' }} />
                </div>
                <div>
                    // Este div renderiza toda la información de la orden de envío
                    <div>
                        <h3>Información Detallada del envío</h3>
                    </div>
                </div>

            </div>
        </div>
        
        
    );
};

export default EnlistmentDetail;