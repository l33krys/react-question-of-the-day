import "./App.css";
import React from "react";
import QuestionsContainer from "./components/QuestionsContainer";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <QuestionsContainer />
      <Footer />
    </div>
  );
}

export default App;
