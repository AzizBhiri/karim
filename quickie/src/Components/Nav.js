import React from "react";
import mainLogo from "../Images/mainLogo.png";
import "../Styles/Nav.css";

function Nav() {
  return (
    <div className="nav">
      <img className="main-logo" src={mainLogo} alt="Logo" />
      <div className="text">
        <h4>Acceuil</h4>
        <h4>A propos</h4>
        <h4>Contact</h4>
        <h4>Mon compte</h4>
      </div>
      <div className="menu">
        <i className="fa-solid fa-bars"></i>
      </div>
    </div>
  );
}

export default Nav;
