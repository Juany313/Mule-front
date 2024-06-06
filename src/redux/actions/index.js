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
export const UPDATE_USER_DETAIL = "UPDATE_USER_DETAIL";
/* Juanyyyy */
export const AGREGAR_PEDIDO = "AGREGAR_PEDIDO";
export const POST_USER = "AGREGAR_PEDIDO";
/* Admin Actions */
export const GET_ALL_ENLISTMENTS = "GET_ALL_ENLISTMENTS";
export const GET_ENLISTMENT_ID = "GET_ENLISTMENT_BY_ID";
export const POST_ENLISTMENT = "POST_ENLISTMENT";
export const PUT_ENLISTMENT = "PUT_ENLISTMENT";
export const DELETE_ENLISTMENT = "DELETE_ENLISTMENT";
export const SET_ORDER_DATA = "SET_ORDER_DATA";
export const DELETE_USER = "DELETE_USER";

/* Admin Drivers Actions */
export const SET_PAGE_DRIVERS = "SET_PAGE_DRIVERS";
export const INCREASE_PAGE_DRIVERS = "INCREASE_PAGE_DRIVERS";
export const DECREASE_PAGE_DRIVERS = "DECREASE_PAGE_DRIVERS";
export const GET_DRIVERS = "GET_DRIVERS";
export const POST_DRIVER = "POST_DRIVER";
export const PUT_DRIVER = "PUT_DRIVER";
export const DELETE_DRIVER = "DELETE_DRIVER";

export const POST_IS_LOGING = "POST_IS_LOGING";
export const POST_REVIEWS = "POST_REVIEWS";

const deleteUser = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/users/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      dispatch({
        type: DELETE_USER,
        payload: id,
      });
    } catch (error) {
      console.error(error.message);
    }
  };
};

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

//formulario de registro
export function postUser(data) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/users/register`,
        data
      );
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
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/users`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
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
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/measures`
      );
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
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/type_shipments`
      );
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
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/branches`
      );
      return dispatch({
        type: GET_ALL_BRANCHES,
        payload: data,
      });
    } catch (error) {
      // window.alert(error.message);
    }
  };
};

const createOrder = (userData, id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/order_shipments`,
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
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/users/${id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const data = await response.json();
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
const getOrdersByClient = (id) => {
  return async (dispatch) => {
    try {
      // const token = localStorage.getItem('token')
      // if (!token) {
      //   throw new Error('No token found');
      // };
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/order_shipments/${id}`
        // , {
        //   headers: {
        //     "Authorization": `Bearer ${token}`
        //   }
        // }
      );
      return dispatch({
        type: GET_ORDERS_BY_CLIENT,
        payload: response.data,
      });
    } catch (error) {
      // window.alert(error.message);
    }
  };
};

// Falla de seguridad?
const getAllOrders = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/order_shipments`
      );
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
        `${import.meta.env.VITE_BACKEND_URL}/order_shipments/${id}`
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
      const url = `${
        import.meta.env.VITE_BACKEND_URL
      }/order_shipments?${queryParams}`;

      // Realizar la solicitud GET con la URL construida
      const { data } = await axios.get(url);
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
    type: IS_LOGGED,
    payload: isLogged,
  };
};

export function isLoging(data) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/users/register-auth0`,
        data
      );
      console.log("data: ", data);
      dispatch({
        type: POST_IS_LOGING,
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

const setInfoUserLogged = (user) => {
  return {
    type: INFO_USER_LOGGED,
    payload: user,
  };
};

const updateUserDetail = (id, infoUser) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.patch(
        `${import.meta.env.VITE_BACKEND_URL}/users/profile/${id}`,
        infoUser,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return dispatch({
        type: UPDATE_USER_DETAIL,
        payload: data,
      });
    } catch (error) {}
  };
};

const setEnlistments = (enlistments) => {
  return {
    type: GET_ALL_ENLISTMENTS,
    payload: enlistments,
  };
};

const getAllEnlistments = () => {
  return async (dispatch) => {
    try {
      await axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/enlistments`)
        .then((response) => {
          dispatch({
            type: GET_ALL_ENLISTMENTS,
            payload: response.data,
          });
        });
    } catch (error) {
      console.error(error.message);
    }
  };
};

