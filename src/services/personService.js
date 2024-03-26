import axios from "axios";

const baseUrl = "http://localhost:8080/api/persons";

let token = null;

function setToken(newToken) {
  token = `Bearer ${newToken}`;
}

function getPersons() {
  // return fetch(baseUrl)
  //   .then((res) => res.json())
  //   .then((data) => data);
  return axios.get(baseUrl).then((res) => res.data);
}

function createPerson(person) {
  // return fetch(baseUrl, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(person),
  // })
  //   .then((res) => res.json())
  //   .then((data) => data);
  const config = {
    headers: { Authorization: token },
  };
  return axios.post(baseUrl, person, config).then((res) => res.data);
}

function deletePerson(id) {
  // return fetch(`${baseUrl}/${id}`, {
  //   method: "DELETE",
  // })
  //   .then((res) => res.json)
  //   .then((data) => data);
  return axios.delete(`${baseUrl}/${id}`).then((res) => res.status);
}

export default {
  getPersons,
  createPerson,
  deletePerson,
  setToken,
};
