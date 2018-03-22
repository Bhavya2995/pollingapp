import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_INFO } from "./types";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./types";
import { FETCH_USERS, FETCH_POLLS, FETCH_POLL } from "./types";
import { userService } from "../service";
import history from "../history";

export const signUp = userDetails => dispatch => {
  dispatch({ type: SIGNUP_REQUEST, payload: userDetails });

  userService
    .signup(userDetails)
    .then(data => dispatch({ type: SIGNUP_INFO, payload: data }));
};

export const resetState = () => dispatch => {
  dispatch({ type: SIGNUP_SUCCESS, payload: "success" });
};

export const login = userDetails => dispatch => {
  dispatch({ type: LOGIN_REQUEST, payload: userDetails });

  userService.login(userDetails).then(user => {
    dispatch({ type: LOGIN_SUCCESS, payload: user });
    history.push("/main");
  });
};

export const logout = () => {
  userService.logout();
  return { type: LOGOUT };
};

export const fetchUsers = () => dispatch => {
  userService.fetchusers().then(data => {
    dispatch({ type: FETCH_USERS, payload: data });
  });
};

export const fetchPolls = () => dispatch => {
  userService
    .fetchpolls()
    .then(data => dispatch({ type: FETCH_POLLS, payload: data }));
};

export const fetchPoll = id => dispatch => {
  userService
    .fetchpoll(id)
    .then(data => dispatch({ type: FETCH_POLL, payload: data }));
};
