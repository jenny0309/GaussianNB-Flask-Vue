import axios from "axios";

// get data from backend
const getAPI = axios.create({
  baseURL: "http://127.0.0.1:5000",
  timeout: 1000,
});

export { getAPI };
