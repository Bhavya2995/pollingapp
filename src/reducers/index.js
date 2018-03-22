import {combineReducers} from 'redux';
import userReducer from './userReducer';
import authReducer from './authReducer';
import userlistReducer from './userlistReducer';

export default combineReducers({
    auth : authReducer,
    userData: userReducer,
    userlist: userlistReducer
});