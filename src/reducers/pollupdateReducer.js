import {UPDATE_POLLTITLE} from "../actions/types";

export default function (state = {},action){
    switch (action.type) {
        case UPDATE_POLLTITLE:
        return action.payload;
            
            break;
    
        default:
        return state;
            break;
    }
}