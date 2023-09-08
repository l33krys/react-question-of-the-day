import React from "react";
import Randomizer from "../components/Randomizer";
import Dashboard from "./Dashboard";
import { Typography } from "@mui/material";

function Home({ questions }) {
  return (
    <div>
      <Randomizer questions={questions} />
      <div className="intro-text">
        <Typography variant="h4" align="left">
          Welcome to Question Query❓
        </Typography>
        <Typography variant="p" align="left">
          Dive into a world of curiosity, fun, and learning with Question Query
          - your daily dose of intriguing questions to spark joy and ignite
          conversations. Whether you're looking to kickstart your day with a
          dose of wit or wind down with a quirky query, we have something for
          everyone.
        </Typography>
        <div>
          <br />
          <Typography variant="h6" align="left">
            Why Question Query❓
          </Typography>
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
              your favorite questions, share your views, and even contribute
              your own questions to the pool.
            </li>
            <li>
              Personalized Dashboard: Keep track of your activity, see the
              questions you've answered, and revisit your favorite moments on
              your personalized dashboard.
            </li>
          </ul>
          <Typography variant="p">
            Join us in fostering a community of curiosity and discovery, one
            question at a time.
          </Typography>
        </div>
        <br />
      </div>

      <Dashboard questions={questions} />
    </div>
  );
}

export default Home;
