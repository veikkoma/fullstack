import React, { useState } from 'react';
import Filter from './FilterData';
import Persons from './Persons';
import PersonData from './PersonData';
import { isDuplicate } from './utils'; // Import the utility function

const App = () => {
  // State to keep track of persons
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-30239849' },
    { name: 'Grace Hopper', number: '044-21233435' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
  ]);

  // States for new person's name, number, and filter
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  // Add new person
  const addPerson = (event) => {
    event.preventDefault();

    // Use the utility function to check for duplicates
    if (isDuplicate(newName, persons)) {
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

  // Handle name change
  const handleNameChange = (event) => setNewName(event.target.value);

  // Handle number change
  const handleNumberChange = (event) => setNewNumber(event.target.value);

  // Handle filter change
  const handleFilterChange = (event) => setFilter(event.target.value);

  // Filtered persons based on the filter input
  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />

      <h3>Add a new</h3>
      <PersonData
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
      />

      <h3>Numbers</h3>
      <Persons persons={filteredPersons} />
    </div>
  );
};

export default App;
