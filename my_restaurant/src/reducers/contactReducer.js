import * as aType from '../actionTypes/actionTypes'

const initState = {
    message: ''

}

function contactReducer(state = initState, action) {
    switch (action.type) {
        case aType.CONTACT_ADDED:
            state = {
                ...state,
                message: action.msg
            }
            return state
        case 'ERROR_CONTACT':
            state = {
                ...state,
                message: action.err
            }
            return state
        default:
            return state
    }
}

export default contactReducer
