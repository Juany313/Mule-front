import { Link } from "react-router-dom";

const Card = ({ order }) => {
  const { id, city_receiver, city_transmiter, product_image } = order;

  return (
    <Link
      to={`/header/ordershipment/detail/${id}`}
      className="block transform transition duration-500 hover:scale-105"
    >
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full h-80 max-w-xs mx-auto cursor-pointer hover:shadow-2xl transition-shadow duration-300">
        <div className="h-40 w-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={product_image}
            alt="Product"
          />
        </div>
        <div className="p-4 flex flex-col justify-between h-40">
          <div className="flex flex-col gap-y-2 text-sm">
            <div className="bg-blue-500 text-white font-semibold py-1 px-4 rounded-full text-center">
              Origen: {city_transmiter}
            </div>
            <div className="bg-green-500 text-white font-semibold py-1 px-4 rounded-full text-center">
              Destino: {city_receiver}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
