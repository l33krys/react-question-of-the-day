import "./App.css";
import React from "react";
import QuestionsContainer from "./components/QuestionsContainer";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AddQuestionForm from "./components/AddQuestionForm";

function App() {

  return (
    <div className="App">
      <NavBar />
      <QuestionsContainer  />
      <AddQuestionForm />
      <Footer />
    </div>
  );
}

export default App;
