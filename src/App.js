import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AddQuestion from "./pages/AddQuestion";
import Dashboard from "./pages/Dashboard";
import Questions from "./pages/Questions";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/add-question">
          <AddQuestion />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/questions">
          <Questions />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
