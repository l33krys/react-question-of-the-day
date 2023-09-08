import React from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Button from '@mui/material/Button';

function QuestionCard({ question, deletedQuestion, updateQuestionInfo }) {
  // ⬆️ ⬇️

  function handleLikes(update) {
    update === "like" ? question.likes += 1 : question.likes -= 1 
    fetch(`${process.env.REACT_APP_API_URL}/questions/${question.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ likes: (question.likes) }),
      })
      .then((r) => r.json())
      .then((updatedItem) => updateQuestionInfo(updatedItem));
  }

  function handleDelete(e) {
    deletedQuestion(question);
  }

  function handleCompleted(e) {
    fetch(`${process.env.REACT_APP_API_URL}/questions/${question.id}`, {
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
          <Button sx={{ color: 'black', borderColor: 'black' }} variant="outlined" size="small" onClick={() => handleCompleted(question.completed)}>Yes</Button>
        ) : (
          <Button sx={{ color: 'black', borderColor: 'black' }} variant="outlined" size="small" onClick={() => handleCompleted(question.completed)}>No</Button>
        )}
      </td>
      <td>
        <IconButton value={'increase'} onClick={() => handleLikes("like")} ><ArrowDropUpIcon fontSize="small" /></IconButton>
        <span>{question.likes}</span>
        <IconButton value={'decrease'} onClick={() => handleLikes("dislike")}><ArrowDropDownIcon fontSize="small" /></IconButton>
      </td>
      <td>
        <IconButton onClick={handleDelete} aria-label="delete"><DeleteIcon /></IconButton>
      </td>
    </tr>
  );
}

export default QuestionCard;
