import React from "react";

const CountryList = ({ countries, setFilteredCountries }) => {
  return (
    <ul>
      {countries.map((country) => (
        <li key={country.cca3}>
          {country.name.common}
          <button onClick={() => setFilteredCountries([country])}>Show</button>
        </li>
      ))}
    </ul>
  );
};

export default CountryList;
