import { SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./types";
import { userService } from "../service";

export const signUp = userDetails => dispatch => {
  dispatch({ type: SIGNUP_REQUEST, payload: userDetails });

  userService
    .signup(userDetails)
    .then(data => dispatch({ type: "SIGNUP_INFO", payload: data }));
};

export const resetState = () => dispatch => {
  dispatch({ type: SIGNUP_SUCCESS, payload: "success" });
};
