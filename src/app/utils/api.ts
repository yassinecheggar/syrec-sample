import axios from "axios";

const apiurl = import.meta.env.VITE_API_URL;

const apiConfig = {
  baseURL: apiurl,
  timeout: 50000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

const api = axios.create(apiConfig);

export default api;
