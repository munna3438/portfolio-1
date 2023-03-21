import React, { memo } from "react";
import Typewriter from "typewriter-effect";
import "./intro.scss";
const typeConfig = {
  strings: ["Developer...", "Designer...", "Customizer..."],
  autoStart: true,
  loop: true,
};
const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgcontainer">
          <img
            src="asset/image/Picsart_22-10-06_21-43-39-691.jpg"
            alt=""
            srcset=""
          />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There,I'm</h2>
          <h1>Md Mashudur Rahman Munna</h1>
          <h3>
            I'm A
            <span>
              <Typewriter options={typeConfig} />
            </span>
          </h3>
        </div>
        <div className="arrow">
          <a href="#portfolio">
            <img src="asset/image/down.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default memo(Intro);
