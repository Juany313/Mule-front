import {Link} from 'react-router-dom';

const Card = ({order}) =>{
  const {id, city_receiver, city_transmiter, product_image} = order;

    return (
      <Link to={`detail/${id}`} >
        <div className='w-[80vw] h-[40vh] mt-8 p-8 flex justify-evenly'>
            <img src = {product_image} alt= "img" />
            <p>{city_transmiter}</p>
            <p>{city_receiver}</p>
        </div>
      </Link>
    );
  }
  
export default Card;