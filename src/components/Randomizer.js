import React, { useState } from "react";

function Randomizer() {
  const [randomQuestion, setRandomQuestion] = useState("");

  //Hard coded. Remove in production.
  const questions = [
    "What is your favorite color?",
    "What is your favorite movie?",
    "What is your favorite food?",
  ];

  //Slight modification of Krystle's code
  function getRandomQuestion() {
    const numberOfQuestions = questions.length;
    const randomIndex = Math.floor(Math.random() * numberOfQuestions);
    setRandomQuestion(questions[randomIndex]);
  }

  return (
    <div>
      <h2>Random Question</h2>
      <button onClick={getRandomQuestion}>Get Random Question</button>
      <p>{randomQuestion}</p>
    </div>
  );
}

export default Randomizer;
