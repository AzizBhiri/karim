import React from "react";
import "../Styles/Main.css";

function Main() {
  return (
    <div className="main">
      <label>Modèle</label>
      <select className="select-menu">
        <option>Choisir une option</option>
        <option>Carré</option>
        <option>Circulaire</option>
        <option>Rectangulaire</option>
      </select>
      <br /> <br />
      <br />
      <label>Support</label>
      <select className="select-menu">
        <option>Choisir une option</option>
        <option>Autocollant brillant</option>
        <option>Autocollant mat</option>
      </select>
      <br /> <br />
      <br />
      <label>Impression</label>
      <select className="select-menu">
        <option>Choisir une option</option>
        <option>4 Couleurs</option>
        <option>5 Couleurs et plus</option>
      </select>
      <br /> <br />
      <br />
      <label>Finition</label>
      <select className="select-menu">
        <option>Choisir une option</option>
        <option>Sans</option>
        <option>Pelliculage brillant</option>
        <option>Pelliculage mat</option>
        <option>Vernis acrylique</option>
      </select>
      <br /> <br />
      <br />
      <input type="submit" className="submit" value="OK" />
    </div>
  );
}

export default Main;
