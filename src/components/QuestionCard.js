import React from "react";

function QuestionCard({ question, deletedQuestion, updateQuestionInfo }) {
  const EMPTY_HEART = "♡";
  const FULL_HEART = "♥";

  function handleLikes(e) {
    fetch(`http://localhost:3000/questions/${question.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ likes: (question.likes += 1) }),
    })
      .then((r) => r.json())
      .then((updatedItem) => updateQuestionInfo(updatedItem));
  }

  function handleDelete(e) {
    deletedQuestion(question);
  }

  function handleCompleted(e) {
    fetch(`http://localhost:3000/questions/${question.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !question.completed }),
    })
      .then((r) => r.json())
      .then((updatedItem) => updateQuestionInfo(updatedItem));
  }

  return (
    <tr>
      <td>{question.text}</td>
      <td>{question.category}</td>
      <td>
        {question.completed ? (
          <button onClick={handleCompleted}>Yes</button>
        ) : (
          <button onClick={handleCompleted}>No</button>
        )}
      </td>
      <td>
        <button onClick={handleLikes}>
          {question.likes} {FULL_HEART}
        </button>
      </td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
}

export default QuestionCard;
