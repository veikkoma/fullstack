import React from "react";

const Details = ({ country }) => {
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>
        <strong>Basic information</strong>
      </p>
      <p>
        <strong>Capital:</strong> {country.capital}
      </p>
      <p>
        <strong>Population:</strong> {country.population.toLocaleString()} people
      </p>
      <p>
        <strong>Area:</strong> {country.area.toLocaleString()} km²
      </p>
      <h3>Languages</h3>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img
        src={country.flags.png}
        alt={`Flag of ${country.name.common}`}
        style={{ width: "200px" }}
      />
    </div>
  );
};

export default Details;
