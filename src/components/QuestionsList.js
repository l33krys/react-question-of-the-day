import React from "react";
import QuestionCard from "./QuestionCard";
import Typography from "@mui/material/Typography";


function QuestionsList({ questions, deletedQuestion, updateQuestionInfo }) {
  return (
    <div>
      <table id="question-table">
        <caption>
          <Typography variant="h4">All Questions</Typography>
        </caption>
        <tbody>
          <tr>
            <th>
              <h3>Question</h3>
            </th>
            <th>
              <h3>Category</h3>
            </th>
            <th>
              <h3>Completed</h3>
            </th>
            <th>
              <h3>Likes</h3>
            </th>
            <th>
              <h3>Delete</h3>
            </th>
          </tr>
          {questions.map((question) => (
            <QuestionCard
              key={question.id}
              question={question}
              deletedQuestion={deletedQuestion}
              updateQuestionInfo={updateQuestionInfo}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default QuestionsList;
