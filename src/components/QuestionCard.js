import React, { useState } from "react";

function QuestionCard({ question, deletedQuestion, updateQuestionInfo }) {

  const [likes, setLikes] = useState(question.likes)
  const [isCompleted, setIsCompleted] = useState(question.completed)

  function handleLikes(e) {
    fetch(`http://localhost:3000/questions/${question.id}`, {
      method: "PATCH",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify({...question, likes: question.likes +=1})
    })
    .then(r => r.json())
    .then(updatedItem => updateQuestionInfo(updatedItem))
  }

  function handleDelete(e) {
    deletedQuestion(question)
  }

  return (
      <tr>
        <td>{question.text}</td>
        <td>{question.category}</td>
        <td>{question.completed ? "Yes" : "No"}</td>
        <td><button onClick={handleLikes}>{question.likes} Likes</button></td>
        <td><button onClick={handleDelete}>Delete</button></td>
      </tr>     
  );
}

export default QuestionCard;
