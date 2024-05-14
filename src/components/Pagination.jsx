import React from "react";
import { useState } from "react";
import Cards from './Cards';

const Pagination = ({allOrders}) => {
    
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 4;
  
    // Calcular el índice inicial y final de las tarjetas en la página actual
    const indexOfLastCard = currentPage * cardsPerPage; 
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;                   
    const currentCards = allOrders.slice(indexOfFirstCard, indexOfLastCard); 
  
    // Cambiar a la página siguiente
    const nextPage = () => {
      setCurrentPage(currentPage + 1); //seteo mi estado de la pagina actual
    };
  
    // Cambiar a la página anterior
    const prevPage = () => {
      setCurrentPage(currentPage - 1);
    };
  
    return (
      <div>
        <div>
        <Cards OrdersList={currentCards} />
        </div>
        <div>
        <div className='flex justify-center gap-4 mt-4'>
            <button  className='bg-p300 hover:bg-p500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            onClick={prevPage} disabled={currentPage === 1}>
              Anterior
            </button>
            <button  className='bg-p300 hover:bg-p500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            onClick={nextPage} disabled={indexOfLastCard >= allOrders.length}>
              Siguiente
            </button>
        </div>
      </div>
      </div>
    );
  };
  
  export default Pagination;
