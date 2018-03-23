import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../actions/types";
import decode from "jwt-decode";

let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { loggedIn: true, user: decode(user.token) } : {};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { loggingIn: true, user: action.payload };
      break;
    case LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: decode(action.payload.token)
      };
      break;
    case LOGIN_FAILURE:
      return {
        loggedIn: false,
        user: action.payload
      };

      break;

    case LOGOUT:
      return {};
      break;

    default:
      return state;
      break;
  }
}
