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
function deleteClothingItem(_id) {
  return fetch(`${baseUrl}/items/${_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/Json",
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}
function addCardLike(id, token) {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/Json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ id, isLikes }),
  }).then(checkResponse);
}
const Api = {
  getClothingItems,
  addClothingItem,
  deleteClothingItem,
  addCardLike
};
export default Api;
