import { FETCH_POLL } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POLL:
      return action.payload.data;

    default:
      return state;
      break;
  }
}
