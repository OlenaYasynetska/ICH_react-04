import React, { useState } from "react";
import Answer from "./components/Answer/Answer";
import "./MathQuiz.css";

function MathQuiz() {
  const [a, setA] = useState(generateNumber());
  const [b, setB] = useState(generateNumber());
  const [score, setScore] = useState(0);

  function generateNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }

  function updatePoints(userAnswer) {
    if (parseInt(userAnswer) === a + b) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
    setA(generateNumber());
    setB(generateNumber());
  }

  return (
    <div className="math-quiz">
      <p>
        {a} + {b} = ?
      </p>
      <p>Score: {score}</p>
      <Answer updatePoints={updatePoints} />
    </div>
  );
}

export default MathQuiz;