import React from "react";
import { Button } from "../button/button.component";

import "../App.css";
import "./hero-section.styles.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src="../assets/videos/video-2.mp4" autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>

      <p>What are you wating for?</p>

      <div>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
