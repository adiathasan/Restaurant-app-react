import {combineReducers} from 'redux'
import dishReducer from './dishReducer'
import contactReducer from './contactReducer'

const rootReducer = combineReducers({
    dishes: dishReducer,
    contacts: contactReducer
})

export default rootReducer
