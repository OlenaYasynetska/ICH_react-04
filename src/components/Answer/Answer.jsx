import React, { useState } from "react";
import "./Answer";

function Answer({ updatePoints }) {
  const [answer, setAnswer] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    updatePoints(answer);
    setAnswer("");
  }

  return (
    <form onSubmit={handleSubmit} className="answer-form">
      <input
        type="number"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Введите ответ"
      />
      <button type="submit">Ответить</button>
    </form>
  );
}

export default Answer;