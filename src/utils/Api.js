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

function addClothingItem(item) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/Json" },
    body: JSON.stringify(item),
  }).then(checkResponse);
}
function deleteClothingItem(_id) {
  return fetch(`${baseUrl}/items/${_id}`, {
    method: "DELETE",
  }).then(checkResponse);
}
const Api = {
  getClothingItems,
  addClothingItem,
  deleteClothingItem,
};
export default Api;
