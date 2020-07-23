import axios from "axios";
// import { toast } from "react-toastify";
import logger from "./logService";

axios.defaults.baseURL = process.env.REACT_APP_REBRANDING_API_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["apikey"] =
  process.env.REACT_APP_REBRANDING_API_KEY;

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status <= 504;

  if (!expectedError) {
    // toast.error("Unexpected error encountered"); //bypass shortening
    logger.log(error);
  }

  return Promise.reject(error);
});

export default {
  post: axios.post,
};
