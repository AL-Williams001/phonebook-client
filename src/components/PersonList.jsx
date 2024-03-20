import { useEffect } from "react";
import personService from "../services/personService";
import { FaTrashAlt, FaSpinner } from "react-icons/fa";

const PersonList = ({ persons, setPersons }) => {
  useEffect(() => {
    personService
      .getPersons()
      .then((response) => {
        setPersons(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deletePerson = (id) => {
    personService
      .deletePerson(id)
      .then((response) => {
        setPersons(persons.filter((person) => person.id !== id));
      })
      .catch((error) => console.log(error));
  };

  return (
    <ul className="bg-slate-700 text-white p-4">
      {persons.map((person) => (
        <li key={person.id} className="flex items-center justify-between">
          • {person.name} ({person.number}){"  "}
          <FaTrashAlt
            className="hover: cursor-pointer"
            onClick={() => deletePerson(person.id)}
          />{" "}
        </li>
      ))}
    </ul>
  );
};

export default PersonList;
