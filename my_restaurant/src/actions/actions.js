import * as aType from '../actionTypes/actionTypes'
import DISHES from '../data/dishes'


// contact form submit action starts

export default function contactAction(contact) {
    return {
        type: aType.CONTACT_ADDED,
        contact
    }
}

// contact form submit action ends

const loadingDishes = (dishes)=>{
    return {
        type: aType.DISH_LOADING,
        dishes
    }
}

const dishesLoaded = dishes =>{
    return {
        type: aType.DISH_LOADED,
        dishes
    }
}

export  function fetchDishesAction() {
    return dispatch =>{
        dispatch(loadingDishes(DISHES))
        setTimeout(()=>{
            dispatch(dishesLoaded(DISHES))
        }, 2000)
    }
}