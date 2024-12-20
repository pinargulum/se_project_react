import { checkResponse } from "./Api.js";
export const coordinates = {
  latitude: 40.766891,
  longitude: -73.921387,
};
export const APIkey = "5d5495ef10baef6e2867bbcd431a6dbf";

export const getWeather = ({ latitude, longitude }, APIkey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then(checkResponse);
};
export const getCurrentWeather = (data) => {
  const result = {};
  result.city = data.name;
  result.temp = {
    F: Math.round(data.main.temp),
    C: Math.round(((data.main.temp - 32) * 5) / 9),
  };
  result.type = getWeatherType(result.temp.F);
  result.isDay = isDay(data.sys, Date.now());
  return result;
};

export const getWeatherType = (temperature) => {
  if (temperature > 75) {
    return "hot";
  } else if (temperature > 65) {
    return "warm";
  } else {
    return "cold";
  }
};
export const defaultWeatherOptions = {
  day: { url: new URL("../assets/day/default.png", import.meta.url).href },
  night: { url: new URL("../assets/night/default.png", import.meta.url).href },
};

export const filterWeatherData = (data) => {
  const result = {};
  result.city = data.name;
  result.temp = { F: data.main.temp };
  result.type = getWeatherType(result.temp.F);
  result.isDay = isDay(data.sys, Date.now());
  return result;
};
const isDay = ({ sunrise, sunset }, now) => {
  return sunrise * 1000 < now && now < sunset * 1000;
};
