import React from "react";
import { Link } from "react-router-dom"

import { FiArrowRight } from "react-icons/fi";
import "../styles/pages/landing.css";
import LogoImg from "../images/map-marker.svg";

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={LogoImg} alt="Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Caxias do Sul</strong>
          <span>Rio Grande do Sul</span>
        </div>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
        </Link>
      </div>
    </div>
  );
}

export default Landing;