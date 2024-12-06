/* here you can put some utils stuff - const etc. */

export const isDuplicate = (name, number, persons) => {
  return persons.some(
    (person) =>
      person.name.toLowerCase() === name.toLowerCase() &&
      person.number === number
  );
};