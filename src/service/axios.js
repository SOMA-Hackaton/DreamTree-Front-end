import axios from "axios";

const axiosResource = axios.create({
  baseURL:
    process.env.VUE_APP_NODE_ENV != "production"
      ? "http://localhost:8080/api"
      : process.env.VUE_APP_AUTH_URL,
  withCredentials: true,
});

export default axiosResource;
