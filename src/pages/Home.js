import React from "react";
import Randomizer from "../components/Randomizer";
import Dashboard from "../components/Dashboard";

function Home({ questions }) {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Randomizer questions={questions} ></Randomizer>
      <Dashboard></Dashboard>
    </div>
  );
}

export default Home;
