import React from "react";
import Randomizer from "../components/Randomizer";
import Dashboard from "./Dashboard";

function Home({ questions }) {
  return (
    <div>
      <Randomizer questions={questions} />
      <h1>Welcome to Question Query❓</h1>
      <p>
        Dive into a world of curiosity, fun, and learning with Question Query -
        your daily dose of intriguing questions to spark joy and ignite
        conversations. Whether you're looking to kickstart your day with a dose
        of wit or wind down with a quirky query, we have something for everyone.
      </p>
      <div>
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
          <li>
            Community Engagement: Be part of a community where you can vote on
            your favorite questions, share your views, and even contribute your
            own questions to the pool.
          </li>
          <li>
            Personalized Dashboard: Keep track of your activity, see the
            questions you've answered, and revisit your favorite moments on your
            personalized dashboard.
          </li>
        </ul>
      </div>
      <p>
        Join us in fostering a community of curiosity and discovery, one
        question at a time.
      </p>
      <Dashboard questions={questions} />
    </div>
  );
}

export default Home;
