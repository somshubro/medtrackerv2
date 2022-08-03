import React from "react";
import Clock from "./Clock";

const NavBar = (props) => {
  const homeHandler = (event) => {
    event.preventDefault();
    const home = "home";
    props.onHomePage(home);
  };
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-primary">
        <a
          onClick={homeHandler}
          className="navbar-brand"
          href="http://localhost:3000/"
        >
          MedTracker
        </a>
        <Clock />
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
