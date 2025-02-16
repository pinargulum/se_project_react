import { checkResponse } from "./Api";

const baseUrl = "http://localhost:3001";

export const getCurrentUser = (token) => {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,  
    },
    
  }).then(checkResponse);
};



export const updateProfile = ({ token, name, avatar }) => {
  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ token, name, avatar }),
  }).then(checkResponse);
};

export function registerUser(email, password, name, avatar) {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name, avatar }),
  }).then(checkResponse);
}

export function loginUser(email, password) {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/Json",
      
     },
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
}
