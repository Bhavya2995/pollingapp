import { BASEURL } from "../config";

export const userService = {
    signup
}

function signup(userDetails) {
  return fetch(
    `${BASEURL}add_user?username=${userDetails.username}&password=${
      userDetails.password
    }&role=${userDetails.role}`
  )
    .then(res => res.json());
  
}
