import { combineReducers } from 'redux'
import authReducer from './AuthReducer'
import homeReducer from './HomeReducer'
import drawerReducer from './DrawerReducer'

export default combineReducers({
    authReducer,
    homeReducer,
    drawerReducer
})