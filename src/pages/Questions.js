import React from "react";
import QuestionsContainer from "../components/QuestionsContainer";

const Questions = ({ questions, setQuestions, handleNewQuestion }) => {
  return (
    <div>
      <QuestionsContainer
        questions={questions}
        setQuestions={setQuestions}
        handleNewQuestion={handleNewQuestion}
      ></QuestionsContainer>
    </div>
  );
};

export default Questions;
