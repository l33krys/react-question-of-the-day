import React from "react";
import QuestionsContainer from "../components/QuestionsContainer";

//QuestionsContainer.js should really live in pages (presentation)

const Questions = ({ questions, setQuestions, handleNewQuestion }) => {
  return (
    <div>
      <h1>All Questions</h1>
      <QuestionsContainer
        questions={questions}
        setQuestions={setQuestions}
        handleNewQuestion={handleNewQuestion}
      ></QuestionsContainer>
    </div>
  );
};

export default Questions;
