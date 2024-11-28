import React from 'react';
import Part from './Part';

const Content = ({ parts }) => {
  console.log('CONTENT component parts:', parts);

  return (
    <div>
      {parts.map((part) => {
        console.log('rendering part : ', part);
        return <Part key={part.id} name={part.name} exercises={part.exercises} />;
      })}
    </div>
  );
};

export default Content;
