import { combineReducers, createStore} from 'redux'
import navReducer from './navReducer'

const reducers = combineReducers({
    nav: navReducer,
})

const store = createStore(reducers)


export default store