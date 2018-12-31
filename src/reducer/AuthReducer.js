import { EMAIL_CHANGE, PASSWORD_CHANGE, USER_CHANGE, ISLOADING_CHANGE, LEMPAR_DRAWER } from '../actions/Types'
const initialState = {
    email: "",
    password: "",
    user: "",
    lemparDra: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_CHANGE:
            return {
                ...state, user: action.payload
            }
        case EMAIL_CHANGE:
            return {
                ...state, email: action.payload
            }
        case PASSWORD_CHANGE:
            return {
                ...state, password: action.payload
            }
        case ISLOADING_CHANGE:
            return {
                ...state, isloading: action.payload
            }
            case LEMPAR_DRAWER:
            return {
                state, lemparDra:
                action.payload
            }

        default:
            return state
    }
}
