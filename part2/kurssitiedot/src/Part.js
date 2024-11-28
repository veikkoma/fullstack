import React from 'react';

const Part = ({ name, exercises }) => {
  console.log('Part component received:', { name, exercises });

  return (
    <p>
      {name} {exercises}
    </p>
  );
};

export default Part;
