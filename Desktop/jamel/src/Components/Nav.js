import React from "react";
import mainLogo from "../Images/mainLogo.png";
import "../Styles/Nav.css";

function Nav() {
  return (
    <div className="nav">
      <img className="main-logo" src={mainLogo} alt="Logo" />
      <div className="text">
        <div className="dropdown">
          <p className="dropbtn">Acceuil</p>
          <div className="dropdown-content">
            <a href="#">Bee Array</a>
            <a href="#">Nos services</a>
          </div>
        </div>
        <div className="dropdown">
          <p className="dropbtn">Produits</p>
          <div className="dropdown-content">
            <a href="#">Colonnes tiroirs</a>
            <a href="#">Tiroirs</a>
            <a href="#">Façades</a>
            <a href="#">Pièces détachées</a>
          </div>
        </div>
        <p className="dropbtn">Nouveautés</p>
        <p className="dropbtn">Contact</p>
      </div>
      <div className="menu">
        <i className="fa-solid fa-bars"></i>
      </div>
    </div>
  );
}

export default Nav;
