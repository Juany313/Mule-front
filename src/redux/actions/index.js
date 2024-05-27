import axios from "axios";
import Swal from "sweetalert2";

export const GET_USER_DETAIL = "GET_USER_DETAIL";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_ORDER_ID = "GET_ORDER_ID";
export const GET_ALL_ORDERS = "GET_ALL_ORDERS";
export const CREATE_ORDER = "CREATE_ORDER";
export const FILTER_VALUES = "FILTER_VALUES";
export const GET_ALL_MEASURES = "GET_ALL_MEASURES";
export const GET_TYPES_SHIPMENTS = "GET_TYPES_SHIPMENTS";
export const GET_ALL_BRANCHES = "GET_ALL_BRANCHES";
export const GET_ORDERS_BY_CLIENT = "GET_ORDERS_BY_CLIENT";
export const FILTER_BY_CITY = "FILTER_BY_CITY";
export const ORDER_BY_DATE = "ORDER_BY_DATE";
export const IS_LOGGED = "IS_LOGGED";
export const INFO_USER_LOGGED = "INFO_USER_LOGGED";
export const GET_ORDER_BY_ID = "GET_ORDER_BY_ID";
export const SET_ORDER_TYPE = "SET_ORDER_TYPE";
export const UPDATE_USER_DETAIL = "UPDATE_USER_DETAIL"
/* Juanyyyy */
export const AGREGAR_PEDIDO = "AGREGAR_PEDIDO";
export const POST_USER = "AGREGAR_PEDIDO";

// const URL_BASE = "http://localhost:3000";

// actions.js

export const setOrderType = (orderType) => {
  return {
    type: SET_ORDER_TYPE,
    payload: orderType,
  };
};

export const agregarPedido = (pedido) => {
  return {
    type: AGREGAR_PEDIDO,
    payload: pedido,
  };
};


/* export function postUser(data) {
  return async function(dispatch) {
      try {
      const response = await axios.post('http://localhost:3000/users/register', data);

      return dispatch({
          type: POST_USER,
          payload: response.data,
      });
      } catch (error) {
      console.error(error.message);
      }
  };
} */

//formulario de registro
export function postUser(data) {
  return async function(dispatch) {
    try {
      const response = await axios.post('http://localhost:3000/users/register', data);
      dispatch({
        type: POST_USER,
        payload: response.data,
      });
      // Devuelve un objeto de acción indicando que la solicitud se completó con éxito
      return { success: true };
    } catch (error) {
      console.error("Error al crear el usuario:", error.message);
      // Devuelve un objeto de acción indicando que la solicitud falló
      return { success: false };
    }
  };
}


//Permiso provisorio para que el usuario pueda ver los usuarios
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
      // window.alert(error.message);
    }
  };
};

const getAllMeasures = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URL_BASE}/measures`);
      // console.log(data)
      return dispatch({
        type: GET_ALL_MEASURES,
        payload: data,
      });
    } catch (error) {
      // window.alert(error.message);
    }
  };
};

const getTypeShipments = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URL_BASE}/type_shipments`);
      // console.log(data)
      return dispatch({
        type: GET_TYPES_SHIPMENTS,
        payload: data,
      });
    } catch (error) {
      // window.alert(error.message);
    }
  };
};

const getAllBranches = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URL_BASE}/branches`);
      // console.log(data)
      return dispatch({
        type: GET_ALL_BRANCHES,
        payload: data,
      });
    } catch (error) {
      // window.alert(error.message);
    }
  };
};

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
      Swal.fire({
        title: "Orden de pedido creada!",
        text: "La orden de pedido ha sido creada exitosamente",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
      console.log("INFO:", data); // Mueve la impresión de la información dentro del bloque 'try'
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Error al crear el pedido",
        icon: "Error",
        confirmButtonText: "Aceptar",
      });
    }
  };
};

//Bien de Seguridad, incluye el token, bearer configurado en back ?
const getUserDetail = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:3000/users/${id}`,{
        method: "GET",
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
    });

    const data = await response.json();

      //    const data=users.find(usuario => usuario.id === 4)
      console.log(data);
      return dispatch({
        type: GET_USER_DETAIL,
        payload: data,
      });
    } catch (error) {
      // window.alert(error.message);
    }
  };
};

//Bien de Seguridad, incluye el token, bearer configurado en back ?
const getOrdersByClient = (id) =>{
  return async (dispatch)=>{
    try {
      // const token = localStorage.getItem('token')
      // if (!token) {
      //   throw new Error('No token found');
      // };
      const response = await axios.get (`http://localhost:3000/order_shipments/${id}`
      // , {
      //   headers: {
      //     "Authorization": `Bearer ${token}`
      //   }
      // }
    )
      return dispatch ({
        type: GET_ORDERS_BY_CLIENT,
        payload: response.data
      })
    }catch (error) {
      // window.alert(error.message);
    }
  }

}

// Falla de seguridad?
const getAllOrders = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:3000/order_shipments");
      console.log('X', data);
      return dispatch({
        type: GET_ALL_ORDERS,
        payload: data,
      });
    } catch (error) {
      // window.alert(error.message);
    }
  };
};


/* Falla de seguridad */
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
      // window.alert("No existe una orden de pedido con ese número");
    }
  };
};

// Falla de seguridad
const orderDeclaredValue = (selectedValues) => {
  return async (dispatch) => {
    try {
      // Construir la cadena de parámetros de consulta con claves asociadas a los valores seleccionados
      const queryParams = selectedValues
        .map((field) => `${Object.keys(field)[0]}=${Object.values(field)[0]}`)
        .join("&");
      // Agregar la cadena de parámetros de consulta a la URL base
      const url = `http://localhost:3000/order_shipments?${queryParams}`;

      // Realizar la solicitud GET con la URL construida
      const { data } = await axios.get(url);
      console.log("estoy en action", data);
      // Despachar la acción con los datos obtenidos
      return dispatch({
        type: FILTER_VALUES,
        payload: data,
      });
    } catch (error) {
      window.alert(error.message);
    }
  };
};

const filterCity = (cities)=>{
  return {
    type: FILTER_BY_CITY,
    payload: cities
  }
}

const orderDate = (date)=>{
  return {
    type: ORDER_BY_DATE,
    payload: date
  }
}

const setIsLogged = (isLogged) => {
  return {
    type: IS_LOGGED,
    payload: isLogged,
  };
}

const setInfoUserLogged = (user) => {
  return {
    type: INFO_USER_LOGGED,
    payload: user,
  };
}

const updateUserDetail = (id, infoUser)=>{
  return async (dispatch)=>{
    try {
      const { data } = await axios.put(`http://localhost:3000/users/profile/${id}`, infoUser
      );
      return dispatch({
        type: UPDATE_USER_DETAIL,
        payload: data,
      });
      
    } catch (error) {
      
    }
  }
}

export {
  getUserDetail,
  getAllUsers,
  getOrderById,
  getAllOrders,
  createOrder,
  orderDeclaredValue,
  getAllMeasures,
  getTypeShipments,
  getAllBranches,
  getOrdersByClient,
  filterCity,
  orderDate,
  setIsLogged,
  setInfoUserLogged,
  updateUserDetail
};
