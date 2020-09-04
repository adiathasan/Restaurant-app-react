import { DISH_LOADING, DISH_LOADED } from '../varTypes/actionTypes'
import DISHES from '../data/dishes'

const initState = {
    isLoading: false,
    dishes: []
}


function dishReducer(state = initState, action) {
    switch(action.type){
        case DISH_LOADING:
            return {
                ...state,
                isLoading: true,
            }
        case DISH_LOADED:
            return {
                ...state,
                isLoading: false,
                dishes: action.dishes
            }
        default:
            return state

    }
}

export default dishReducer
