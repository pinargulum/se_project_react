const baseUrl = "http://localhost:3001";

const getItems = () => {
  return fetch(`${baseUrl}/items`).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`error: ${res.status}`);
    }
  });
};
const Api = {
  getItems,
};

export default Api;
