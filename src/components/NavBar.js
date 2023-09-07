import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Box } from "@mui/material";
const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className=".app-bar">
        <Toolbar className=".tool-bar">
          <h1>Question Query ❓</h1>
          <p>Your daily source for your question of the day.</p>
          <NavLink
            to="/"
            exact
            className="navbar-link"
            activeClassName="active-link"
          >
            Home
          </NavLink>
          <NavLink
            to="/add-question"
            className="navbar-link"
            activeClassName="active-link"
          >
            Add Question
          </NavLink>
          <NavLink
            to="/questions"
            className="navbar-link"
            activeClassName="active-link"
          >
            Questions
          </NavLink>
          <NavLink
            to="/dashboard"
            className="navbar-link"
            activeClassName="active-link"
          >
            Dashboard
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
