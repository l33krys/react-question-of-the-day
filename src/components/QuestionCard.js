import React, { useState } from "react";

function QuestionCard({ question, deletedQuestion, updateLikes }) {

  const [showUpdateArea, setShowUpdateArea] = useState(false)
  const [likes, setLikes] = useState(question.likes)

  function handleLikes(e) {
    fetch(`http://localhost:3000/questions/${question.id}`, {
      method: "PATCH",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify({...question, likes: question.likes +=1})
    })
    .then(r => r.json())
    .then(updatedItem => updateLikes(updatedItem))
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
