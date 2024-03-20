const baseUrl = "/api/persons";

function getPersons() {
  return fetch(baseUrl)
    .then((res) => res.json())
    .then((data) => data);
}

function createPerson(person) {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(person),
  })
    .then((res) => res.json())
    .then((data) => data);
}

function deletePerson(id) {
  return fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json)
    .then((data) => data);
}

export default {
  getPersons,
  createPerson,
  deletePerson,
};
