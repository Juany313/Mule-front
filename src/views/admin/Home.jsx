import React from 'react'

/* views */
import About from '../About'
import Service from '../Service'
import SearchBar from '../../components/SearchBar';
import Ordershipment from '../Ordershipment';

const Home = () => {
  return (
    <>
      <div 
        className="relative bg-cover bg-end h-[83vh]"
        style={{ backgroundImage: `url(https://s3-alpha-sig.figma.com/img/88cf/36a6/3f4f6b49050c73ca469d578f76d260dd?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fr9-z9hxUa2HuG~Ew-7AMtSgo1XNHaVWRF1KuzRer3dDq40WnWzjKKU9m689mGM6VBpy7zVVhs2EjZT~Mb~~625MfOMvUBaXswJhH5kDLzVUGQR1Tof87zNQ5m9Rjrav-Tdoe5rMOqpatM2Dz3weDi2RrHi9umPfg7kyLvL1JbDaSIbgRja1aL3rALUiRuchfc~OLqyTl4hqWm~xTRN386s4MAxgf4PkK0CR4sSdmbrrCw3zUfG~2AV940nWT4sPKclsiYausFgVtTx5bHCo4iMCCx5gUPsm3dlqUwoSncUDWGix9P6rQYKhwWIdu6t9VqnEMokdYAVQ366JixyiVg__)` }}
      >
        <div className='absolute w-[500px] h-[300px]  top-[200px] left-[50px] right-0 bottom-0 flex flex-col justify-center items-start'>
          <div className=' p-4  rounded-md text-center'>
            <h1 className='text-black text-start font-semibold text-2xl mb-2'>SEGUIMIENTO DE TU ENVÍO</h1>
            <SearchBar/>
          </div>
        </div>
      </div>
      <Service/>
      <About/>
      <Ordershipment/>
    </>
  );
};

export default Home