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

  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        setSelectedCategory={setSelectedCategory}
        setShowNewAndUsed={setShowNewAndUsed}
      />
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
