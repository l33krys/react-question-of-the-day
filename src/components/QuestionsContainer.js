import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import QuestionsList from "./QuestionsList";
import Search from "./Search";
import AddQuestionForm from "./AddQuestionForm";
import { Button } from "@mui/material";

function QuestionsContainer({ questions, setQuestions, handleNewQuestion }) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showNewAndUsed, setShowNewAndUsed] = useState(false);
  const [randomQuestion, setRandomQuestion] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/questions")
      .then((r) => r.json())
      .then((data) => setQuestions(data));
  }, []);

  const searchedQuestions = questions
    .filter((question) =>
      question.text.toLowerCase().includes(search.toLowerCase())
    )
    .filter((question) => {
      if (selectedCategory === "All") {
        return question;
      } else {
        return (
          question.category.toLowerCase() === selectedCategory.toLowerCase()
        );
      }
    })
    .filter((question) => {
      return showNewAndUsed ? question.completed === false : question;
    });

  function getRandomQuestion() {
    const numberOfQuestions = questions.length;
    const randomIndex = Math.floor(Math.random() * numberOfQuestions);
    setRandomQuestion(questions[randomIndex].text);
  }

  function deletedQuestion(deletedItem) {
    fetch(`http://localhost:3000/questions/${deletedItem.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        const updatedQuestions = questions.filter(
          (question) => question.id !== deletedItem.id
        );

        setQuestions(updatedQuestions);
      });
  }

  function updateQuestionInfo(updatedItem) {
    const updatedQuestions = questions.map((question) =>
      question.id === updatedItem.id ? updatedItem : question
    );
    setQuestions(updatedQuestions);
  }

  function markCompleted(e) {
    if (randomQuestion) {
      if (e.target.value !== "") {
        const myBool =
          e.target.value === "true"
            ? e.target.value === "true"
            : e.target.value === "false";
        const markCompletedQuestion = questions.filter((question) =>
          question.text === randomQuestion ? question : null
        );
        fetch(
          `http://localhost:3000/questions/${markCompletedQuestion[0].id}`,
          {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ completed: myBool }),
          }
        )
          .then((r) => r.json())
          .then((updatedItem) => updateQuestionInfo(updatedItem));
      }
    }
  }

  return (
    <div>
      <Typography variant="h2">Today's Question</Typography>
      <Search
        search={search}
        setSearch={setSearch}
        setSelectedCategory={setSelectedCategory}
        setShowNewAndUsed={setShowNewAndUsed}
      />
      <h1 className="random-question shaped-background">{randomQuestion}</h1>
      <label>
        <strong>Completed:</strong>
        <select name="completed" id="set-completed" onChange={markCompleted}>
          <option value=""></option>
          <option value="true">Completed</option>
          <option value="false">Not Completed</option>
        </select>
      </label>
      <label>
        <strong>Only New Questions:</strong>
        <input
          type="checkbox"
          id="new-or-repeat"
          name="completed"
          onClick={(e) => setShowNewAndUsed(e.target.checked)}
        />
      </label>
      <Button
        onClick={getRandomQuestion}
        type="submit"
        variant="contained"
        color="primary"
      >
        Next Question
      </Button>
      <QuestionsList
        questions={searchedQuestions}
        deletedQuestion={deletedQuestion}
        updateQuestionInfo={updateQuestionInfo}
      />
      <AddQuestionForm handleNewQuestion={handleNewQuestion} />
    </div>
  );
}

export default QuestionsContainer;
