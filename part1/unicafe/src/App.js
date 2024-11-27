import { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // Laskelmat
  const total = good + neutral + bad; 
  const average = total === 0 ? 0 : (good - bad) / total; 
  const positivePercentage = total === 0 ? 0 : (good / total) * 100; 


  return (
    <div>
      <h1>UNICAFE - Give feedback</h1>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>

    {/* feedback statistics  - add total average and positive % ? */}
    <h2>feedback statistics</h2>
        {total === 0 ? (
          <p>No feedback</p>
        ) : (
          <div>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Average: {average.toFixed(1)}</p>
            <p>Positive (%): {positivePercentage.toFixed(1)}%</p>
          </div>
        )}
      </div>
    );
  };

export default App;