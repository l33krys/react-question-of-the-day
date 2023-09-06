import "./App.css";
import React, { useEffect, useState } from "react";
import QuestionsContainer from "./components/QuestionsContainer";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import Footer from "./components/Footer";
import AddQuestionForm from "./components/AddQuestionForm";

function App() {

  const [questions, setQuestions] = useState([])
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [showNewAndUsed, setShowNewAndUsed] = useState(false)

  useEffect(() => {
    fetch('http://localhost:3000/questions')
    .then(r => r.json())
    .then(data => setQuestions(data))
  },[])

  const searchedQuestions = questions.filter((question) => 
  question.question.toLowerCase().includes(search.toLowerCase()))
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

    console.log(showNewAndUsed)

  return (
    <div className="App">
      <NavBar />
      <Search search={search} setSearch={setSearch} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} showNewAndUsed={showNewAndUsed} setShowNewAndUsed={setShowNewAndUsed} />
      <QuestionsContainer  />
      {searchedQuestions.map((question) => (
        question.question)
      )}
      <AddQuestionForm />
      <Footer />
    </div>
  );
}

export default App;
