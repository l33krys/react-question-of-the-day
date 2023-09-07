import React from "react";
import QuestionsContainer from "../components/QuestionsContainer";

//QuestionsContainer.js should really live in pages (presentation)

const Questions = () => {
  return (
    <div>
      <h1>All Questions</h1>
      <QuestionsContainer></QuestionsContainer>
    </div>
  );
};

export default Questions;
