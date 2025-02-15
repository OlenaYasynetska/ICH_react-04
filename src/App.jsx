import React, { useState } from 'react'
import CityCard from './components/CityCard/CityCard';
import CitySelector from './components/CitySelector/CitySelector';
import './App.css';

const citiesData = [
  {
    name: "Токио",
    description: "Столица Японии, известная своими неоновыми огнями, многолюдностью и современной архитектурой.",
    imageUrl: "https://via.placeholder.com/300",
    facts: [
      "Токио - самый населенный мегаполис в мире.",
      "Здесь расположена самая высокая башня в Японии - Токийская башня.",
      "В Токио проходят множество культурных событий и фестивалей."
    ]
  },
  {
    name: "Киото",
    description: "Город на острове Хонсю, известный своими многочисленными классическими буддийскими храмами.",
    imageUrl: "https://via.placeholder.com/300",
    facts: [
      "В Киото насчитывается более 1600 буддийских храмов.",
      "Этот город был столицей Японии более тысячи лет."
    ]
  }
];

function App() {
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <div className="app-container">
      <h1>City Cards</h1>
      <CitySelector cities={citiesData} onSelectCity={setSelectedCity} />
      {selectedCity && <CityCard city={selectedCity} />}
    </div>
  );
}

export default App;
