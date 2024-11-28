/* here you can put some utils stuff - const etc. */

export const isDuplicate = (name, persons) => {
    return persons.some((person) => person.name.toLowerCase() === name.toLowerCase());
  };
  