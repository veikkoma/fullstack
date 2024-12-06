import React, { useEffect, useState } from 'react';
import Filter from './FilterData';
import Persons from './Persons';
import PersonData from './PersonData';
import { isDuplicate } from './utils'; // Import the utility function
import axios from 'axios';
import personsbook from './services/personsbook';

const App = () => {
  // State to keep track of persons
  const [persons, setPersons] = useState([]); // Initialize with an empty array

  // States for new person's name, number, and filter
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    personsbook
      .getAll()
      .then((initialPersons) => {
        console.log('Fetched persons to the server:', initialPersons);
        setPersons(initialPersons);
      })
      .catch((error) => {
        console.error('Error', error);
      });
  }, []);

  // Add new person
  const addPerson = (event) => {
    event.preventDefault();
    console.log('Trying to add person:', newName, newNumber);
  
    // Check if name already exists
    const existingPerson = persons.find((person) => person.name === newName);
  
    if (existingPerson) {
      const updatedPerson = { ...existingPerson, number: newNumber };
      
      // Show a confirmation dialog! when name already exists - doesn't react to upper/lower case differences
      if (window.confirm(`${newName} is already added to the phonebook, replace the old number with the new one?`)) {
        personsbook
          .update(existingPerson.id, updatedPerson)
          .then((returnedPerson) => {
            console.log('Updated person:', returnedPerson);
            setPersons(persons.map((person) =>
              person.id === existingPerson.id ? returnedPerson : person
            ));
            setNewName('');
            setNewNumber('');
          })
          .catch((error) => {
            console.error('Error updating person:', error);
          });
      }
    } else {
      const newPerson = { name: newName, number: newNumber };
  
      personsbook
        .create(newPerson)
        .then((returnedPerson) => {
          console.log('Added person:', returnedPerson);
          setPersons(persons.concat(returnedPerson));
          setNewName('');
          setNewNumber('');
        })
        .catch((error) => {
          console.error('Error adding person:', error);
        });
    }
  };
  
  // Delete person
  const deletePerson = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      personsbook
        .remove(id)
        .then(() => {
          console.log(`Deleted person with id: ${id}`);
          setPersons(persons.filter((person) => person.id !== id)); // update the state to remove the deleted person
        })
        .catch((error) => {
          console.error(`Error deleting person:`, error);
        });
    }
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
      <Persons persons={filteredPersons} deletePerson={deletePerson} />
      </div>
  );
};

export default App;
