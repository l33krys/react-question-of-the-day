import React, { useEffect, useState } from "react";
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

  return (
    <div>
      <Search search={search} setSearch={setSearch} setSelectedCategory={setSelectedCategory} setShowNewAndUsed={setShowNewAndUsed} />
      <h2>Today's Question</h2>
      <h1>{randomQuestion}</h1>
      <label>
          <strong>Only New Questions:</strong>
          <input type="checkbox" id="new-or-repeat" name="completed" onClick={(e) => setShowNewAndUsed(e.target.checked)}/>
      </label>
      <button onClick={getRandomQuestion}>Next Question</button>
      <br />
      {/* add components - QuestionList, Sort, Search, CategoryFilter*/}
      {/* Update rendered questions to use "searchedQuestions" */}
      {searchedQuestions.map((question) => (
        question.text)
      )}
    </div>
  );
}

export default QuestionsContainer;
