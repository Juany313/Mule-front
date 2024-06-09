import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEnlistmentByGuideNumber, clearEnlistmentDetail } from '../redux/actions';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [guideNumber, setGuideNumber] = useState("");
  const enlistmentDetail = useSelector(state => state.enlistmentDetail);
  const [isOpen, setIsOpen] = useState(false);


  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
    dispatch(clearEnlistmentDetail());
  };

  
  const handleChange = (event) => {
    event.preventDefault();
    setGuideNumber(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!guideNumber.trim()){
      return
    }
    try {
      await dispatch(getEnlistmentByGuideNumber(guideNumber));
      setGuideNumber("");
      setIsOpen(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (enlistmentDetail && enlistmentDetail.length > 0) {
      handleOpen(setIsOpen(false));
    }
  }, []);

  return (
    <div className="flex items-center justify-start mt-8 ml-4 mb-4">
      <form onSubmit={handleSubmit} className="flex">
        <input
          className="border border-g400 focus:outline-none rounded-lg py-2 px-20 block w-full appearance-none leading-normal"
          type="text"
          value={guideNumber}
          placeholder="Código de seguimiento"
          onChange={handleChange}
        />
        <button
          className="bg-s300 text-gray-800 hover:bg-p300 hover:text-white font-bold py-2 px-4 ml-2 rounded-lg"
          type="submit" disabled = {guideNumber.trim().length !==10}
        >
          Buscar
        </button>
      </form>
      {isOpen && enlistmentDetail && enlistmentDetail.length > 0 && (
        <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
          <div className='bg-white p-5 rounded flex flex-col justify-center items-center gap-5'>
            <button className='self-end' onClick={handleClose}>X</button>
            <div className=" p-6 bg-white shadow-lg rounded-md">
              <h2 className="text-xl font-bold text-center mb-4 text-gray-700">Detalle del Pedido</h2>
              <div className="text-center">
                <p>
                  <span className="font-bold text-gray-700">Número de seguimiento:</span> <span className="text-gray-500">{enlistmentDetail[0]?.guide_number}</span>
                </p>
                <p>
                  <span className="font-bold text-gray-700">Estado del envío:</span> <span className="text-gray-500">{enlistmentDetail[0]?.state}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
