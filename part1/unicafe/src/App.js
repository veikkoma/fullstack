import { useState } from 'react';
import Statistics from './Statistics'; // new file to statistics - make code clean and more readable!
import Button from './Button'; // Button file! 

const App = () => {

  // Unicage: const to feedback
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // anecdotes: const to anecdotes
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0)); //Votes - first fill with 0!

  // Random select anecdote! 
  const selectRandomAnecdote = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * anecdotes.length);
    } while (randomIndex === selected);
    setSelected(randomIndex);
  };
    
  // Add vote to chosen index
  const voteAnecdote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  };

  return (
    <div>
      <h1>Unicafe - give feedback</h1>

      {/* feedback clicks*/}
      <Button text="good" handleClick={() => setGood(good + 1)} />
      <Button text="neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" handleClick={() => setBad(bad + 1)} />

      {/* Statistics components! */}
      <Statistics good={good} neutral={neutral} bad={bad} />

      {/* Anecdotes data! */}
      <hr />
      <h1>Anecdotes</h1>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button text="Vote" handleClick={voteAnecdote} />
      <Button text="Next anecdote" handleClick={selectRandomAnecdote} />
    </div>
  );
};

export default App;
