import { FETCH_USERS, FETCH_POLLS } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload.data;

      break;

    default:
      return state;
      break;
  }
}
