import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/invoices"}>Invoices</Link>
        </li>
        <li>
          <Link to={"/settings"}>Settings</Link>
        </li>
      </ul>
    </div>
  );
}
