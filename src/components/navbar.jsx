import React, { Component } from "react";
import Counters from "./counters";

const NavBar = ({ totalCounters }) => {
  console.log("Navbar-Rendered ");
  return (
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pll basdge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
