import React from "react";
import { Link } from "react-router-dom";

const Menu = () => (
  <div className="menu">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>
      <ul>
        <li>
          <Link to="/users/john">John</Link>
        </li>
        <li>
          <Link to="/users/mike">Mike</Link>
        </li>
      </ul>
    </ul>
  </div>
);

export default Menu;
