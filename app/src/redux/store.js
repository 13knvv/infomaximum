import { combineReducers, createStore} from 'redux'
import formReducer from './formReducer'
import navReducer from './navReducer'

const reducers = combineReducers({
    nav: navReducer,
    form: formReducer,
})

const store = createStore(reducers)


export default store