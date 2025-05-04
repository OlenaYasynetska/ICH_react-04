import { useState, useEffect } from "react";
import styles from "./Answer.module.css";

const Answer = ({ updatePoints, error }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePoints(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.answerForm}>
      <input
        type="number"
        step="1"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        required
        placeholder="Введите ответ"
      />
      <button type="submit">Проверить</button>
      {error && <p className={styles.errorMessage}>{error}</p>}
    </form>
  );
};

export default Answer;

