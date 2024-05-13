import axios from "axios";

export const GET_USER_DETAIL = "GET_USER_DETAIL";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_ORDER_ID = "GET_ORDER_ID";
export const GET_ALL_ORDERS = "GET_ALL_ORDERS";

export const CREATE_ORDER = "CREATE_ORDER";

const URL_BASE = "http://localhost:3000"

export function createOrder(userData) {
    return async function(dispatch) {
        try {
        const response = await axios.post(`${URL_BASE}/order_shipments`);

        return dispatch({
            type: CREATE_ORDER,
            payload: response.data,
        });
        } catch (error) {
        console.error(error);
        }
    };
}

const getAllUsers = ()=>{
    return async (dispatch)=>{
        try {
        const {data} = await axios.get(`${URL_BASE}/users`)
        // console.log(data)
        return dispatch({
            type: GET_ALL_USERS,
            payload: data
        })
        } catch (error) {
         window.alert (error.message)
        }      
    }
}

const getUserDetail = (id)=>{
    return async (dispatch)=>{
        try {
        const {data} = await axios.get(`http://localhost:3000/users/${id}`)       
    //    const data=users.find(usuario => usuario.id === 4)
        console.log (data)
        return dispatch({
            type: GET_USER_DETAIL,
            payload: data
        })
        } catch (error) {
         window.alert (error.message)
        }      
    }
}


const getAllOrders = () =>{
    return async (dispatch) => {    
        try {
            const {data} = await axios.get("http://localhost:3000/order_shipments");
            console.log(data)
            return dispatch ({ 
                type: GET_ALL_ORDERS, 
                payload: data
            })
        } catch (error) {
            window.alert (error.message)   
        }
    }
 } 

const getOrderById = (id)=>{
    return async (dispatch)=>{
        try {
            const {data} = await axios.get(`http://localhost:3000/order_shipments/${id}`)
            // const data=orders.find(order => order.id === id)
            return dispatch ({
                type: GET_ORDER_ID,
                payload: data
                })
        } catch (error) {
            window.alert ('No existe una orden de pedido con ese número')           
        }
    }
}

export {
    getUserDetail,
    getAllUsers, 
    getOrderById,
    getAllOrders}

    // const getUserDetail = (id) => {
//     return async (dispatch) => {
//       try {
//         const { data } = await axios.get('../../data/data.json');
//         console.log(data)
//         const user = data.users.find(user => user.id === id);
  
//         if (!user) {
//           throw new Error('User not found');
//         }
  
//         return dispatch({
//           type: GET_USER_DETAIL,
//           payload: user
//         });
//       } catch (error) {
//         window.alert(error.message);
//       }
//     };
//   };
