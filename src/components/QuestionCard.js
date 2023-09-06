import React from "react";

function QuestionCard({ question }) {
  return (
    <div>
      <h3>{question.text}</h3>
      <p>Category: {question.category}</p>
      <p>Completed: {question.completed ? "Yes" : "No"}</p>
      <p>Likes: {question.likes}</p>
    </div>
  );
}

export default QuestionCard;
