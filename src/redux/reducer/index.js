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
    UPDATE_USER_DETAIL,
    GET_ALL_ENLISTMENTS,
    GET_ENLISTMENT_ID,
    POST_ENLISTMENT,
    PUT_ENLISTMENT,
    DELETE_ENLISTMENT,

    
    SET_PAGE_DRIVERS,
    INCREASE_PAGE_DRIVERS,
    DECREASE_PAGE_DRIVERS,
    GET_DRIVERS,
    GET_DRIVERS_BY_NAME,
    SET_PAGE_CUSTOMERS,
    INCREASE_PAGE_CUSTOMERS,
    DECREASE_PAGE_CUSTOMERS,

  SET_ORDER_DATA,
    POST_IS_LOGING

} from "../actions";

let initialState = {
    allUsers: [],
    userDetail: {},
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
    allEnlistments: [],
    enlistmentDetail: [],
    orderData: [],
    currentPageDrivers: 1,
    itemsPerPageDrivers: 5,
    currentPageCustomers: 1,
    itemsPerPageCustomers: 5,
    allDrivers: []
}

function rootReducer(state = initialState, action) {

    switch (action.type) {
        case SET_PAGE_DRIVERS:
            return {
                ...state,
                currentPageDrivers: action.payload
            };
        case INCREASE_PAGE_DRIVERS:
            return {
                ...state,
                currentPageDrivers: state.currentPageDrivers + 1
            };
        case DECREASE_PAGE_DRIVERS:
            return {
                ...state,
                currentPageDrivers: state.currentPageDrivers - 1
            };

        case GET_DRIVERS:
            return {
                ...state,
                allDrivers: action.payload,
            };
            
            case GET_DRIVERS_BY_NAME:
                return {
                    ...state,
                    allDrivers: action.payload,
                  };
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

        case UPDATE_USER_DETAIL:
            return {
                ...state,
                userDetail: action.payload
            }

        case GET_ALL_ENLISTMENTS:
            return {
                ...state,
                allEnlistments: action.payload
            }

        case GET_ENLISTMENT_ID:
            return {
                ...state,
                enlistmentDetail: action.payload
            }
        
        case POST_ENLISTMENT:
            return {
                ...state,
                allEnlistments: state.allEnlistments.concat(action.payload)
            }

        case PUT_ENLISTMENT:
            return {
                ...state,
                allEnlistments: state.allEnlistments.map(enlistment => {
                    if (enlistment.id === action.payload.id) {
                        return action.payload;
                    }
                    return enlistment;
                })
            }
        
        
        case DELETE_ENLISTMENT:
            return {
                ...state,
                allEnlistments: state.allEnlistments.filter(enlistment => enlistment.id !== action.payload)
            }

        case SET_ORDER_DATA:
            return {
                ...state,
                orderData: action.payload
            }

            
        
      case POST_IS_LOGING:
        return {
          ...state,
          allUsers: action.payload
        }

        case SET_PAGE_CUSTOMERS:
            return {
                ...state,
                currentPageCustomers: action.payload
            };
        case INCREASE_PAGE_CUSTOMERS:
            return {
                ...state,
                currentPageCustomers: state.currentPageCustomers + 1
            };
        case DECREASE_PAGE_CUSTOMERS:
            return {
                ...state,
                currentPageCustomers: state.currentPageCustomers - 1
            };

    default:
      return state;
  }
}

export default rootReducer;
