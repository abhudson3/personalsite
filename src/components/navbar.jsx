import React from "react";
import "..//styles/navbar.css";


function Navbar(props) {
  return (
    <nav id="home">
      <div className="container-fluid">
        <ul className="navbar-list">{props.children}</ul>
      </div>
    </nav>
  );
}

export default Navbar;
