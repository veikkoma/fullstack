import React from 'react';

/* The usecase is render the list of the persons! */
const Persons = ({ persons }) => {
  return (
    <ul>
      {persons.map((person) => (
        <li key={`${person.name}-${person.number}`}>
          {person.name} {person.number}
        </li>
      ))}
    </ul>
  );
};

export default Persons;
