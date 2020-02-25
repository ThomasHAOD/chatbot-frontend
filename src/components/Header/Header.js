import React from "react";
import CloseIcon from "@material-ui/icons/Close";

import logo from "../../assets/YoungScot-logo-01.png";
import chatbot from "../../assets/YS_Blether.png";
import classes from "./Header.module.css";

const Header = props => {
  return (
    <header className={classes.Header}>
      <img src={logo} alt="young scot logo" />
      <div>
        <h3>Blether Bot</h3>
        <img src={chatbot} alt="young scot logo" />
      </div>

      <span
        role="img"
        aria-label="leave feedback"
        onClick={props.toggleFeedback}
      >
        😀
      </span>

      <CloseIcon
        onClick={props.handleToggleDisplay}
        style={{ cursor: "pointer", margin: "5px" }}
      />
    </header>
  );
};

export default Header;
