import React, { useState } from 'react';
import DriverForm from './DriverForm';
import DriverFormEdit from './DriverFormEdit';
import DriverTable from './DriverTable';
import DriverDetail from './DriverDetail';
import DriverDelete from './DriverDelete';
import icon_crear from '../../../assets/Icon_crear.svg';

const Drivers = () => {
    const [actualBackOrder, setActualBackOrder] = useState('')
    const [selectSubmit, setSelectSubmit] = useState('')
    const [createOnOff, setCreateOnOff] = useState(false)
    const [showModal, setShowModal] = useState(false);
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [ShowModalDetail, setShowModalDetail] = useState(false);
    const [ShowModalDelete, setShowModalDelete] = useState(false)
    const [currentDriverId, setCurrentDriverId] = useState('')
    const [actualDetail, setActualDetail] = useState({})

    const handleCreate = () => {
        setShowModal(true);
    }
    
    return (
        <div>
            {
                showModal && 
                <DriverForm
                setShowModal={setShowModal}
                createOnOff={createOnOff}
                setCreateOnOff={setCreateOnOff}
                actualBackOrder={actualBackOrder}
                setActualBackOrder={setActualBackOrder}
                setSelectSubmit={setSelectSubmit}
                />
            }
            {
                showModalEdit &&
                <DriverFormEdit
                setShowModalEdit={setShowModalEdit}
                actualBackOrder={actualBackOrder}
                />
            }
            {
                ShowModalDetail &&
                <DriverDetail
                setShowModalDetail={setShowModalDetail}
                actualDetail={actualDetail}
                />
            }
            {
                ShowModalDelete &&
                <DriverDelete
                setShowModalDelete={setShowModalDelete}
                currentDriverId={currentDriverId}
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
                    <DriverTable 
                        setShowModalEdit={setShowModalEdit}
                        setShowModalDetail={setShowModalDetail}
                        setShowModalDelete={setShowModalDelete}
                        setCurrentDriverId={setCurrentDriverId}
                        setActualDetail={setActualDetail}
                        />
                </div>
            </div>
        </div>
        
    );
};

export default Drivers;