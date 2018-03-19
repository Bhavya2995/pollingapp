import {SIGNUP_USER} from './types';

export const signUp = (userDetails) => async dispatch => {
  const res = await fetch(
    `https://secure-refuge-14993.herokuapp.com/add_user?username=${userDetails.username}&password=${userDetails.password}&role=${userDetails.role}`
  );
  const data = await res.json();
  dispatch({ type: SIGNUP_USER, payload: data });
};
