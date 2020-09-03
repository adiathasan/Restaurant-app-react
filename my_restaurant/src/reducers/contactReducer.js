import * as aType from '../actionTypes/actionTypes'

const initState = {
    contacts: [
        { name: 'adiat', email: 'a@gmail.com', message: 'shiromoni', phone: '01729143339' }
    ]

}

function contactReducer(state = initState, action) {
    switch (action.type) {
        case aType.CONTACT_ADDED:
            state = {
                ...state,
                contacts: [
                    ...state.contacts,
                    action.contact

                ]
            }
            return state
        default:
            return state
    }
}

export default contactReducer
