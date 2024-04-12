import { LOGIN,LOGOUT } from "./actionType";


const loginreducer = (state = [],action)=> {
    switch (action.type){
        case LOGIN:
            return [
                ...state,
                action.payload.username
            ]
        
        case LOGOUT:
            return state.filter((user)=> user !== action.payload.usename)
        
        default:
            return state
    }
}

export default loginreducer