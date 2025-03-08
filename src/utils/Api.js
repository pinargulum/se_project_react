const baseUrl = "http://localhost:3001";

export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}
function request(baseUrl, options) {
  return fetch(baseUrl, options).then(checkResponse)
}

function getClothingItems() {
  return fetch(`${baseUrl}/items`).then(checkResponse);
}


function addClothingItem(item, token) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/Json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(item),
  }).then(checkResponse);
}
function deleteItem(_id, token) {
  return fetch(`${baseUrl}/items/${_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/Json",
      authorization: `Bearer ${token}`,
    },
    //body: JSON.stringify({ _id })
  }).then(checkResponse);
}
function addCardLike(itemId, token) {
  return fetch(`${baseUrl}/items/${itemId}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/Json",
      authorization: `Bearer ${token}`,
    },
    //body: JSON.stringify({ _id, likes })
  }).then(checkResponse);
}

function removeCardLike(itemId, token) {
  return fetch(`${baseUrl}/items/${itemId}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/Json",
      authorization: `Bearer ${token}`,
    },
    //body: JSON.stringify({ _id, likes })
  }).then(checkResponse);
}
const Api = {
  getClothingItems,
  addClothingItem,
  deleteItem,
  addCardLike,
  removeCardLike
};
export default Api;
