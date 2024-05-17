import { GET_ALL_ORDERS, GET_ALL_USERS, GET_ORDER_ID, GET_USER_DETAIL, FILTER_VALUES, AGREGAR_PEDIDO } from "../actions";

let initialState = {
    allUsers:[],
    userDetail:[],
    allOrders: [],
    allOrdersCopy: [],
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
                allOrdersCopy: action.payload
            }; 

        // case FILTER_VALUES:
        //     return {
        //         ...state,
        //         filters: action.payload,
        // }

            // case FILTER_CITY_TRANSMITER:
            //     const cityTransmiterFilter =
            //         action.payload === "all"
            //         ? state.allOrdersCopy
            //         : state.allOrdersCopy.filter((e) => {
            //             return e.city_transmiter?.includes(action.payload);
            //             });
            //     return {
            //         ...state,
            //         allOrders: action.payload === "all" ? state.allOrdersCopy : cityTransmiterFilter,
            //     };

            //     case FILTER_CITY_RECEIVER:
            //         const cityFilterReceiver =
            //             action.payload === "all"
            //             ? state.allOrdersCopy
            //             : state.allOrdersCopy.filter((e) => {
            //                 return e.city_receiver?.includes(action.payload);
                            
            //                 });
            //         return {
            //             ...state,
            //             allOrders: action.payload === "all" ? state.allOrdersCopy : cityFilterReceiver,
            //         };


//             case FILTER_CITY_TRANSMITER:
//   let filteredByTransmitter = [];

//   if (action.payload === "all") {
//     filteredByTransmitter = state.allOrdersCopy;
//   } else {
//     filteredByTransmitter = state.allOrdersCopy.filter(order =>
//       order.city_transmiter?.includes(action.payload)
//     );
//   }

//   return {
//     ...state,
//     allOrders: filteredByTransmitter,
//   };

//   case FILTER_CITY_RECEIVER:
//   let filteredByReceiver = [];

//   if (action.payload === "all") {
//     filteredByReceiver = state.allOrdersCopy;
//   } else {
//     filteredByReceiver = state.allOrdersCopy.filter(order =>
//       order.city_receiver?.includes(action.payload)
//     );
//   }

//   return {
//     ...state,
//     allOrders: filteredByReceiver,
//   };

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