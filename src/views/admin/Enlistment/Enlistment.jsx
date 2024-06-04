import React, { useState } from 'react';
import EnlistmentForm from './EnlistmentForm';
import EnlistmentFormEdit from './EnlistmentFormEdit';
import EnlistmentTable from './EnlistmentTable';
import EnlistmentDetail from './EnlistmentDetail';
import icon_crear from '../../../assets/Icon_crear.svg';

const Enlistments = () => {
    const [editOnOff, setEditOnOff] = useState(true);
    const [deleteOnOff, setDeleteOnOff] = useState(true);
    const [actualBackOrder, setActualBackOrder] = useState('')
    const [selectSubmit, setSelectSubmit] = useState('')
    const [createOnOff, setCreateOnOff] = useState(false)
    const [showModal, setShowModal] = useState(false);
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [ShowModalDetail, setShowModalDetail] = useState(false);

    const handleCreate = () => {
        setShowModal(true);
    }

    return (
        <div>
            {
                showModal && 
                <EnlistmentForm
                setShowModal={setShowModal}
                createOnOff={createOnOff}
                setCreateOnOff={setCreateOnOff}
                actualBackOrder={actualBackOrder}
                setSelectSubmit={setSelectSubmit}
                />
            }
            {
                showModalEdit &&
                <EnlistmentFormEdit
                setShowModalEdit={setShowModalEdit}
                />
            }
            {
                ShowModalDetail &&
                <EnlistmentDetail
                setShowModalDetail={setShowModalDetail}
                />
            }
            <div className=" md:space-x-6 space-y-6 md:space-y-0 m-8">
                <div className='icon-create-container'>
                    <img src={icon_crear} alt="crear" 
                        onClick={handleCreate} 
                        className='icon-create'
                        style={{ cursor: 'pointer' }} />
                </div>
                <div className="md:w-2/3">
                    <EnlistmentTable 
                        setShowModalEdit={setShowModalEdit}
                        setShowModalDetail={setShowModalDetail}
                        />
                </div>
            </div>
        </div>
        
    );
};

export default Enlistments;