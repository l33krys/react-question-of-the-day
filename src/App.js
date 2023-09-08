import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AddQuestion from "./pages/AddQuestion";
import Questions from "./pages/Questions";
import Dashboard from "./pages/Dashboard";

function App() {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/questions")
      .then((r) => r.json())
      .then((data) => {
        setQuestions(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleNewQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
  };

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home questions={questions} setQuestions={setQuestions} />
        </Route>
        <Route path="/add-question">
          <AddQuestion handleNewQuestion={handleNewQuestion} />
        </Route>
        <Route path="/dashboard">
          <Dashboard questions={questions} />
        </Route>
        <Route path="/questions">
          <Questions
            questions={questions}
            setQuestions={setQuestions}
            handleNewQuestion={handleNewQuestion}
          />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
