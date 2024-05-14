import { GET_ALL_ORDERS, GET_ALL_USERS, GET_ORDER_ID, GET_USER_DETAIL, FILTER_VALUES } from "../actions";


let initialState = {
    allUsers:[],
    userDetail:[],
    allOrders: [],
    orderDetail: [],

}

function rootReducer(state = initialState, action){
    switch (action.type) {

        
        case GET_DRIVERS:
            return {
                ...state,
                allDrivers: action.payload,
              };
        
            
        default:
            return {...state};
    }
}

export default rootReducer;

