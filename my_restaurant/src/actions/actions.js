import * as aType from '../varTypes/actionTypes'
import axios from 'axios'
import { BASE_URL } from '../varTypes/base_url'

// contact form submit action starts

export default function contactAction(contact) {
    return dispatch =>{
        axios.post((BASE_URL+'contactUs'), contact)
        .then(resp => resp.status)
        .then(status => {
            return dispatch({type: aType.CONTACT_ADDED, msg: true})})
        .catch(err => dispatch({
            type: 'ERROR_CONTACT', err: false
        }))
    }
}

// contact form submit action ends

const dishesLoaded = dishes =>{
    return {
        type: aType.DISH_LOADED,
        dishes
    }
}

const dishesLoading = () =>{
    return {
        type: aType.DISH_LOADING,
        dishes: []
    }
}

export  function fetchDishesAction() {
    return dispatch =>{
        dispatch(dishesLoading())
        axios(BASE_URL+'DISHES')
        .then(res => res.data)
        .then(data => dispatch(dishesLoaded(data)))
    }
}