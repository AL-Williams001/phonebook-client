import axios from "axios";

const baseURL = "http://localhost:8080/api/login";

function login(credentials) {
  return axios.post(baseURL, credentials).then((res) => res.data);
}

export default { login };
