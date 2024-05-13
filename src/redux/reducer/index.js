import { GET_ALL_ORDERS, GET_ALL_USERS, GET_ORDER_ID, GET_USER_DETAIL, ORDER_DECLARED_VALUE } from "../actions";


let initialState = {
    allUsers:[],
    userDetail:[],
    allOrders: [],
    orderDetail: [],

}

function rootReducer(state = initialState, action){
    switch (action.type) {
        case GET_ALL_USERS:
            return {
                ...state,
                allUsers: action.payload,
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

        case  ORDER_DECLARED_VALUE:
            return {
                ...state,
                allorders:action.payload
            }
           
        default:
            return {...state};
    }
}

export default rootReducer;

