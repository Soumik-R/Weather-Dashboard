import axios from "axios";

const BASE_URL = "/api";

export const getCurrentWeather = (city) => {
  return axios.get(`${BASE_URL}/weather?city=${city}`);
};

export const getForecast = (city) => {
  return axios.get(`${BASE_URL}/forecast?city=${city}`);
};
