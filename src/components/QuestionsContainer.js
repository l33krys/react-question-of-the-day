import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import QuestionsList from "./QuestionsList";
import Search from "./Search";

function QuestionsContainer() {

  const [questions, setQuestions] = useState([])
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [showNewAndUsed, setShowNewAndUsed] = useState(false)
  const [randomQuestion, setRandomQuestion] = useState("")

  useEffect(() => {
    fetch('http://localhost:3000/questions')
    .then(r => r.json())
    .then(data => setQuestions(data))
  },[])

  const searchedQuestions = questions.filter((question) => 
  question.text.toLowerCase().includes(search.toLowerCase()))
  .filter((question) => {
      if (selectedCategory === "All") {
        return question
      } else {
        return question.category.toLowerCase() === selectedCategory.toLowerCase()
      }
    })
    .filter((question) => {
      return showNewAndUsed ? question.completed === false : question
    })

  function getRandomQuestion() {
    const numberOfQuestions = questions.length
    const randomIndex = Math.floor(Math.random() * numberOfQuestions)
    setRandomQuestion(questions[randomIndex].text)
  }

  function deletedQuestion(deletedItem) {

    fetch(`http://localhost:3000/questions/${deletedItem.id}`, {
      method: "DELETE"})
    .then(r => r.json())
    .then(() => {
      const updatedQuestions = questions.filter((question) =>
      question.id !== deletedItem.id
      )

      setQuestions(updatedQuestions)
    })
}

  function updateLikes(updatedItem) {
    const updatedQuestions = questions.map((question) =>
      question.id === updatedItem.id ? updatedItem : question)
    setQuestions(updatedQuestions)  
  }

  return (
    <div>
      <Typography variant="h2">Today's Question</Typography>
      <Search search={search} setSearch={setSearch} setSelectedCategory={setSelectedCategory} setShowNewAndUsed={setShowNewAndUsed} />  
      <h1>{randomQuestion}</h1>
      <label>
          <strong>Only New Questions:</strong>
          <input type="checkbox" id="new-or-repeat" name="completed" onClick={(e) => setShowNewAndUsed(e.target.checked)}/>
      </label>
      <button onClick={getRandomQuestion}>Next Question</button>
      <QuestionsList questions={searchedQuestions} deletedQuestion={deletedQuestion} updateLikes={updateLikes} />  
    </div>
  );
}

export default QuestionsContainer;
