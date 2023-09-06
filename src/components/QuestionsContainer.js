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
      <h2>Today's Question</h2>
      <QuestionsList questions={questions} />
    </div>
  );
}

export default QuestionsContainer;
