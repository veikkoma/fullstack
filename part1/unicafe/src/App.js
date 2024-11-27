import { useState } from 'react';
import Statistics from './Statistics'; // new file to statistics - make code clean and more readable!

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Unicafe - give feedback</h1>

      {/* feedback clicks*/}
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>

      {/* Statistics components! */}
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
