import React from "react";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info">
      <div className="societe">
        <h3>&gt; Contactez-nous</h3>
        <h3>&gt; A propos</h3>
        <h3>&gt; Nos magasins</h3>
      </div>
      <div className="legal">
        <h3>&gt; Livraison</h3>
        <h3>&gt; Conditions d'utilisation</h3>
        <h3>&gt; contact@beearray.com</h3>
      </div>
      <div className="contact">
        <h3 className="adresse">8 Rue Asdrubal, App 4 1er étage, Tunis</h3>
        <h3 className="tel">+216 98 940 440</h3>
        <div className="social-media">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-regular fa-envelope"></i>
        </div>
      </div>
    </div>
  );
}

export default Info;
