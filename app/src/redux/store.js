import { combineReducers, createStore} from 'redux'
import authReducer from './authReducer'
import navReducer from './navReducer'

const reducers = combineReducers({
    nav: navReducer,
    auth: authReducer,
})

const store = createStore(reducers)


export default store