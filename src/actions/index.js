import { SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./types";
import {BASEURL} from '../config'
export const signUp = userDetails => async dispatch => {
  dispatch({ type: SIGNUP_REQUEST, payload: userDetails });

  const res = await fetch(
    `${BASEURL}add_user?username=${
      userDetails.username
    }&password=${userDetails.password}&role=${userDetails.role}`
  );

  const data = await res.json();
  dispatch({ type: "SIGNUP_INFO", payload: data });
};

export const resetState = () => dispatch =>{
  dispatch({ type: SIGNUP_SUCCESS, payload: 'success' });

}