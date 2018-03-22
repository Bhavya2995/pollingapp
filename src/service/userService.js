import { BASEURL } from "../config";

export const userService = {
  signup,
  login,
  logout,
  fetchusers
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

      return user;
    });
}

function logout() {
  localStorage.removeItem("user");
}

function fetchusers() {
  return fetch(`${BASEURL}list_users`).then(res => res.json());
}
