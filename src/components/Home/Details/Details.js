import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Details.css";

const Details = () => {
  let { name } = useParams();
  const [country, setCountry] = useState([]);
  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
      .then((response) => response.json())
      .then((data) => setCountry(data[0]));
  }, []);
  const { capital, region, population, flag } = country;

  return (
    <div>
      <a href="/Home">Home</a>
      <div>
        <img src={flag} alt="" />
        <p>Name: {name}</p>
        <p>Capital: {capital}</p>
        <p>Region: {region}</p>
        <p>Population: {population}</p>
      </div>
    </div>
  );
};

export default Details;
