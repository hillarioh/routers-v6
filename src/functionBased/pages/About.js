import React from "react";
import { Link, Outlet } from "react-router-dom";

const About = (props) => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/about/app">About App</Link>
        </li>
        <li>
          <Link to="/about/author">About Author</Link>
        </li>
      </ul>
      <h1>About page</h1>
      <Outlet />
    </div>
  );
};
export default About;
