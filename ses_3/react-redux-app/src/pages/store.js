import {createStore} from 'redux'
import rootReducer from './rootReducer'

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOL_EXTENSION__ && window.__REDUX_DEVTOOL_EXTENSION__()
)

export default store