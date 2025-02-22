const baseUrl = "http://localhost:3001";

export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
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
function deleteClothingItem(_id, token, owner) {
  return fetch(`${baseUrl}/items/${_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/Json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ _id, owner })
  }).then(checkResponse);
}
function addCardLike(_id, token, likes) {
  return fetch(`${baseUrl}/items/${_id}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/Json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ _id, likes })
  }).then(checkResponse);
}

function removeCardLike(_id, token, likes) {
  return fetch(`${baseUrl}/items/${_id}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/Json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ _id, likes })
  }).then(checkResponse);
}
const Api = {
  getClothingItems,
  addClothingItem,
  deleteClothingItem,
  addCardLike,
  removeCardLike
};
export default Api;
