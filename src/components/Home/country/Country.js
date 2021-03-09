import React from "react";
import { BrowserRouter as Link, useHistory } from "react-router-dom";
import "./country.css";

const Country = (props) => {
  const country = props.data;
  const { name, capital, region, population } = country;
  let history = useHistory();
  const handleCountry = (name) => {
    history.push(`/country/${name}`);
  };
  return (
    <div className="country">
      <p>
        <code>Country Name: {name}</code>
      </p>
      <p>
        <code>Region: {region}</code>
      </p>
      <p>
        <code>Capital : {capital}</code>
      </p>
      <p>
        <code>Population: {population}</code>
      </p>
      <button onClick={() => handleCountry(name)}>Details</button>
    </div>
  );
};

export default Country;
