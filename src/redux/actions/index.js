import axios from "axios";

export const GET_USER_DETAIL = "GET_USER_DETAIL";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_ORDER_ID = "GET_ORDER_ID";
export const GET_ALL_ORDERS = "GET_ALL_ORDERS";
export const CREATE_ORDER = "CREATE_ORDER";
export const FILTER_VALUES = "FILTER_VALUES";
// export const FILTER_CITY_TRANSMITER = "FILTER_CITY_TRANSMITER";
// export const FILTER_CITY_RECEIVER = "FILTER_CITY_RECEIVER";


const URL_BASE = "http://localhost:3000";

const getAllUsers = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URL_BASE}/users`);
      // console.log(data)
      return dispatch({
        type: GET_ALL_USERS,
        payload: data,
      });
    } catch (error) {
      window.alert(error.message);
    }
  };
};

const allFilters = ()=>{
  return async (dispatch)=>{
    try {
      const {data} = await axios.get ("http://localhost:3000/order_shipments")
      return dispatch({
        type: FILTER_VALUES,
        payload: data
      })
    } catch (error) {
      window.alert(error.message);
    }
  }
}

// const OrdersFilters = () =>{

// }

// const createOrder = () => {
//   return async (dispatch) => {
//     try {
//       const { data } = await axios.post(
//         "http://localhost:3000/order_shipments"
//       );
//       return dispatch(
//         {
//           type: CREATE_ORDER,
//           payload: data,
//         },
//         console.log("INFO:", data)
//       );
//     } catch (error) {
//       window.alert(error.message);
//     }
//   };
// };

const createOrder = (userData) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3000/order_shipments",
        userData // Envía los datos del formulario como parte de la solicitud POST
      );
      dispatch({
        type: CREATE_ORDER,
        payload: data,
      });
      console.log("INFO:", data); // Mueve la impresión de la información dentro del bloque 'try'
    } catch (error) {
      window.alert(error.message);
    }
  };
};

const getUserDetail = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:3000/users/${id}`);
      //    const data=users.find(usuario => usuario.id === 4)
      console.log(data);
      return dispatch({
        type: GET_USER_DETAIL,
        payload: data,
      });
    } catch (error) {
      window.alert(error.message);
    }
  };
};

const getAllOrders = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:3000/order_shipments");
      console.log(data);
      return dispatch({
        type: GET_ALL_ORDERS,
        payload: data,
      });
    } catch (error) {
      window.alert(error.message);
    }
  };
};

const getOrderById = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/order_shipments/${id}`
      );
      // const data=orders.find(order => order.id === id)
      return dispatch({
        type: GET_ORDER_ID,
        payload: data,
      });
    } catch (error) {
      window.alert("No existe una orden de pedido con ese número");
    }
  };
};
// const filterCityTransmiter = (filter) => {
//   return {
//     type: FILTER_CITY_TRANSMITER,
//     payload: filter,
//   };
// };

// const filterCityReceiver = (filter) => {
//   return {
//     type: FILTER_CITY_RECEIVER,
//     payload: filter,
//   };
// };

// const orderDeclaredValue = (selectedFilters) => {
//   return async (dispatch) => {
//     try {
//       // Construir la URL base
//       let url = 'http://localhost:3000/order_shipments?';

//       // Iterar sobre los filtros seleccionados y agregarlos a la URL
//       Object.entries(selectedFilters).forEach(([key, value]) => {
//         if (value) { // Solo agregar el filtro si tiene un valor seleccionado
//           url += `${key}=${value}&&`;
//         }
//       });

//       // Eliminar el último '&' de la URL si es necesario
//       url = url.slice(0, -1);

//       // Realizar la solicitud HTTP con la URL construida
//       const { data } = await axios.get(url);

//       // Despachar la acción con los datos obtenidos
//       dispatch({
//         type: FILTER_VALUES,
//         payload: data
//       });
//     } catch (error) {
//       window.alert(error.message);
//     }
//   };
// };

export { 
  getUserDetail, 
  getAllUsers, 
  getOrderById, 
  getAllOrders, 
  createOrder,
  allFilters 
  };
