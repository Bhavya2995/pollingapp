import { BASEURL } from "../config";
import decode from "jwt-decode";
import setAuthorizationToken from './setAuthToken';


export const userService = {
  signup,
  login,
  logout,
  fetchusers,
  fetchpolls,
  fetchpoll
};

function signup(userDetails) {
  return fetch(
    `${BASEURL}add_user?username=${userDetails.username}&password=${
      userDetails.password
    }&role=${userDetails.role}`
  ).then(res => res.json());
}

function login(userDetails) {
  return fetch(
    `${BASEURL}login?username=${userDetails.username}&password=${
      userDetails.password
    }`
  )
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(user => {
      if (user && user.token) {
        localStorage.setItem("user", JSON.stringify(user));
      }
      setAuthorizationToken(user.token);
      return user;
    });
}

function logout() {
  localStorage.removeItem("user");
}

function fetchusers() {
  return fetch(`${BASEURL}list_users`).then(res => res.json());
}

function fetchpolls() {
  return fetch(`${BASEURL}list_polls`).then(res => res.json());
}

function fetchpoll(id) {
  return fetch(`${BASEURL}list_poll?id=${id}`).then(res => res.json());
}
