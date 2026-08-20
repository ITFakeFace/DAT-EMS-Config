import axios from "axios";

export const callApi = (method, url, data = null) => {
  return axios({
    method,
    url,
    data,
    withCredentials: true,
  })
    .then((res) => res.data)
    .catch((error) => {
      console.error("API ERROR:", error.response?.data || error);
      throw error;
    });
};
