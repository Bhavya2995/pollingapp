import {combineReducers} from 'redux';
import userReducer from './userReducer';
import authReducer from './authReducer';
import userlistReducer from './userlistReducer';
import pollslistReducer from './pollslistReducer';
import pollReducer from './pollReducer';
import pollupdateReducer from './pollupdateReducer';

export default combineReducers({
    auth : authReducer,
    userData: userReducer,
    userlist: userlistReducer,
    polls : pollslistReducer,
    poll : pollReducer,
    pollupdate : pollupdateReducer
});