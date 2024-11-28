import React, { useState } from 'react';

const App = () => {
  // state keep track of the list (persons)
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' },
    { name: 'Grace Hopper' }
  ]);
  const [newName, setNewName] = useState('');

  // add new person!
  const addPerson = (event) => {
    event.preventDefault();

    const newPerson = {
      name: newName
    };

    setPersons(persons.concat(newPerson));
    console.log('Updated persons list:', persons.concat(newPerson));
    setNewName(''); 
  };

  // handle input field
  const handleNameChange = (event) => {
    console.log('Current input value:', event.target.value);
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
