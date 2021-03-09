import React, { useEffect } from "react";
import { useState } from "react";
import Country from "./country/Country";

const Home = () => {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/all`).then((response) =>
      response.json().then((country) => setCountry(country))
    );
  }, []);
  console.log(country.length);
  return (
    <div>
      {country.map((singleCountry) => (
        <Country key={singleCountry.name} data={singleCountry}></Country>
      ))}
    </div>
  );
};

export default Home;
