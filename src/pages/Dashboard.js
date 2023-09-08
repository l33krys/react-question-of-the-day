import React from "react";
import "../styles/dashboard.css";

function Dashboard({ questions }) {
  const completedQuestions = questions.filter((question) => question.completed);

  const totalQuestions = questions.length;
  const completionRate = (completedQuestions.length / totalQuestions) * 100;

  const mostLikedQuestion = [...questions].sort((a, b) => b.likes - a.likes)[0];
  const leastLikedQuestion = [...questions].sort(
    (a, b) => a.likes - b.likes
  )[0];

  //Krystle's code for most popular category. Doesn't account for ties.
  const recreationCount = questions.filter(
    (question) => question.category === "Recreation"
  ).length;
  const ffCount = questions.filter(
    (question) => question.category === "Family & Friends"
  ).length;
  const miscCount = questions.filter(
    (question) => question.category === "Miscellaneous"
  ).length;
  const workCount = questions.filter(
    (question) => question.category === "Work"
  ).length;

  function mostPopular(recreationCount, ffCount, miscCount, workCount) {
    if (
      recreationCount > ffCount &&
      recreationCount > miscCount &&
      recreationCount > workCount
    ) {
      return "Recreation";
    } else if (ffCount > miscCount && ffCount > workCount) {
      return "Friends & Family";
    } else if (miscCount > workCount) {
      return "Miscellaneous";
    } else {
      return "Work";
    }
  }

  let mostPopularCategory = mostPopular(
    recreationCount,
    ffCount,
    miscCount,
    workCount
  );

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-header">Dashboard</h2>
      <div className="shaped-background">
        <h6 className="section-title">Stats</h6>
        <p className="section-text">Total questions: {totalQuestions}</p>
        <p className="section-text">
          Completed Questions: {completedQuestions.length}
        </p>
        <p className="section-text">Completion Rate: {completionRate}%</p>
        <p className="section-text">
          Most Popular Category: {mostPopularCategory}
        </p>
      </div>
      <div className="shaped-background">
        <h6 className="section-title">Likes</h6>
        <p className="section-text">
          ✨Most Liked Question✨: {mostLikedQuestion.text} with
          {mostLikedQuestion.likes} likes
        </p>
        <p className="section-text">
          👎Least Liked Question👎: {leastLikedQuestion.text} with
          {leastLikedQuestion.likes} likes
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
