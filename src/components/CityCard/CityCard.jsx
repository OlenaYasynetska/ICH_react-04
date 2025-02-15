import React from "react";
import "./CityCard";

function CityCard({ city }) {
  return (
    <div className="city-card">
      <h2>{city.name}</h2>
      <img src={city.imageUrl} alt={city.name} />
      <p>{city.description}</p>
      <ul>
        {city.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default CityCard;
