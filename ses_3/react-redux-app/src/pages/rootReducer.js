import {combineReducers} from 'redux'
import loginreducer from './login/reducer'
import chatReducer from './chat/reducer'

const rootReducer = combineReducers({
    loggedInUsers: loginreducer,
    chatMessages: chatReducer
})

export default rootReducer