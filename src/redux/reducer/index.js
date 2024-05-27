import {
    GET_ALL_ORDERS,
    GET_ALL_USERS,
    GET_ORDER_ID,
    GET_USER_DETAIL,
    FILTER_VALUES,
    AGREGAR_PEDIDO,
    GET_ALL_MEASURES,
    GET_TYPES_SHIPMENTS,
    GET_ALL_BRANCHES,
    GET_ORDERS_BY_CLIENT,
    ORDER_BY_DATE,
    FILTER_BY_CITY,
    IS_LOGGED,
    INFO_USER_LOGGED,
    SET_ORDER_TYPE,
} from "../actions";

let initialState = {
    allUsers: [],
    userDetail: [],
    allOrders: [],
    allOrdersCopy: [],
    filteredOrders: [],
    orderDetail: [],
    filtrados: [],
    allMeasures: [],
    allTypesShipments: [],
    allBranches: [],
    isLogged: false,
    infoUserLogged: {},
    orderType: "",
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

        case GET_ORDERS_BY_CLIENT:
            return {
                ...state,
                allOrders: action.payload,
                filteredOrders: action.payload
            }

        case GET_ALL_ORDERS:
            return {
                ...state,
                allOrders: action.payload,
                allOrdersCopy: action.payload
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

        case GET_ALL_MEASURES:
            return {
                ...state,
                allMeasures: action.payload
            }

        case GET_TYPES_SHIPMENTS:
            return {
                ...state,
                allTypesShipments: action.payload
            }

        case GET_ALL_BRANCHES:
            return {
                ...state,
                allBranches: action.payload
            }

        case FILTER_BY_CITY:
            const { originCity, destinationCity } = action.payload;
            const filteredOrders = state.allOrders.filter(order => {
                return order.origin === originCity && order.destination === destinationCity;
            });

            return {
                ...state,
                filteredOrders: filteredOrders
            };

        case ORDER_BY_DATE:
            const sortedOrders = [...state.filteredOrders].sort((a, b) => {
                if (action.payload === 'asc') {
                    return new Date(a.created_at) - new Date(b.created_at);
                } else {
                    return new Date(b.created_at) - new Date(a.created_at);
                }
            });
            return {
                ...state,
                filteredOrders: sortedOrders,
            };

        case IS_LOGGED:
            return {
                ...state,
                isLogged: action.payload,
            };

        case INFO_USER_LOGGED:
            return {
                ...state,
                infoUserLogged: action.payload,
            };

        case SET_ORDER_TYPE:
            return {
                ...state,
                orderType: action.payload,
            };


        default:
            return state;
    }
}


export default rootReducer;