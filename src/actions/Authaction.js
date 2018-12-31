import { EMAIL_CHANGE, PASSWORD_CHANGE, USER_CHANGE, LEMPAR_DRAWER } from './Types'

export const email_Change = (text) => {
    return {
        type: EMAIL_CHANGE,
        payload: text
    }
}
//export= ections creator
//re
export const password_Change = (text) => {
    return {
        type: PASSWORD_CHANGE,
        payload: text
    }
}
export const user_Change = (text) => {
    return {
        type: USER_CHANGE,
        payload: text
    }
}

export const lempar_Drawer = (text) => {
    return {
        type: LEMPAR_DRAWER,
        payload: text
    }
}