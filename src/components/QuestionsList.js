import React from "react";
import QuestionCard from "./QuestionCard";
import Typography from "@mui/material/Typography";
import IconButton from '@mui/material/IconButton';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


function QuestionsList({ questions, setQuestions, deletedQuestion, updateQuestionInfo }) {

  // function handleSort(sorting) {
  //   if (sorting === "az") {
  //     const sortedQuestions = questions.sort((question1, question2) => 
  //     question1.text.localeCompare(question2.text))
  //     setQuestions(sortedQuestions)
  //   } else if (sorting === "za") {
  //     const sortedQuestions = questions.sort((question1, question2) => 
  //     question2.text.localeCompare(question1.text))
  //     setQuestions(sortedQuestions)
  //   }
  // }

  function handleSort(sorting, column) {
    if (sorting === "az") {
      const sortedQuestions = questions.sort((question1, question2) => 
      question1[column].localeCompare(question2[column]))
      setQuestions(sortedQuestions)
    } else if (sorting === "za") {
      const sortedQuestions = questions.sort((question1, question2) => 
      question2[column].localeCompare(question1[column]))
      setQuestions(sortedQuestions)
    } else if (sorting === "azBool") {
      const sortedQuestions = questions.sort((question1, question2) => 
      (question2[column] === question1[column]) ? 0 : question2[column] ? -1 : 1)
      setQuestions(sortedQuestions)
    } else if (sorting === "zaBool") {
      const sortedQuestions = questions.sort((question1, question2) => 
      (question1[column] === question2[column]) ? 0 : question1[column] ? -1 : 1)
      setQuestions(sortedQuestions)
    } else if (sorting === "azNum") {
      const sortedQuestions = questions.sort((question1, question2) => 
      question1[column] - question2[column])
      setQuestions(sortedQuestions)
    } else if (sorting === "zaNum") {
      const sortedQuestions = questions.sort((question1, question2) => 
      question2[column] - question1[column])
      setQuestions(sortedQuestions)
    }
  }

  return (
    <div>
      <table id="question-table">
        <caption>
          <Typography variant="h4">All Questions</Typography>
        </caption>
        <tbody>
          <tr>
            <th>
              <h3>Question <br/>
              <IconButton value={'az'} onClick={() => handleSort("az", "text")} ><ArrowDropUpIcon fontSize="small" /></IconButton>
              <IconButton value={'za'} onClick={() => handleSort("za", "text")}><ArrowDropDownIcon fontSize="small" /></IconButton>
            </h3>
            </th>
            <th>
              <h3>Category <br/>
              <IconButton value={'az'} onClick={() => handleSort("az", "category")} ><ArrowDropUpIcon fontSize="small" /></IconButton>
              <IconButton value={'za'} onClick={() => handleSort("za", "category")}><ArrowDropDownIcon fontSize="small" /></IconButton>
              </h3>
            </th>
            <th>
              <h3>Completed <br/>
              <IconButton value={'az'} onClick={() => handleSort("azBool", "completed")} ><ArrowDropUpIcon fontSize="small" /></IconButton>
              <IconButton value={'za'} onClick={() => handleSort("zaBool", "completed")}><ArrowDropDownIcon fontSize="small" /></IconButton>
              </h3>
            </th>
            <th>
              <h3>Likes <br/>
              <IconButton value={'az'} onClick={() => handleSort("azNum", "likes")} ><ArrowDropUpIcon fontSize="small" /></IconButton>
              <IconButton value={'za'} onClick={() => handleSort("zaNum", "likes")}><ArrowDropDownIcon fontSize="small" /></IconButton>
              </h3>
            </th>
            <th>
              <h3> <br />
              </h3>
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
          <tr>
            <td id="total-questions"><strong>Total Questions: {questions.length}</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default QuestionsList;
