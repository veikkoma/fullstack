import React, { useEffect, useState } from 'react';
import Filter from './FilterData';
import Persons from './Persons';
import PersonData from './PersonData';
import { isDuplicate } from './utils'; // Import the utility function
import axios from 'axios';

const App = () => {
  // State to keep track of persons
  const [persons, setPersons] = useState([]); // Initialize with an empty array

  // States for new person's name, number, and filter
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then((response) => {
        console.log('Fetched persons from the server:', response.data);
        setPersons(response.data)
      })
      .catch((error) => {
        console.log('Error:', error);
      });
    }, []);;

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
        axios
          .put(`http://localhost:3001/persons/${existingPerson.id}`, updatedPerson)
          .then((response) => {
            console.log('Updated person:', response.data);
            setPersons(persons.map((person) =>
              person.id === existingPerson.id ? response.data : person
            ));
            setNewName('');
            setNewNumber('');
          })
          .catch((error) => {
            console.error('Error updating person:', error);
          });
      }
    } else {
      // If name not found, create a new person
      const newPerson = {
        name: newName,
        number: newNumber,
      };
  
      // Post the new person to the server
      axios
        .post('http://localhost:3001/persons', newPerson)
        .then((response) => {
          console.log('Added person:', response.data);
          setPersons(persons.concat(response.data)); 
          setNewName('');
          setNewNumber('');
        })
        .catch((error) => {
          console.error('Error adding person:', error);
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
      <Persons persons={filteredPersons} />
    </div>
  );
};

export default App;
