
const jwt = "jwt";


export const setToken = (token) =>
  localStorage.setItem(jwt, token);

// getToken retrieves and returns the value associated with 
// TOKEN_KEY from localStorage.
export const getToken = () => {
  return localStorage.getItem(jwt);
};
export const removeToken = () => {
    localStorage.removeItem(jwt);
  };