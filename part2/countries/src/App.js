import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryList from "./CountryList";
import Details from "./Details";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  // Get all countries - restapi
  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        setCountries(response.data);
        console.log("Fetched Countries:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearch(query);

    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(query)
    );
    setFilteredCountries(filtered);
  };

  return (
    <div>
      <h1>Country Finder</h1>
      <input
        type="text"
        placeholder="Search country"
        value={search}
        onChange={handleSearchChange}
      />
      <div>
        {filteredCountries.length > 10 && (
          <p>Too many matches, please specify another filter</p>
        )}
        {filteredCountries.length > 1 && filteredCountries.length <= 10 && (
          <CountryList
            countries={filteredCountries}
            setFilteredCountries={setFilteredCountries}
          />
        )}
        {filteredCountries.length === 1 && (
          <Details country={filteredCountries[0]} />
        )}
      </div>
    </div>
  );
};

export default App;
