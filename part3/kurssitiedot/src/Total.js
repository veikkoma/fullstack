/* add more console logs - ensure total sum */
const Total = ({ parts }) => {
    const totalExercises = parts.reduce((sum, part) => {
      console.log('Current sum:', sum); // sum console log
      console.log('Current part added:', part); // current part
      return sum + part.exercises;
    }, 0);
  
    console.log('Final total of exercises:', totalExercises);
  
    return (
      <p>
        <strong>total of {totalExercises} exercises</strong>
      </p>
    );
  };
  
  export default Total;
  