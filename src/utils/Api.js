const baseUrl = "http://localhost:3001";

function getItems ()  {
  return fetch("http://localhost:3001/items").then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`error: ${res.status}`);
    }
})
  }


export default getItems
