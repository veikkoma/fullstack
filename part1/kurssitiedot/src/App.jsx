import './App.css'
import React from 'react';

const Header = ({ course }) => {
  console.log('Header props:', { course });
  return <h1>{course}</h1>;
};

const Part = ({ name, exercises }) => {
  console.log('Part props:', { name, exercises });
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  console.log('Content props:', { parts });
  return (
    <div>
      <Part name={parts[0].name} exercises={parts[0].exercises} />
      <Part name={parts[1].name} exercises={parts[1].exercises} />
      <Part name={parts[2].name} exercises={parts[2].exercises} />
    </div>
  );
};

const Total = ({ parts }) => {
  console.log('Total props:', { parts });
  const total = parts[0].exercises + parts[1].exercises + parts[2].exercises;
  console.log('Total exercises:', total);
  return <p>Number of exercises {total}</p>;
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;