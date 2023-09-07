import React from "react";
import AddQuestionForm from "../components/AddQuestionForm";

function AddQuestion({ handleNewQuestion }) {
  return (
    <div>
      <AddQuestionForm handleNewQuestion={handleNewQuestion}></AddQuestionForm>
    </div>
  );
}

export default AddQuestion;
