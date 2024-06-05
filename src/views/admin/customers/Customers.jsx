import React, { useState } from 'react';
//import CustomerForm from './CustomerForm';
import CustomerTable from './CustomersTable';
import CustomerDelete from './CustomerDelete';
import icon_crear from '../../../assets/Icon_crear.svg';

const Customers = () => {
    const [actualBackOrder, setActualBackOrder] = useState('')
    const [selectSubmit, setSelectSubmit] = useState('')
    const [createOnOff, setCreateOnOff] = useState(false)
    const [showModal, setShowModal] = useState(false);
    const [ShowModalDelete, setShowModalDelete] = useState(false)
    const [currentUserId, setCurrentUserId] = useState('')


    const handleCreate = () => {
        setShowModal(true);
    }

    return (
        <div>
            {
                showModal && 
                <CustomerForm
                  setShowModal={setShowModal}
                  createOnOff={createOnOff}
                  setCreateOnOff={setCreateOnOff}
                  actualBackOrder={actualBackOrder}
                  setActualBackOrder={setActualBackOrder}
                  setSelectSubmit={setSelectSubmit}
                />
            }
            {
                ShowModalDelete &&
                <CustomerDelete
                setShowModalDelete={setShowModalDelete}
                currentUserId={currentUserId}
                />
            }
            <div className=" md:space-x-6 space-y-6 md:space-y-0 m-8">
                
                <div className="md:w-2/3">
                    <CustomerTable 
                        setShowModalDelete={setShowModalDelete}
                        setCurrentUserId={setCurrentUserId}
                        />
                </div>
            </div>
        </div>
        
    );
};

export default Customers;