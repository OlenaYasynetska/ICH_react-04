import { useState, useEffect } from "react";
import Answer from "../Answer/Answer";
import styles from "./MathQuiz.module.css";

const MathQuiz = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [score, setScore] = useState(0);
  const [error, setError] = useState(""); // новое: сообщение об ошибке

  const generateQuestion = () => {
    setA(Math.floor(Math.random() * 10));
    setB(Math.floor(Math.random() * 10));
    setError(""); // сброс ошибки при новой задаче
  };

  useEffect(() => {
    generateQuestion();
  }, []);

  const updatePoints = (userAnswer) => {
    const answer = Number(userAnswer);
    const correctAnswer = a + b;

    if (!Number.isInteger(answer)) {
      setError("Please enter an integer value.");
      return;
    }

    if (answer === correctAnswer) {
      setScore((prev) => prev + 1);
    } else {
      setScore((prev) => prev - 1);
    }

    generateQuestion();
  };

  return (
    <div className={styles.quizContainer}>
      <p className={styles.score}>Ваши очки: {score}</p>
      <p className={styles.question}>
        What is {a} + {b}?
      </p>
      
      <Answer updatePoints={updatePoints} error={error} />
    </div>
  );
};

export default MathQuiz;

