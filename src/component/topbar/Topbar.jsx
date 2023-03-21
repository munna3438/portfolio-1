import React, { useState } from "react";
import { GrMail } from "react-icons/gr";
import { IoIosContact } from "react-icons/io";
import Menu from "../menu/Menu";
import "./topbar.scss";
const Topbar = () => {
  const [openManue, setOpenManue] = useState(false);

  let handelManue = () => {
    return openManue ? "active" : "";
  };
  return (
    <>
      <div className={`topbar ${handelManue()}`}>
        <div className="wrapper">
          <div className="left">
            <a href="#intro" className="logo">
              M.R.M
            </a>
            <div className="left-text">
              <IoIosContact className="icon" />
              <span>01634386892</span>
            </div>
            <div className="left-text">
              <GrMail className="icon" />
              <span>mashud24411@gmail.com</span>
            </div>
          </div>
          <div className="rigth">
            <div className="hamburger" onClick={() => setOpenManue(!openManue)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <Menu handelManue={handelManue()} />
    </>
  );
};

export default Topbar;
