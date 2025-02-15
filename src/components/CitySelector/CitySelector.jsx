import React from "react";
import "./CitySelector.css";

function CitySelector({ cities, onSelectCity }) {
  return (
    <div className="city-selector">
      <label>Выберите город:</label>
      <select onChange={(e) => onSelectCity(cities.find(city => city.name === e.target.value))}>
        <option value="">-- Выберите --</option>
        {cities.map((city) => (
          <option key={city.name} value={city.name}>{city.name}</option>
        ))}
      </select>
    </div>
  );
}

export default CitySelector;
