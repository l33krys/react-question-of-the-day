import React from "react";
import QuestionsContainer from "../components/QuestionsContainer";

const Questions = ({ questions, setQuestions}) => {
  return (
    <div>
      <QuestionsContainer questions={questions} setQuestions={setQuestions}></QuestionsContainer>
    </div>
  );
};

export default Questions;