const getEnlistmentById = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/enlistments/${id}`
      );
      return dispatch({
        type: GET_ENLISTMENT_ID,
        payload: data,
      });
    } catch (error) {
      // window.alert("No existe una orden de pedido con ese número");
    }
  };
};

const postEnlistment = (enlistmentData) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/enlistments`,
        enlistmentData
      );
      dispatch({
        type: POST_ENLISTMENT,
        payload: data,
      });
      Swal.fire({
        title: "Enlistment created!",
        text: "The enlistment has been created successfully",
        icon: "success",
        confirmButtonText: "Accept",
      });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Error creating the enlistment",
        icon: "Error",
        confirmButtonText: "Accept",
      });
    }
  };
};

const putEnlistment = (id, enlistmentData) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/enlistments/${id}`,
        enlistmentData
      );
      dispatch({
        type: PUT_ENLISTMENT,
        payload: data,
      });
      Swal.fire({
        title: "Enlistment updated!",
        text: "The enlistment has been updated successfully",
        icon: "success",
        confirmButtonText: "Accept",
      });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Error updating the enlistment",
        icon: "Error",
        confirmButtonText: "Accept",
      });
    }
  };
};

const deleteEnlistment = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/${id}`);
      dispatch({
        type: DELETE_ENLISTMENT,
        payload: id,
      });
      Swal.fire({
        title: "Enlistment deleted!",
        text: "The enlistment has been deleted successfully",
        icon: "success",
        confirmButtonText: "Accept",
      });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Error deleting the enlistment",
        icon: "Error",
        confirmButtonText: "Accept",
      });
    }
  };
};

const setOrderData = (orderData) => {
  return {
    type: SET_ORDER_DATA,
    payload: orderData,
  };
};

const filterOrderShipmentsByUser = (userId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/order_shipments/${userId}`
      );
      return dispatch({
        type: GET_ORDERS_BY_CLIENT,
        payload: data,
      });
    } catch (error) {
      console.error(error.message);
    }
  };
};

/* Driver Paginate */
export const setPageDrivers = (page) => ({
  type: SET_PAGE_DRIVERS,
  payload: page,
});

export const increasePageDrivers = () => ({
  type: INCREASE_PAGE_DRIVERS,
});

export const decreasePageDrivers = () => ({
  type: DECREASE_PAGE_DRIVERS,
});

/* Drivers */

export const getDrivers = () => {
  return async function (dispatch) {
    const response = await axios(`${import.meta.env.VITE_BACKEND_URL}/drivers`);
    return dispatch({
      type: GET_DRIVERS,
      payload: response.data,
    });
  };
};

export function postDriver(driver) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/drivers`,
        driver
      );

      return dispatch({
        type: POST_DRIVER,
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export function putDriver(driver) {
  return async function (dispatch) {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/drivers/${driver.id}`,
        driver
      );

      return dispatch({
        type: PUT_DRIVER,
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export function deleteDriver(id) {
  return async function (dispatch) {
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/drivers/${id}`);

      return dispatch({
        type: DELETE_DRIVER,
        payload: id,
      });
    } catch (error) {
      console.error(error);
    }
  };
}

const postReviews = (userId, review) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/reviews`,
        {
          ...review,
          user_id: userId,
        }
      );
      dispatch({
        type: POST_REVIEWS,
        payload: data,
      });
    } catch (error) {
      console.log("no está llegando la data", error.message);
    }
  };
};

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
  updateUserDetail,
  getAllEnlistments,
  getEnlistmentById,
  postEnlistment,
  putEnlistment,
  deleteEnlistment,
  setOrderData,
  setEnlistments,
  deleteUser,
  postReviews,
};
