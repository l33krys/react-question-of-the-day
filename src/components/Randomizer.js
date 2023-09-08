import React, { useState, useEffect, useRef } from "react";
import { Button } from "@mui/material";
import Confetti from "react-dom-confetti";

function Randomizer({ questions }) {
  const [randomQuestion, setRandomQuestion] = useState("");
  const [confetti, setConfetti] = useState(false);
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const confettiRef = useRef(null);

  useEffect(() => {
    setHeight(confettiRef.current.clientHeight);
    setWidth(confettiRef.current.clientWidth);
  }, []);

  useEffect(() => {
    if (confetti) {
      const timer = setTimeout(() => {
        setConfetti(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [confetti]);

  function getRandomQuestion() {
    const numberOfQuestions = questions.length;
    const randomIndex = Math.floor(Math.random() * numberOfQuestions);
    setRandomQuestion(questions[randomIndex].text);
    setConfetti(true);
  }

  return (
    <div id="random-area" className="shaped-background" ref={confettiRef}>
      <p className="random-question">{randomQuestion}</p>
      <Button
        onClick={getRandomQuestion}
        type="submit"
        variant="contained"
        color="primary"
      >
        Get Random Question
      </Button>
      <Confetti
        active={confetti}
        numberOfPieces={150}
        width={width}
        height={height}
      />
    </div>
  );
}

export default Randomizer;
