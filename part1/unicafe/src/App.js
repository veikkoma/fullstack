import { useState } from 'react';
import Statistics from './Statistics'; // new file to statistics - make code clean and more readable!
import Button from './Button'; // Button file! 

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Unicafe - give feedback</h1>

      {/* feedback clicks*/}
      <Button text="good" handleClick={() => setGood(good + 1)} />
      <Button text="neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" handleClick={() => setBad(bad + 1)} />

      {/* Statistics components! */}
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
