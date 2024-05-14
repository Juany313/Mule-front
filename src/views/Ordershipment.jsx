import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { filterCityTransmiter, getAllOrders, filterCityReceiver, allFilters} from '../redux/actions';
import Pagination from '../components/Pagination';

const Ordershipment = () => {
  const dispatch = useDispatch();
  const allOrders = useSelector ((state)=>state.allOrders)
  const filters = useSelector ((state)=>state.filters)



  useEffect(()=>{
    dispatch(getAllOrders());
  }, [dispatch])

  const handlerFilter = (filters)=>{
    const {city_receiver, city_transmiter, pay_method} = filters
    const ordersFiltered= allOrders.filter(()=>{
      order.city_receiver === city_receiver && order.city_transmiter === city_transmiter && order.pay_method === pay_method
    })
    dispatch(getAllOrders(ordersFiltered))   
  }

    const handleFilters = (e) =>{
    e.preventDefault();
    dispatch(allFilters(...filters, {city_receiver: e.target.value}, 
      {city_transmiter: e.target.value}, {pay_method: e.target.value}))
  }

  // const handleFilterCityReceiver = (e) =>{
  //   e.preventDefault();
  //   dispatch(filterCityReceiver(e.target.value))
  // }
//  console.log(allOrders)
 
//  const [options, setOptions] = useState([]);

//  const set = new Set();

//  useEffect(() => {
//    const fetchData = async () => {
//      try {
//        const response = await fetch("http://localhost:3000/order_shipments");

//        const data = await response.json();

//        data.map((elem) => set.add(elem.city_transmiter, elem.city_receiver, declared_value, pay_method));

//        const optionsArr = [...set];

//        setOptions(optionsArr);
//      } catch (error) {
//        console.log("error: ", error);
//      }
//    };

//    fetchData();
//  }, []);

// const [selectedFilters, setSelectedFilters] = useState({});


// const handleClickOrderDeclaredValue = (e) => {
//   e.preventDefault();


//   const fieldName = e.target.name;
//   const fieldValue = e.target.value;


//     // Actualizar el estado de los filtros seleccionados
//     setSelectedFilters(prevState => ({
//       ...prevState,
//       [fieldName]: fieldValue
//     }));

//     dispatch(orderDeclaredValue(selectedFilters));

// }

 //order
 const handleClickOrderDeclaredValue = (e) => {
  e.preventDefault();

  // Obtener los nombres de los campos (claves) de los <select>
  const fieldNames = ["city_transmiter", "city_receiver", "declared_value", "pay_method"];

  // Obtener los valores seleccionados de los <select>
  const selectedValue = e.target.value;

  // Crear un array de objetos donde cada objeto tiene una clave y su valor asociado
  const selectedFields = fieldNames.map(fieldName => ({
    [fieldName]: fieldName === e.target.name ? selectedValue : null
  }));

  // Llamar a dispatch con el array de objetos clave-valor
  dispatch(orderDeclaredValue(selectedFields));
};

  return (
    <>
    <div id='ordershipment' className='min-h-screen bg-p300 flex flex-col items-center justify-start pt-[7rem] text-white' >
      <h1 className='mb-[100px] font-bold text-4xl mb-2'>
        Clientes que confían en nosotros
      </h1>
      <div>
      <select className='text-g500' onChange={(e)=>{
                handleFilters(e)
              }}>
                <option value="all">Ciudad origen</option>
                {allOrders.map((elem)=>{
                  return (
                    <option value={elem.city_transmiter} key={elem.city_transmiter}>
                      {elem.city_transmiter}
                    </option>
                  )
                })}
            </select>
            <select className='text-g500' onChange={(e)=>{
                handleFilters(e)
              }}>
                <option value="all">Ciudad destino</option>
                {allOrders.map((elem)=>{
                  return (
                    <option value={elem.city_receiver} key={elem.city_receiver}>
                      {elem.city_receiver}
                    </option>
                  )
                })}
            </select>
            <select className='text-g500' onChange={(e)=>{
                handleFilters(e)
              }}>
                <option value="all">Método de pago</option>
                {allOrders.map((elem)=>{
                  return (
                    <option value={elem.pay_method} key={elem.pay_method}>
                      {elem.pay_method}
                    </option>
                  )
                })}
            </select>
      

      </div>
      <div>
          <Pagination allOrders={allOrders}/>      
        </div>
    </div>
    </>
  )
}

export default Ordershipment