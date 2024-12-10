
function Api () {
    const baseUrl = "http://localhost:3001";
    const getItems = () => {
        return fetch(`${baseUrl}/items`).then((res) => {
            return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
          });
    }
  
}

export default Api