import axios from "axios";

const BASE_URL = "http://localhost:5000";

export const getCurrentWeather = (city) => {
  return axios.get(`${BASE_URL}/weather?city=${city}`);
};

export const getForecast = (city) => {
  return axios.get(`${BASE_URL}/forecast?city=${city}`);
};
