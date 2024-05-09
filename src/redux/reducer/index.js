import { GET_DRIVERS } from "../actions";


let initialState = {allDrivers:[]}

function rootReducer(state=initialState,action){
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

