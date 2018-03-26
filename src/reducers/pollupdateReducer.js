import { UPDATE_POLLTITLE, ADD_OPTION, DELETE_OPTION } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case UPDATE_POLLTITLE:
      return action.payload;

      break;
    case ADD_OPTION:
      if (action.payload.error === 0) {
        return { added: true };
      } else {
        return { added: false };
      }
      break;
    case DELETE_OPTION:
      return action.payload;
    default:
      return state;
      break;
  }
}
