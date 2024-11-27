const Statistics = ({ good, neutral, bad }) => {
    const total = good + neutral + bad;
    const average = total === 0 ? 0 : (good - bad) / total;
    const positivePercentage = total === 0 ? 0 : (good / total) * 100;
  
    return (
      <div>
        <h2>Statistics</h2>
        {/* Allready done 1.9 part */}
        {total === 0 ? (
          <p>no feedback</p>
        ) : (
          <table>
            <tbody>
              <tr>
                <td>Good</td>
                <td>{good}</td>
              </tr>
              <tr>
                <td>Neutral</td>
                <td>{neutral}</td>
              </tr>
              <tr>
                <td>Bad</td>
                <td>{bad}</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>{total}</td>
              </tr>
              <tr>
                <td>Average</td>
                <td>{average.toFixed(1)}</td>
              </tr>
              <tr>
                <td>Positive (%)</td>
                <td>{positivePercentage.toFixed(1)}%</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    );
  };
  
  export default Statistics;
  