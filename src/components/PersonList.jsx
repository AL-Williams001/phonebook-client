import { useEffect } from "react";
import personService from "../services/personService";
import userService from "../services/userService";
import { FaTrashAlt } from "react-icons/fa";

function PersonList({ user, persons, setPersons }) {
  useEffect(() => {
    userService
      .getUser(user.id)
      .then((response) => {
        setPersons(response);
      })
      .catch((error) => console.log(error));
  }, []);

  const deletePerson = (id) => {
    personService
      .deletePerson(id)
      .then((_response) => {
        setPersons(persons.filter((person) => person.id !== id));
      })
      .catch((error) => console.log(error));
  };

  return (
    <ul className="border-solid border-2 border-slate-500 p-4 text-black-500">
      {persons.map((person) => (
        <li key={person.id} className="flex items-center justify-between">
          • {person.name} ({person.number})
          <FaTrashAlt
            className="hover: cursor-pointer"
            onClick={() => deletePerson(person.id)}
          />
        </li>
      ))}
    </ul>
  );
}

export default PersonList;
