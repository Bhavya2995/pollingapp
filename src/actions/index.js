import { SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./types";
import {ADDUSER_BASEURL} from '../config'
export const signUp = userDetails => async dispatch => {
  dispatch({ type: SIGNUP_REQUEST, payload: userDetails });

  const res = await fetch(
    `${ADDUSER_BASEURL}?username=${
      userDetails.username
    }&password=${userDetails.password}&role=${userDetails.role}`
  );

  const data = await res.json();
  dispatch({ type: "SIGNUP_INFO", payload: data });
};

export const resetState = () => dispatch =>{
  dispatch({ type: SIGNUP_SUCCESS, payload: 'success' });

}