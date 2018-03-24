import { FETCH_POLL, ADD_POLL } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POLL:
      return action.payload.data;

    case ADD_POLL:
      return action.payload;

    default:
      return state;
      break;
  }
}
