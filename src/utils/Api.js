const baseUrl = "http://localhost:3001";

function getClothingItems ()  {
  return fetch(`${baseUrl}/items`)
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`error: ${res.status}`);
    }
  });
};

function postClothingItem(item) {
  return (
    fetch(`${baseUrl}/items`),
    {
      method: "POST",
      headers: { "Content-Type": "application/Json" },
      body: JSON.stringify(item),
    }.then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`error: ${res.status}`);
      }
    })
  );
};
const Api = {
  getClothingItems,
  postClothingItem,
};
export default Api;
