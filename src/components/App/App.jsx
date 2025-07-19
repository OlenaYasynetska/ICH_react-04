import { useState } from 'react';
import CityCard from "../CityCard/CityCard.jsx";
import CitySelector from "../CitySelector/CitySelector.jsx";
import MathQuiz from "../MathQuiz/MathQuiz.jsx";
import { citiesData } from "../../db/db";
import './App.css';

function App() {
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <div className="app-container">
      <h1>City Cards</h1>
      <CitySelector cities={citiesData} onSelectCity={setSelectedCity} />
      {selectedCity && <CityCard city={selectedCity} />}
      <h1>Math Quiz</h1>
      <MathQuiz />
    </div>
  );
}

export default App;
