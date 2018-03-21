import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "../actions/types";

let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { loggedIn: true, user } : {};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { loggingIn: true, user: action.payload };
      break;
    case LOGIN_SUCCESS:
    if(action.payload.error === 1){
      return {
        loggedIn: false,
        user: action.payload
      };
    }else{
      return {
        loggedIn: true,
        user: action.payload
      };
    }
      break;

    case LOGOUT:
      return {};
      break;

    default:
      return state;
      break;
  }
}
