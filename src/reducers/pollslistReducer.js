import { FETCH_POLLS, FETCH_POLL } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_POLLS:
      return action.payload.data;

      break;
      case FETCH_POLL:
      return action.payload.data;

    default:
      return state;
      break;
  }
}
