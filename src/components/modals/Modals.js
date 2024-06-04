import React from 'react'
import Modal from "./Modal"

const Modals = () => {
    const [isOpenModalTracking, openModalTracking, closeModalTracking]= useModal(false)
  return (
    <div>
        <h2>Modales</h2>
        <button onClick={openModalTracking}>Modal 1</button>
        <Modal isOpen= {isOpenModalTracking} closeModal1={closeModalTracking}>
            <h3>Modal 1</h3>
            <p>Hola</p>
            <img src= "http://placeimg.com/400/400/animals" alt= "Animals" />
        </Modal>
        {/* <button>Modal 2</button> */}
        {/* <Modal>
            <h3>Otro modal</h3>
            <p>Lorem ipsum</p>
            <img src= "http://placeimg.com/400/400/nature" alt= "Nature" />
        </Modal> */}
        
    </div>
  )
}

export default Modals