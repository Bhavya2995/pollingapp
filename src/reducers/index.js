import {combineReducers} from 'redux';
import userReducer from './userReducer';
import authReducer from './authReducer';
import userlistReducer from './userlistReducer';
import pollslistReducer from './pollslistReducer';

export default combineReducers({
    auth : authReducer,
    userData: userReducer,
    userlist: userlistReducer,
    polls : pollslistReducer
});