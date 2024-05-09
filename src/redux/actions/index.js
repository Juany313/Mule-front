import axios from "axios";

export const GET_DRIVERS = "GET_DRIVERS";

export function getDrivers(){
    return async function(dispatch){
        const response = await axios("https://jsonplaceholder.typicode.com/users")
        return dispatch({
            type: GET_DRIVERS,
            payload: response.data
        })
    }
}
