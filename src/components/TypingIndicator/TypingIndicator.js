import React from "react";
import classes from "./TypingIndicator.module.scss";

const typingIndicator = () => {
  return (
    <div className={classes.TypingIndicator}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default typingIndicator;
