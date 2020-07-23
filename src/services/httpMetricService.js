import axios from "axios";
import logger from "./logService";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status <= 504;

  if (!expectedError) {
    logger.log(error);
  }

  return Promise.reject(error);
});

export default {
  post: axios.post,
};
