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
/* Juanyyyy */
export const AGREGAR_PEDIDO = "AGREGAR_PEDIDO";
export const POST_USER = "AGREGAR_PEDIDO";

// const URL_BASE = "http://localhost:3000";

/* Juanyyyyy */

// actions.js

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

export function postUser(data) {
  return async function (dispatch) {
    try {
      const response = await axios.post("/users/register", data);
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

/* Juanyyyyy */

const getAllUsers = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/users`);
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

const getAllMeasures = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/measures`);
      // console.log(data)
      return dispatch({
        type: GET_ALL_MEASURES,
        payload: data,
      });
    } catch (error) {
      window.alert(error.message);
    }
  };
};

const getTypeShipments = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/type_shipments`);
      // console.log(data)
      return dispatch({
        type: GET_TYPES_SHIPMENTS,
        payload: data,
      });
    } catch (error) {
      window.alert(error.message);
    }
  };
};

const getAllBranches = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/branches`);
      // console.log(data)
      return dispatch({
        type: GET_ALL_BRANCHES,
        payload: data,
      });
    } catch (error) {
      window.alert(error.message);
    }
  };
};

const createOrder = (userData) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        "/order_shipments",
        userData // Envía los datos del formulario como parte de la solicitud POST
      );
      dispatch({
        type: CREATE_ORDER,
        payload: data,
      });
      Swal.fire({
        title: "Orden de pedido creada!",
        text: "Redirigiendo a método de pago...",
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

const getUserDetail = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`/users/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
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
      window.alert(error.message);
    }
  };
};

const getOrdersByClient = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }
      const response = await axios.get("/order_shipments", {

        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return dispatch({
        type: GET_ORDERS_BY_CLIENT,
        payload: response.data,
      });
    } catch (error) {
      window.alert(error.message);
    }
  };
};

const getAllOrders = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/order_shipments");
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
      const { data } = await axios.get(`/order_shipments/${id}`);
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

const orderDeclaredValue = (selectedValues) => {
  return async (dispatch) => {
    try {
      // Construir la cadena de parámetros de consulta con claves asociadas a los valores seleccionados
      const queryParams = selectedValues
        .map((field) => `${Object.keys(field)[0]}=${Object.values(field)[0]}`)
        .join("&");
      // Agregar la cadena de parámetros de consulta a la URL base
      const url = `/order_shipments?${queryParams}`;

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

const filterCity = (cities) => {
  return {
    type: FILTER_BY_CITY,
    payload: cities,
  };
};

const orderDate = (date) => {
  return {
    type: ORDER_BY_DATE,
    payload: date,
  };
};

const setIsLogged = (isLogged) => {
  return {
    type: "IS_LOGGED",
    payload: isLogged,
  };
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
  setIsLogged
};
