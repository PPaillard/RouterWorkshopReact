import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {

  return (
      <nav>
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink to="/html">
          HTML
        </NavLink>
        <NavLink to="/css">
          CSS
        </NavLink>
        <NavLink to="/js">
          JS
        </NavLink>
        <NavLink to="/articles">
          Articles
        </NavLink>
      </nav>
  );
};

export default Header;
