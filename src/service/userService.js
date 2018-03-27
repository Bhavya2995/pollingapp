import { BASEURL } from "../config";
import decode from "jwt-decode";
import setAuthorizationToken from "./setAuthToken";

export const userService = {
  signup,
  login,
  logout,
  fetchusers,
  fetchpolls,
  fetchpoll,
  addpoll,
  updatepolltitle,
  addoptionpoll,
  deleteoptionpoll
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

function addpoll(title, optionString) {
  return fetch(
    `${BASEURL}add_poll?title=${title}&options=${optionString}`
  ).then(res => res.json());
}

function updatepolltitle(id, title) {
  return fetch(`${BASEURL}update_poll_title?id=${id}&title=${title}`).then(
    res => res.json()
  );
}

function addoptionpoll(id, option) {
  return fetch(`${BASEURL}add_new_option?id=${id}&option_text=${option}`).then(
    res => res.json()
  );
}

function deleteoptionpoll(id,option){
  return fetch(`${BASEURL}delete_poll_option?id=${id}&option_text=${option}`).then(
    res => res.json()
  );
}
