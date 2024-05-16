import { Link } from "react-router-dom";

const Card = ({ order }) => {
  const { id, city_receiver, city_transmiter, product_image } = order;

  return (
    <Link to={`/header/ordershipment/detail/${id}`}>
      <div className="bg-white shadow-1-p rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition gap-4">
        <img className="mb-8" src={product_image} alt="img" />
        <div className="mb-4 flex gap-x-2 text-sm">
          <div className="flex justify-center gap-x-4 my-4">
            <div className="bg-s500 rounded-full font-semibold text-white px-6 mx-auto my-auto">
              Origen {city_transmiter}
            </div>
            <div className="bg-s500 rounded-full font-semibold text-white px-6 mx-auto my-auto">
              Destino {city_receiver}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;

// return (
//   <div className='flex items-center justify-center min-h-screen container mx-auto'>
//     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
//   <Link to={`/detail/${id}`} >
//     <div className='rounded-xl shadow-lg'>
//     <div className='p-5 flex flex-col'>
//       <div className='rouned-xl overflow-hidden'>
//         <img src = {product_image} alt= "img" />
//         </div>
//         <p>{city_transmiter}</p>
//         <p>{city_receiver}</p>
//     </div>
//     </div>
//   </Link>
//   </div>
//   </div>
// );
// }
