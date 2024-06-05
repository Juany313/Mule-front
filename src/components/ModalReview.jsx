import React from 'react'
import { useState } from 'react';
import ReviewForm from './ReviewForm';

const ModalReview = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  return (
    <>
      <button className='bg-s300 py-2 px-6 rounded-lg text-gray-600 font-semibold'
        onClick={handleOpen}>
        Deja tu comentario
      </button>
      {isOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
          <div className='bg-white p-5 rounded flex flex-col justify-center items-center gap-5'>
            <button className='self-end' onClick={handleClose}>X</button>
            <ReviewForm onSuccess={handleClose} />
          </div>
        </div>
      )}
    </>
  );
};

export default ModalReview