const baseUrl = "http://localhost:3001";

function getClothingItems() {
  return fetch(`${baseUrl}/items`).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`error: ${res.status}`);
    }
  });
}

function addClothingItem(item) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/Json" },
    body: JSON.stringify(item),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`error: ${res.status}`);
    }
  });
}
function deleteClothingItem () {
  return fetch ("http://localhost:3001/items/:id", {
    method: "DELETE",   
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`error: ${res.status}`);
    }
  });
}
  


const Api = {
  getClothingItems,
  addClothingItem,
  deleteClothingItem
};
export default Api;
