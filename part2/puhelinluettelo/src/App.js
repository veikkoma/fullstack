import React, { useState } from 'react';

const App = () => {
  // state keep track of the list (persons)
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: "040-30239849" },
    { name: 'Grace Hopper', number: "044-21233435" }
  ]);

  // states to name and number
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');


  // add new person!
  const addPerson = (event) => {
    event.preventDefault();

  // Check for duplicates -  also notice upper and lower case letters
  if (persons.some((person) => person.name.toLowerCase() === newName.toLowerCase())) {
    alert(`${newName} is already added to the phonebook!`);
    return;
  }

    const newPerson = {
      name: newName,
      number: newNumber,
    };

    setPersons(persons.concat(newPerson));
    console.log('Updated persons list:', persons.concat(newPerson));
    setNewName(''); 
    setNewNumber('');
  };

  // handle input field
  const handleNameChange = (event) => {
    console.log('Current input value:', event.target.value);
    setNewName(event.target.value);
  };

  // handle input number
  const handleNumberChange = (event) => {
    console.log('Current number value: ', event.target.value)
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={`${person.name}-${person.number}`}>
          {person.name} {person.number}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default App;
