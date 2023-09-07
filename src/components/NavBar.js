import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <h1>Logo</h1>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/add-question" activeClassName="active-link">
              Add Question
            </NavLink>
          </li>
          <li>
            <NavLink to="/questions" activeClassName="active-link">
              Questions
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" activeClassName="active-link">
              Dashboard
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
