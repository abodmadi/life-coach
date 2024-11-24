import axios from "axios";

//const isDevelopment = import.meta.env.MODE === 'development';
//baseURL: baseURL,//!isDevelopment && baseURL,
export const axiosClientAPI = axios.create({
  //timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});
