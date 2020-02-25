import React from "react";
import CloseIcon from "@material-ui/icons/Close";

import classes from "./Feedback.module.css";

const Feedback = props => {
  return (
    <div className={classes.Feedback}>
      <CloseIcon onClick={props.toggleFeedback} style={{ marginLeft: "90%" }} />
      <h3>How have you found chatting to Blether Bot today?</h3>
      <div className={classes.Emoji}>
        <span
          role="img"
          aria-label="happy"
          onClick={() => props.handleFeedback("happy")}
        >
          😀
        </span>
        <span
          role="img"
          aria-label="neutral"
          onClick={() => props.handleFeedback("neutral")}
        >
          😐
        </span>
        <span
          role="img"
          aria-label="unimpressed"
          onClick={() => props.handleFeedback("unimpressed")}
        >
          🙁
        </span>
      </div>
    </div>
  );
};

export default Feedback;
