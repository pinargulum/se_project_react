export const getWeather = ({ latitude, longitude }, APIkey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
        return Promise.reject(`error: ${res.status}`)
    }
  });
};
export const filterWeatherData = (data) => {
    const result = {};
    result.city = data.name;
    result.temp = { F: data.main.temp };
    result.temp = getWeatherType(result.temp)
    return result;
}
const getWeatherType = (temperature) => {
    if (temperature > 86) {
        return 'hot';
      } else if (temperature > 66) {
        return 'warm';
      } else {
        return 'cold';
      }
}