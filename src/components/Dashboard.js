import React from "react";

function Dashboard() {
  const completedQuestions = 5;
  const mostPopularCategory = "Miscellaneous";

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Completed Questions: {completedQuestions}</p>
      <p>Most Popular Category: {mostPopularCategory}</p>
    </div>
  );
}

export default Dashboard;
