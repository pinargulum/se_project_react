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
/*async addNewCard({ name, link }) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ name, link }),
    })
    .then(this._checkResponse);
  }
  async deleteCard({ cardId }) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    })
    .then(this._checkResponse);
  }
    */