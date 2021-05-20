import axios from "axios";

const Error = {
  UNAUTHORIZED: 401
};

// export const createAPI = (onUnauthorized) => {
export const createAPI = () => {
  const api = axios.create({
    baseURL: `http://89.223.123.86:8080/api`,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    const {response} = err;

    if (response.status === Error.UNAUTHORIZED) {
      // onUnauthorized();

      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
