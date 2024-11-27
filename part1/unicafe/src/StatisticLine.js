/* One line for statistics - Get two prompts text and value */
const StatisticLine = ({ text, value }) => {
    return (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    );
  };
  
  export default StatisticLine;
  