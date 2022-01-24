import React from "react";
import { Button } from "../button/button.component";

import ReactPlayer from "react-player";

import "../../App.css";
import "./hero-section.styles.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      {/* <video autoPlay loop muted /> */}
      <ReactPlayer
        className="video"
        loop={true}
        width="100%"
        height="100%"
        muted={true}
        volume={0}
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
      />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
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
          onClick={console.log("hey")}
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
