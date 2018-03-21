import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_INFO } from "../actions/types";

export default function(state = {registering: false}, action) {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return { registering: true };

      break;
    case SIGNUP_INFO:
      return action.payload;
      break;
    case SIGNUP_SUCCESS:
      return {};

    default:
      return state;
      break;
  }
}
