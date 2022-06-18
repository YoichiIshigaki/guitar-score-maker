import axios from "axios";
import { Config } from "../config"

const API_TOKEN = "token"

const axiosInstance = axios.create({
  baseURL: Config.apiUrl,
  headers: {
    'Content-Type': 'application/json',
    // 'Authorization':`JWT ${API_TOKEN}`
  },
  timeout: 3000,
});

axiosInstance.interceptors.request.use(
  config => {
    console.log("intercepters config request ",config);
    return config;

  },error => {
    console.log(error)
    // catch ができる。
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  response => {
    console.log("intercepters config response ",response);
    return response;

  },error => {
    console.log(error)
    // catch ができる。
    return Promise.reject(error)
  }
)

export default axiosInstance;