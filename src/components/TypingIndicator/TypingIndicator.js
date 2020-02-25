import React from "react";
import classes from "./TypingIndicator.module.scss";

import chatbot from "../../assets/YS_Blether.png";

const typingIndicator = () => {
  return (
    <div className={classes.ImageIndicator}>
      <img src={chatbot} alt="chatbot" />
      <div className={classes.TypingIndicator}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default typingIndicator;
