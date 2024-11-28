import React, { useState } from 'react';

const App = () => {
  // state keep track of the list (persons)
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: "040-30239849" },
    { name: 'Grace Hopper', number: "044-21233435" },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);

  // states to name and number
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');


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

  // handle filter changes
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filterPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );


  return (
    <div>
      <h2>Phonebook</h2>
      <div>
      Filter shown with:  
      <input value={filter} onChange={handleFilterChange} />
      </div>
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
      <h3>Numbers</h3>
      <ul>
        {filterPersons.map((person) => (
          <li key={person.name}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
