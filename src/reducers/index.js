import {combineReducers} from 'redux';
import userReducer from './userReducer';
import authReducer from './authReducer';
import userlistReducer from './userlistReducer';
import pollslistReducer from './pollslistReducer';
import pollReducer from './pollReducer';

export default combineReducers({
    auth : authReducer,
    userData: userReducer,
    userlist: userlistReducer,
    polls : pollslistReducer,
    poll : pollReducer
});