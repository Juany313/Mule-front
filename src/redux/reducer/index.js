import { GET_ALL_ORDERS, GET_ALL_USERS, GET_ORDER_ID, GET_USER_DETAIL, FILTER_VALUES, AGREGAR_PEDIDO } from "../actions";

let initialState = {
    allUsers:[],
    userDetail:[],
    allOrders: [],
    orderDetail: [],
    filtrados: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_USERS:
            return {
                ...state,
                allUsers: action.payload,
            };

        case AGREGAR_PEDIDO:
            

            return {
                ...state,
                filtrados: state.allOrders.reduce((acc, objeto) => {
                    // Verificar si todos los campos y valores del pedido coinciden con el objeto actual
                    if (Object.keys(action.payload).every(key => objeto[key] === action.payload[key])) {
                        acc.push(objeto);
                    }
                    return acc;
                }, [])
            };

        case GET_USER_DETAIL:
            return {
                ...state,
                userDetail: action.payload,
            };

        case GET_ALL_ORDERS:
            return {
                ...state,
                allOrders: action.payload,
            }; 

        case GET_ORDER_ID:
            return {
                ...state,
                orderDetail: action.payload
            }; 

        case FILTER_VALUES:
            return {
                ...state,
                allOrders: action.payload
            }
           
        default:
            return state;
    }
}

export default rootReducer;