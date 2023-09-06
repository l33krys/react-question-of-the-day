import React from "react";
import QuestionCard from "./QuestionCard";

function QuestionsList({ questions }) {
  return (
    <div>
      {questions.map((question) => (
        <QuestionCard key={question.id} question={question} />
      ))}
    </div>
  );
}

export default QuestionsList;
