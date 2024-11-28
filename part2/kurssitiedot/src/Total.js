const Total = ({ parts }) => {
    const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
    console.log('Total component:', totalExercises);
  
    return (
      <p>
        {/* Make the bold text as in the example */}
        <b>total of {totalExercises} exercises</b>
      </p>
    );
  };
  
  export default Total;
  