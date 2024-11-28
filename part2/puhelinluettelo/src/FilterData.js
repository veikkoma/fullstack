import React from 'react';

/* Filterin the data of users */
const FilterData = ({ filter, handleFilterChange }) => {
  return (
    <div>
      Filter shown with <input value={filter} onChange={handleFilterChange} />
    </div>
  );
};

export default FilterData;
