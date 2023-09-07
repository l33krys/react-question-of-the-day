import React, { useState } from "react";
import { Button } from "@mui/material";

function Randomizer({ questions }) {
  const [randomQuestion, setRandomQuestion] = useState("");

  function getRandomQuestion() {
    const numberOfQuestions = questions.length;
    const randomIndex = Math.floor(Math.random() * numberOfQuestions);
    setRandomQuestion(questions[randomIndex].text);
  }

  return (
    <div id="random-area" className="shaped-background">
      <h2>Today's Question:</h2>
      <p className="random-question">{randomQuestion}</p>
      <Button
        onClick={getRandomQuestion}
        type="submit"
        variant="contained"
        color="primary"
      >
        Get Random Question
      </Button>
    </div>
  );
}

export default Randomizer;
