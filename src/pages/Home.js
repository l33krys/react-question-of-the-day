import React from "react";
import Randomizer from "../components/Randomizer";
import Dashboard from "../components/Dashboard";

function Home({ questions }) {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Randomizer questions={questions}></Randomizer>
      <h1>Welcome to Question Query ❓</h1>
      <p>
        Dive into a world of curiosity, fun, and learning with Question Query -
        your daily dose of intriguing questions to spark joy and ignite
        conversations. Whether you're looking to kickstart your day with a dose
        of wit or wind down with a quirky query, we have something for everyone.
      </p>
      <p>
        <p> Why Question Query❓ </p>
        <ul>
          <li>
            Daily Questions: Start a new day with a fresh question to ponder
            upon and discuss with friends, family, or colleagues.
          </li>
          <li>
            Diverse Categories: From light-hearted and fun to deep and
            philosophical, explore questions from a wide array of categories.
          </li>
          Community Engagement: Be part of a community where you can vote on
          your favorite questions, share your views, and even contribute your
          own questions to the pool.
          <li>
            Personalized Dashboard: Keep track of your activity, see the
            questions you've answered, and revisit your favorite moments on your
            personalized dashboard.
          </li>
        </ul>
      </p>
      <p>
        Join us in fostering a community of curiosity and discovery, one
        question at a time.
      </p>
      <Dashboard></Dashboard>
    </div>
  );
}

export default Home;
