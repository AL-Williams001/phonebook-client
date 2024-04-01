import { useState } from "react";
import personService from "../services/personService";

function PersonForm({ persons, setPersons }) {
  const [newPerson, setNewPerson] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addPerson = (e) => {
    e.preventDefault();

    const personObject = {
      name: newPerson,
      number: newNumber,
    };

    personService
      .createPerson(personObject)
      .then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewPerson("");
        setNewNumber("");
      })
      .catch((error) => {
        console.error("Error adding person:", error);
        // Handle error display to the user
      });
  };

  return (
    <form
      onSubmit={addPerson}
      className="flex flex-col gap-4 p-4 border-solid border-2 border-slate-500 text-black-500"
    >
      <div className="flex flex-col">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          className="border-solid border-2 border-slate-500 p-2"
          type="text"
          value={newPerson}
          onChange={(e) => setNewPerson(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          id="phoneNumber"
          className="border-solid border-2 border-slate-500 p-2"
          type="text"
          value={newNumber}
          onChange={(e) => setNewNumber(e.target.value)}
        />
      </div>
      <button className="bg-green-500 py-2 text-white font-bold" type="submit">
        Add
      </button>
    </form>
  );
}

export default PersonForm;
