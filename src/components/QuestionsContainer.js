import Typography from "@mui/material/Typography";
import React, { useState, useEffect } from "react";
import QuestionsList from "./QuestionsList";


function QuestionsContainer() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/questions")
      .then((r) => r.json())
      .then((data) => setQuestions(data));
  }, []);

  return (
    <div>
      <Typography variant="h2">Today's Question</Typography>
      <QuestionsList questions={questions} />
    </div>
  );
}

export default QuestionsContainer;
