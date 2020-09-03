import { DISH_LOADING, DISH_LOADED } from '../actionTypes/actionTypes'
import DISHES from '../data/dishes'

const initState = {
    isLoading: false,
    dishes: DISHES
}


function dishReducer(state = initState, action) {
    switch(action.type){
        case DISH_LOADING:
            return {
                ...state,
                isLoading: false,
            }
        case DISH_LOADED:
            return {
                ...state,
                isLoading: true,
                dishes: [
                    ...state.dishes,
                    action.dishes
                ]
            }
        default:
            return state

    }
}

export default dishReducer
