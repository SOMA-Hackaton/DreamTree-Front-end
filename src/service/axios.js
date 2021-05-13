import axios from "axios";

const axiosResource = axios.create({
    baseURL:
    process.env.VUE_APP_NODE_ENV != "production"
      ? "https://dreamtree-dywzy.run.goorm.io/"
      : process.env.VUE_APP_AUTH_URL,
  withCredentials: true,
  headers: { 'Access-Control-Allow-Origin': '*' }
});

export default axiosResource;